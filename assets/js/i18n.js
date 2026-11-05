/**
 * CarePoint Hospital Management System
 * Localization (i18n) Engine: Bangla (Default) & English
 */

window.HMS = window.HMS || {};

HMS.I18n = {
  currentLang: 'bn',

  dict: {
    bn: {
      // General
      app_name: 'কেয়ারপয়েন্ট এইচএমএস',
      hospital_name: 'কেয়ারপয়েন্ট মাল্টিস্পেশালিটি হাসপাতাল',
      tagline: 'উন্নত চিকিৎসা প্রযুক্তি ও মানবিক সেবায় নিবেদিত',
      welcome: 'স্বাগতম',
      search: 'অনুসন্ধান...',
      filter: 'ফিল্টার',
      reset: 'রিসেট',
      export_csv: 'CSV এক্সপোর্ট',
      print: 'প্রিন্ট করুন',
      save: 'সংরক্ষণ করুন',
      cancel: 'বাতিল',
      close: 'বন্ধ করুন',
      edit: 'সম্পাদনা',
      delete: 'মুছুন',
      view: 'বিস্তারিত',
      action: 'পদক্ষেপ',
      status: 'অবস্থা',
      all: 'সকল',
      yes: 'হ্যাঁ',
      no: 'না',
      confirm_delete: 'আপনি কি নিশ্চিত যে এই রেকর্ডটি মুছে ফেলতে চান?',
      success_save: 'সফলভাবে সংরক্ষিত হয়েছে!',
      success_delete: 'সফলভাবে মুছে ফেলা হয়েছে!',
      demo_badge: 'ডেমো মোড: স্থানীয় ব্রাউজার লোকালস্টোরেজ ডেটা',
      reset_demo_data: 'ডেমো ডেটা রিসেট করুন',
      export_demo_json: 'ডেমো ডেটা এক্সপোর্ট (JSON)',
      import_demo_json: 'ডেমো ডেটা ইমপোর্ট (JSON)',

      // Navigation
      nav_home: 'হোম',
      nav_about: 'আমাদের সম্পর্কে',
      nav_departments: 'বিভাগসমূহ',
      nav_doctors: 'ডাক্তারগণ',
      nav_services: 'সেবাসমূহ',
      nav_packages: 'হেলথ প্যাকেজ',
      nav_facilities: 'সুযোগ-সুবিধা',
      nav_health_library: 'স্বাস্থ্য কথিকা',
      nav_news_events: 'সংবাদ ও ইভেন্ট',
      nav_careers: 'ক্যারিয়ার',
      nav_contact: 'যোগাযোগ',
      nav_appointment: 'অ্যাপয়েন্টমেন্ট বুকিং',
      nav_login: 'লগইন',
      nav_register: 'রোগী নিবন্ধন',
      nav_dashboard: 'ড্যাশবোর্ড',
      nav_patient_portal: 'পেশেন্ট পোর্টাল',

      // Admin Sidebar Headings & Modules
      side_main: 'প্রধান',
      side_patient_care: 'রোগী সেবা ও ক্লিনিকাল',
      side_medical_staff: 'মেডিকেল স্টাফ',
      side_clinical_services: 'ক্লিনিকাল সার্ভিসেস',
      side_hospital_ops: 'হাসপাতাল অপারেশন',
      side_finance: 'ফাইন্যান্স ও বিলিং',
      side_admin_hr: 'প্রশাসন ও এইচআর',
      side_analytics: 'রিপোর্ট ও অ্যানালিটিক্স',
      side_system: 'সিস্টেম সেটিংস',

      mod_dashboard: 'ড্যাশবোর্ড',
      mod_patients: 'রোগী ব্যবস্থাপনা',
      mod_doctors: 'ডাক্তার ব্যবস্থাপনা',
      mod_appointments: 'অ্যাপয়েন্টমেন্ট',
      mod_opd: 'বহিঃবিভাগ (OPD)',
      mod_ipd: 'অন্তঃবিভাগ (IPD)',
      mod_lab: 'ল্যাবরেটরি (LIS)',
      mod_radiology: 'রেডিওলজি ও ইমেজিং',
      mod_pharmacy: 'ফার্মেসি ব্যবস্থাপনা',
      mod_billing: 'বিলিং ও অ্যাকাউন্টস',
      mod_beds: 'বেড ও ওয়ার্ড',
      mod_ot: 'অপারেশন থিয়েটার (OT)',
      mod_emergency: 'জরুরি বিভাগ ও ট্রায়াজ',
      mod_icu: 'আইসিইউ / সিসিইউ',
      mod_nursing: 'নার্সিং স্টেশন',
      mod_bloodbank: 'ব্লাড ব্যাংক',
      mod_ambulance: 'অ্যাম্বুলেন্স সার্ভিস',
      mod_hr: 'এইচআর ও পেরোল',
      mod_inventory: 'ইনভেন্টরি ও প্রকিউরমেন্ট',
      mod_insurance: 'স্বাস্থ্য বীমা (TPA)',
      mod_mrd: 'মেডিকেল রেকর্ডস (MRD)',
      mod_additional: 'অন্যান্য হাসপাতাল মডিউল',
      mod_reports: 'রিপোর্টস ও অ্যানালিটিক্স',
      mod_cms: 'ওয়েবসাইট CMS',
      mod_notifications: 'বিজ্ঞপ্তি কেন্দ্র',
      mod_settings: 'সিস্টেম সেটিংস ও নিরাপত্তা',

      // Dashboard Stats
      stat_total_patients: 'মোট নিবন্ধিত রোগী',
      stat_new_patients: 'নতুন রোগী',
      stat_today_appointments: 'আজকের অ্যাপয়েন্টমেন্ট',
      stat_today_admissions: 'আজকের ভর্তি (IPD)',
      stat_occupied_beds: 'অধিকৃত বেড',
      stat_available_beds: 'খালি বেড',
      stat_pending_labs: 'অপেক্ষমাণ ল্যাব টেস্ট',
      stat_today_revenue: 'আজকের মোট আয়',
      stat_monthly_revenue: 'চলতি মাসের আয়',
      stat_emergency_cases: 'জরুরি রোগী',
      stat_pharmacy_sales: 'আজকের ফার্মেসি বিক্রয়',
      stat_active_doctors: 'অন-ডিউটি চিকিৎসক',

      // Patient Portal
      patient_my_profile: 'আমার প্রোফাইল',
      patient_my_appointments: 'আমার অ্যাপয়েন্টমেন্ট',
      patient_my_prescriptions: 'আমার প্রেসক্রিপশন',
      patient_my_reports: 'আমার টেস্ট রিপোর্ট',
      patient_my_admissions: 'ভর্তি ইতিহাস ও ছাড়পত্র',
      patient_my_bills: 'বিল ও অনলাইন পেমেন্ট',

      // Statuses
      status_pending: 'অপেক্ষমাণ',
      status_confirmed: 'নিশ্চিত',
      status_completed: 'সম্পন্ন',
      status_cancelled: 'বাতিল',
      status_admitted: 'ভর্তি আছে',
      status_discharged: 'ছাড়পত্র প্রাপ্ত',
      status_available: 'খালি আছে',
      status_occupied: 'ব্যবহৃত',
      status_maintenance: 'মেরামত চলছে',
      status_paid: 'পরিশোধিত',
      status_unpaid: 'বকেয়া',
      status_partial: 'আংশিক পরিশোধ'
    },

    en: {
      // General
      app_name: 'CarePoint HMS',
      hospital_name: 'CarePoint Multispecialty Hospital',
      tagline: 'Dedicated to Advanced Medical Care & Compassion',
      welcome: 'Welcome',
      search: 'Search...',
      filter: 'Filter',
      reset: 'Reset',
      export_csv: 'Export CSV',
      print: 'Print',
      save: 'Save Changes',
      cancel: 'Cancel',
      close: 'Close',
      edit: 'Edit',
      delete: 'Delete',
      view: 'View Details',
      action: 'Action',
      status: 'Status',
      all: 'All',
      yes: 'Yes',
      no: 'No',
      confirm_delete: 'Are you sure you want to delete this record?',
      success_save: 'Saved successfully!',
      success_delete: 'Deleted successfully!',
      demo_badge: 'Demo Mode: Local Browser LocalStorage Data',
      reset_demo_data: 'Reset Demo Data',
      export_demo_json: 'Export Demo Data (JSON)',
      import_demo_json: 'Import Demo Data (JSON)',

      // Navigation
      nav_home: 'Home',
      nav_about: 'About Us',
      nav_departments: 'Departments',
      nav_doctors: 'Doctors',
      nav_services: 'Services',
      nav_packages: 'Health Packages',
      nav_facilities: 'Facilities',
      nav_health_library: 'Health Library',
      nav_news_events: 'News & Events',
      nav_careers: 'Careers',
      nav_contact: 'Contact Us',
      nav_appointment: 'Book Appointment',
      nav_login: 'Login',
      nav_register: 'Patient Register',
      nav_dashboard: 'Dashboard',
      nav_patient_portal: 'Patient Portal',

      // Admin Sidebar Headings & Modules
      side_main: 'MAIN',
      side_patient_care: 'PATIENT CARE',
      side_medical_staff: 'MEDICAL STAFF',
      side_clinical_services: 'CLINICAL SERVICES',
      side_hospital_ops: 'HOSPITAL OPERATIONS',
      side_finance: 'FINANCE & BILLING',
      side_admin_hr: 'ADMINISTRATION & HR',
      side_analytics: 'ANALYTICS & REPORTS',
      side_system: 'SYSTEM & SECURITY',

      mod_dashboard: 'Dashboard',
      mod_patients: 'Patient Management',
      mod_doctors: 'Doctor Management',
      mod_appointments: 'Appointments',
      mod_opd: 'OPD Outpatient',
      mod_ipd: 'IPD Inpatient',
      mod_lab: 'Laboratory (LIS)',
      mod_radiology: 'Radiology & Imaging',
      mod_pharmacy: 'Pharmacy Management',
      mod_billing: 'Billing & Accounts',
      mod_beds: 'Bed & Ward Management',
      mod_ot: 'Operation Theatre',
      mod_emergency: 'Emergency & Triage',
      mod_icu: 'ICU / CCU Care',
      mod_nursing: 'Nursing Station',
      mod_bloodbank: 'Blood Bank',
      mod_ambulance: 'Ambulance Services',
      mod_hr: 'HR & Payroll',
      mod_inventory: 'Inventory & Procurement',
      mod_insurance: 'Insurance (TPA)',
      mod_mrd: 'Medical Records (MRD)',
      mod_additional: 'Hospital Auxiliary',
      mod_reports: 'Reports & Analytics',
      mod_cms: 'Website CMS',
      mod_notifications: 'Notification Center',
      mod_settings: 'System Settings',

      // Dashboard Stats
      stat_total_patients: 'Total Patients',
      stat_new_patients: 'New Patients',
      stat_today_appointments: "Today's Appointments",
      stat_today_admissions: "Today's Admissions",
      stat_occupied_beds: 'Occupied Beds',
      stat_available_beds: 'Available Beds',
      stat_pending_labs: 'Pending Lab Tests',
      stat_today_revenue: "Today's Revenue",
      stat_monthly_revenue: 'Monthly Revenue',
      stat_emergency_cases: 'Emergency Cases',
      stat_pharmacy_sales: 'Pharmacy Sales',
      stat_active_doctors: 'Active Doctors',

      // Patient Portal
      patient_my_profile: 'My Profile',
      patient_my_appointments: 'My Appointments',
      patient_my_prescriptions: 'My Prescriptions',
      patient_my_reports: 'My Lab Reports',
      patient_my_admissions: 'Admissions & Discharges',
      patient_my_bills: 'Bills & Payments',

      // Statuses
      status_pending: 'Pending',
      status_confirmed: 'Confirmed',
      status_completed: 'Completed',
      status_cancelled: 'Cancelled',
      status_admitted: 'Admitted',
      status_discharged: 'Discharged',
      status_available: 'Available',
      status_occupied: 'Occupied',
      status_maintenance: 'Maintenance',
      status_paid: 'Paid',
      status_unpaid: 'Unpaid',
      status_partial: 'Partial'
    }
  },

  init: function() {
    const saved = localStorage.getItem(HMS.CONFIG.STORAGE_KEYS.LANG);
    this.currentLang = saved || HMS.CONFIG.DEFAULT_LANG || 'bn';
    document.body.classList.toggle('lang-en', this.currentLang === 'en');
    this.apply();
  },

  setLanguage: function(lang) {
    if (lang !== 'bn' && lang !== 'en') lang = 'bn';
    this.currentLang = lang;
    localStorage.setItem(HMS.CONFIG.STORAGE_KEYS.LANG, lang);
    document.body.classList.toggle('lang-en', lang === 'en');
    this.apply();
    // Trigger any reactive updates on custom components
    window.dispatchEvent(new CustomEvent('hms:lang_changed', { detail: { lang: lang } }));
  },

  t: function(key, fallback = '') {
    const langDict = this.dict[this.currentLang] || this.dict.bn;
    return langDict[key] || fallback || key;
  },

  apply: function(container = document) {
    // Translate text elements
    container.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      if (translation) {
        el.textContent = translation;
      }
    });

    // Translate placeholder attributes
    container.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.t(key);
      if (translation) {
        el.setAttribute('placeholder', translation);
      }
    });

    // Update active state in language switch buttons
    document.querySelectorAll('.lang-btn-bn').forEach(btn => {
      btn.classList.toggle('active', this.currentLang === 'bn');
    });
    document.querySelectorAll('.lang-btn-en').forEach(btn => {
      btn.classList.toggle('active', this.currentLang === 'en');
    });
  },

  formatCurrency: function(num) {
    const n = Number(num) || 0;
    if (this.currentLang === 'bn') {
      const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      const formatted = n.toLocaleString('en-IN');
      const bnStr = formatted.replace(/\d/g, d => bnDigits[d]);
      return `৳${bnStr}`;
    }
    return `৳${n.toLocaleString('en-IN')}`;
  },

  formatNumber: function(num) {
    const n = Number(num) || 0;
    if (this.currentLang === 'bn') {
      const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return n.toString().replace(/\d/g, d => bnDigits[d]);
    }
    return n.toString();
  },

  formatDate: function(dateStr) {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      const day = String(d.getDate()).padStart(2, '0');
      const monthNamesEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const monthNamesBn = ['জানু', 'ফেব্রু', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টে', 'অক্টো', 'নভে', 'ডিসে'];
      const year = d.getFullYear();
      if (this.currentLang === 'bn') {
        return `${this.formatNumber(day)} ${monthNamesBn[d.getMonth()]} ${this.formatNumber(year)}`;
      }
      return `${day} ${monthNamesEn[d.getMonth()]} ${year}`;
    } catch(e) {
      return dateStr;
    }
  }
};
