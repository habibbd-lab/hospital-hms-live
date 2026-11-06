/**
 * CarePoint Hospital Management System
 * LocalStorage Data Persistence, Relational Simulation & Business Rules Engine
 */

window.HMS = window.HMS || {};

HMS.Storage = {
  data: null,

  init: function() {
    const raw = localStorage.getItem(HMS.CONFIG.STORAGE_KEYS.DATA);
    if (!raw) {
      this.resetToSeed();
    } else {
      try {
        this.data = JSON.parse(raw);
        // Ensure any new collections in SEED_DATA exist
        for (let key in HMS.SEED_DATA) {
          if (!this.data[key]) {
            this.data[key] = JSON.parse(JSON.stringify(HMS.SEED_DATA[key]));
          }
        }
      } catch (e) {
        console.error('Failed to parse stored HMS data, resetting to seed:', e);
        this.resetToSeed();
      }
    }
    return this.data;
  },

  save: function() {
    try {
      localStorage.setItem(HMS.CONFIG.STORAGE_KEYS.DATA, JSON.stringify(this.data));
      window.dispatchEvent(new CustomEvent('hms:data_updated', { detail: { timestamp: new Date().toISOString() } }));
    } catch (e) {
      console.error('LocalStorage save error:', e);
    }
  },

  resetToSeed: function() {
    this.data = JSON.parse(JSON.stringify(HMS.SEED_DATA));
    this.save();
    return this.data;
  },

  exportJSON: function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `carepoint_hms_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  importJSON: function(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.hospital || !parsed.patients || !parsed.doctors) {
        throw new Error('Invalid Hospital Management System data format.');
      }
      this.data = parsed;
      this.save();
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  },

  // Generic CRUD
  getCollection: function(name) {
    if (!this.data) this.init();
    return this.data[name] || [];
  },

  getById: function(collectionName, id) {
    const list = this.getCollection(collectionName);
    return list.find(item => item.id === id || item.uhid === id || item.appointment_no === id || item.invoice_no === id);
  },

  insert: function(collectionName, item) {
    if (!this.data) this.init();
    if (!this.data[collectionName]) {
      this.data[collectionName] = [];
    }
    this.data[collectionName].unshift(item);
    this.save();
    return item;
  },

  update: function(collectionName, id, updates) {
    if (!this.data) this.init();
    const list = this.data[collectionName];
    if (!list) return null;
    const index = list.findIndex(item => item.id === id || item.uhid === id || item.invoice_no === id);
    if (index !== -1) {
      list[index] = { ...list[index], ...updates };
      this.save();
      return list[index];
    }
    return null;
  },

  delete: function(collectionName, id) {
    if (!this.data) this.init();
    const list = this.data[collectionName];
    if (!list) return false;
    const initialLen = list.length;
    this.data[collectionName] = list.filter(item => item.id !== id && item.uhid !== id && item.invoice_no !== id);
    const deleted = this.data[collectionName].length < initialLen;
    if (deleted) this.save();
    return deleted;
  },

  // Domain Workflows & Business Rules

  // 1. Patient Registration & UHID Generator
  registerPatient: function(patientData) {
    const patients = this.getCollection('patients');
    const seq = patients.length + 1;
    const uhid = `CPH-2026-${String(seq).padStart(4, '0')}`;
    const newPatient = {
      id: `P-${String(seq).padStart(2, '0')}`,
      uhid: uhid,
      registered_date: new Date().toISOString().slice(0, 10),
      status: 'Active',
      ...patientData
    };
    this.insert('patients', newPatient);

    // Add notification
    this.addNotification({
      type: 'Registration',
      title: 'নতুন রোগী নিবন্ধন',
      desc: `${newPatient.name_bn || newPatient.name_en} (UHID: ${uhid}) সফলভাবে নিবন্ধিত হয়েছে।`
    });

    return newPatient;
  },

  // 2. Appointment Booking
  bookAppointment: function(aptData) {
    const apts = this.getCollection('appointments');
    const seq = apts.length + 1;
    const aptNo = `CPH-APT-${1000 + seq}`;
    const newApt = {
      id: `APT-2026-${String(seq).padStart(3, '0')}`,
      appointment_no: aptNo,
      token_no: seq,
      status: 'Confirmed',
      payment_status: 'Paid',
      created_at: new Date().toISOString().slice(0, 16).replace('T', ' '),
      ...aptData
    };
    this.insert('appointments', newApt);

    // Automatically generate an invoice for the appointment consultation fee
    this.insert('invoices', {
      id: `INV-2026-${String(this.getCollection('invoices').length + 1).padStart(3, '0')}`,
      invoice_no: `CPH-INV-${9000 + this.getCollection('invoices').length + 1}`,
      date: newApt.created_at,
      uhid: newApt.patient_uhid,
      patient_name: newApt.patient_name,
      patient_phone: newApt.patient_phone || '',
      items: [
        { desc: `Doctor Consultation Fee (${newApt.doctor_name})`, qty: 1, rate: newApt.fee, amount: newApt.fee }
      ],
      subtotal: newApt.fee,
      discount: 0,
      vat: 0,
      total: newApt.fee,
      paid_amount: newApt.fee,
      due_amount: 0,
      payment_method: 'Frontdesk / Online Demo',
      status: 'Paid',
      cashier: 'System Auto'
    });

    this.addNotification({
      type: 'Appointment',
      title: 'নতুন অ্যাপয়েন্টমেন্ট বুকিং',
      desc: `${newApt.patient_name} - ${newApt.doctor_name} (${newApt.date} ${newApt.time_slot})`
    });

    return newApt;
  },

  // 3. Bed Allocation & Patient Admission
  admitPatient: function(admissionData) {
    const beds = this.getCollection('beds');
    const bed = beds.find(b => b.id === admissionData.bed_id);
    
    // Business Rule: Check if bed is already occupied
    if (!bed || bed.status === 'Occupied') {
      throw new Error('নির্বাচিত বেডটি বর্তমানে খালি নেই। অনুগ্রহ করে অন্য বেড নির্বাচন করুন।');
    }

    // Allocate bed
    this.update('beds', bed.id, {
      status: 'Occupied',
      patient_name: admissionData.patient_name,
      patient_uhid: admissionData.uhid
    });

    // Mark patient as Admitted
    this.update('patients', admissionData.uhid, { status: 'Admitted' });

    const admissions = this.getCollection('admissions');
    const seq = admissions.length + 1;
    const newAdm = {
      id: `ADM-2026-${String(seq).padStart(3, '0')}`,
      admission_no: `CPH-IPD-${5000 + seq}`,
      admission_date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      status: 'Admitted',
      bed_number: bed.number,
      ward_name: bed.ward_name,
      ...admissionData
    };
    this.insert('admissions', newAdm);

    this.addNotification({
      type: 'Admission',
      title: 'নতুন রোগী ভর্তি (IPD)',
      desc: `${newAdm.patient_name} কে ${bed.ward_name} এর বেড ${bed.number} এ ভর্তি করা হয়েছে।`
    });

    return newAdm;
  },

  // 4. Discharge Patient & Release Bed
  dischargePatient: function(admissionId, dischargeData = {}) {
    const adm = this.getById('admissions', admissionId);
    if (!adm) return null;

    // Release bed
    if (adm.bed_id) {
      this.update('beds', adm.bed_id, {
        status: 'Available',
        patient_name: '',
        patient_uhid: ''
      });
    }

    // Update patient status to Active (discharged)
    if (adm.uhid) {
      this.update('patients', adm.uhid, { status: 'Active' });
    }

    // Update admission record
    const updated = this.update('admissions', admissionId, {
      status: 'Discharged',
      discharge_date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      discharge_summary: dischargeData.summary || 'রোগীর শারীরিক অবস্থা সন্তোষজনক ও স্থিতিশীল বিবেচনায় ছাড়পত্র প্রদান করা হলো।'
    });

    this.addNotification({
      type: 'Discharge',
      title: 'রোগী ছাড়পত্র (Discharge)',
      desc: `${adm.patient_name} কে হাসপাতাল থেকে ছাড়পত্র প্রদান করা হয়েছে এবং বেড ${adm.bed_number} খালি করা হয়েছে।`
    });

    return updated;
  },

  // 5. Pharmacy Sale & Stock Deduction
  createPharmacySale: function(saleData) {
    // Validate stock
    for (let item of saleData.items) {
      const med = this.getById('medicines', item.medicine_id);
      if (!med) throw new Error(`ঔষধ পাওয়া যায়নি: ${item.brand}`);
      if (med.stock < item.qty) {
        throw new Error(`${med.brand} এর প্রয়োজনীয় স্টক নেই। বিদ্যমান স্টক: ${med.stock}`);
      }
    }

    // Deduct stock
    for (let item of saleData.items) {
      const med = this.getById('medicines', item.medicine_id);
      this.update('medicines', med.id, {
        stock: med.stock - item.qty
      });
    }

    // Create Invoice
    const invoices = this.getCollection('invoices');
    const seq = invoices.length + 1;
    const newInv = {
      id: `INV-2026-${String(seq).padStart(3, '0')}`,
      invoice_no: `CPH-INV-${9000 + seq}`,
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      uhid: saleData.uhid || 'WALK-IN',
      patient_name: saleData.patient_name || 'Walk-in Customer',
      patient_phone: saleData.patient_phone || '',
      items: saleData.items.map(i => ({ desc: `${i.brand} (${i.generic})`, qty: i.qty, rate: i.unit_price, amount: i.qty * i.unit_price })),
      subtotal: saleData.subtotal,
      discount: saleData.discount || 0,
      vat: saleData.vat || 0,
      total: saleData.total,
      paid_amount: saleData.paid_amount || saleData.total,
      due_amount: (saleData.total - (saleData.paid_amount || saleData.total)),
      payment_method: saleData.payment_method || 'Cash',
      status: (saleData.total - (saleData.paid_amount || saleData.total)) <= 0 ? 'Paid' : 'Partial',
      cashier: 'ফার্মাসিস্ট (POS Counter)'
    };
    this.insert('invoices', newInv);
    return newInv;
  },

  // 6. Record Payment on Invoice
  recordInvoicePayment: function(invoiceId, payAmount, method = 'Cash') {
    const inv = this.getById('invoices', invoiceId);
    if (!inv) return null;
    const newPaid = Number(inv.paid_amount) + Number(payAmount);
    const newDue = Math.max(0, Number(inv.total) - newPaid);
    const newStatus = newDue <= 0 ? 'Paid' : 'Partial';

    return this.update('invoices', invoiceId, {
      paid_amount: newPaid,
      due_amount: newDue,
      status: newStatus,
      payment_method: `${inv.payment_method}, ${method}`
    });
  },

  // 7. Notification helper
  addNotification: function(notif) {
    const list = this.getCollection('notifications');
    const newNotif = {
      id: `NOTIF-${String(list.length + 1).padStart(2, '0')}`,
      time: 'এইমাত্র (Just now)',
      unread: true,
      ...notif
    };
    this.insert('notifications', newNotif);
    return newNotif;
  },

  // Dynamic Dashboard Stats Calculation
  calculateDashboardStats: function() {
    if (!this.data) this.init();
    const patients = this.getCollection('patients');
    const doctors = this.getCollection('doctors');
    const appointments = this.getCollection('appointments');
    const admissions = this.getCollection('admissions');
    const beds = this.getCollection('beds');
    const labOrders = this.getCollection('lab_orders');
    const invoices = this.getCollection('invoices');
    const emergencyCases = this.getCollection('emergency_cases');
    const medicines = this.getCollection('medicines');

    const totalPatients = patients.length;
    const activeDoctors = doctors.filter(d => d.status === 'Available').length;
    const totalAppointments = appointments.length;
    const pendingAppointments = appointments.filter(a => a.status === 'Pending' || a.status === 'Waiting').length;
    const occupiedBeds = beds.filter(b => b.status === 'Occupied').length;
    const availableBeds = beds.filter(b => b.status === 'Available').length;
    const pendingLabs = labOrders.filter(l => l.status !== 'Approved' && l.status !== 'Delivered').length;
    
    // Revenue calculations
    let todayRevenue = 0;
    let monthlyRevenue = 0;
    let outstandingDue = 0;

    invoices.forEach(inv => {
      todayRevenue += Number(inv.paid_amount || 0);
      monthlyRevenue += Number(inv.paid_amount || 0);
      outstandingDue += Number(inv.due_amount || 0);
    });

    const activeAdmissions = admissions.filter(a => a.status === 'Admitted').length;
    const lowStockMedicines = medicines.filter(m => m.stock <= m.reorder_level).length;

    return {
      totalPatients,
      activeDoctors,
      totalAppointments,
      pendingAppointments,
      occupiedBeds,
      availableBeds,
      pendingLabs,
      todayRevenue,
      monthlyRevenue,
      outstandingDue,
      activeAdmissions,
      emergencyCount: emergencyCases.length,
      lowStockCount: lowStockMedicines
    };
  }
};

