# MODULE DOCUMENTATION
## Complete Functional Breakdown of CarePoint Hospital Management System (HMS)

### 1. System Modules Directory

This document details the functional specifications, workflows, and state transitions of all 29 hospital modules implemented in this system.

---

### Module 1: Patient Management (`admin/patients.html`)
- **Features:** Automated UHID sequence generator (`CPH-2026-XXXX`), patient directory, multi-parameter search (name, phone, UHID), filtering by gender, blood group, and status ('Active', 'Admitted').
- **Detail View:** Full tabbed medical records modal displaying Personal Demographics, Allergies & Chronic Conditions, Appointment History, Diagnostic Reports, Inpatient Admissions, and Invoices.
- **Printing:** Printable Smart Patient Health Card with embedded barcode/QR representation.

---

### Module 2: Doctor Management (`admin/doctors.html`)
- **Features:** Comprehensive doctor directory, specialty degrees (MBBS, FCPS, MD, MRCP), consultation fees (BDT ৳), room numbers, and weekly chamber schedules.
- **Availability Management:** Quick toggle between "Available" and "On Leave".
- **Integration:** Clicking "Appointments" filters directly to that doctor's queue.

---

### Module 3: Appointment Management (`admin/appointments.html`)
- **Features:** Real-time queue with daily token numbering (`Token #1, #2...`), status lifecycle (`Pending` -> `Confirmed` -> `Checked In` -> `Waiting` -> `In Consultation` -> `Completed` -> `Cancelled`).
- **Billing Integration:** Every confirmed appointment automatically generates a consultation fee invoice in the Billing module.
- **Slip Generation:** Printable appointment slip with patient name, doctor, chamber, and queue token.

---

### Module 4: OPD Outpatient Management (`admin/opd.html`)
- **Doctor Consultation Workspace:**
  - Live patient queue list showing checked-in patients.
  - Vitals Recording: Blood Pressure, Heart Rate, Temperature, Respiratory Rate, Oxygen Saturation (SpO2), Weight, and Height.
  - Clinical Diagnosis & Chief Complaints editor.
  - Digital Prescription Builder: Add medicine rows with drug name, dosage (e.g. ১+০+১), duration, and instructions.
  - Investigation Requisitions: Typing lab test requests automatically triggers lab orders in the LIS module!
  - Printable Prescription Paper with international Rx symbol and hospital letterhead.

---

### Module 5: IPD Inpatient Management (`admin/ipd.html`)
- **Admission Workflow:**
  - Patient lookup from registered directory.
  - Bed allocation dropdown showing ONLY vacant beds (strictly prevents assigning an occupied bed).
  - Advance deposit logging.
- **Care Workflow:** Daily progress notes, attending doctor rounds.
- **Discharge Workflow:**
  - Releases the allocated bed back to "Available".
  - Sets patient status to discharged.
  - Generates a printable Inpatient Discharge Summary with clinical outcome and home care instructions.

---

### Module 6: Laboratory Information System (LIS) (`admin/laboratory.html`)
- **Catalog:** Standard pathology test catalog with pricing, normal reference ranges, and turnaround times (CBC, Lipid Profile, HbA1c, Serum Creatinine, Dengue NS1, LFT, TSH, Urine R/M/E).
- **Order Lifecycle:** `Ordered` -> `Sample Collected` (generates barcode/sample ID) -> `Processing` -> `Result Entry` -> `Approved`.
- **Result Entry:** Technician enters numerical parameters; values outside the reference range are flagged as High or Low.
- **Patient Access:** Approved reports immediately become visible and downloadable in the Patient Portal.

---

### Module 7: Radiology & Imaging (`admin/radiology.html`)
- **Imaging Services:** Digital X-Ray, CT Scan Brain, MRI Lumbar Spine, USG Whole Abdomen, Echocardiogram with Color Doppler.
- **Workflow:** Imaging orders, schedule tracking, radiologist clinical impression entry, and simulated PACS/DICOM console viewer.

---

### Module 8: Pharmacy & POS Counter (`admin/pharmacy.html`)
- **Inventory Management:** Medicines categorized by generic and brand name, batch numbers, manufacturer, purchase price, retail price, stock levels, and expiry tracking.
- **Live POS Terminal:** Fast cart addition, automatic subtotal and 5% VAT calculation, and instant payment recording.
- **Stock Automation:** Completing a sale automatically deducts the sold quantity from warehouse inventory and generates a billing invoice.

---

### Module 9: Billing & Financial Accounting (`admin/billing.html`)
- **Invoice Tracking:** Centralized ledger of all outpatient consultations, laboratory tests, hospital admissions, and pharmacy sales.
- **Payment Collection:** Record partial or full payments via Cash, bKash, Nagad, Rocket, or Bank Card.
- **Financial Balances:** Automatically computes Subtotal, Discount, VAT, Paid Amount, and Net Outstanding Due.
- **Receipts:** Printable official hospital money receipt.

---

### Module 10: Bed & Ward Matrix (`admin/beds.html`)
- **Visual Bed Map:** Color-coded visual matrix grouped by Male General Ward, Female General Ward, CCU, ICU, and Deluxe Cabins.
- **Interactive State:** Hovering and clicking beds reveals occupancy details, patient names, and provides 1-click patient admission.

---

### Module 11: Operation Theatre (`admin/operation-theatre.html`)
- **OT Suite Scheduling:** Tracks OT-1 (General), OT-2 (Cardiac/Cath Lab), and OT-3 (Laparoscopic).
- **Roster:** Lead surgeon, anesthesiologist, surgery type, pre-op anesthesia fitness notes, and surgery completion status.

---

### Module 12: Emergency & Triage (`admin/emergency.html`)
- **International Triage Protocol:**
  - **Red (Resuscitation):** Immediate life-threatening cases (Crushing chest pain, severe hypoxia, cardiac arrest).
  - **Yellow (Urgent):** Urgent trauma, open fractures, lacerations requiring stabilization.
  - **Green (Non-Urgent):** Mild fever, sprains, stable conditions.
- **Fast-Track IPD Transfer:** 1-click button to immediately transfer stabilized patients to CCU or ICU.

---

### Module 13: ICU & CCU Monitoring (`admin/icu.html`)
- **Bedside Monitors:** Live simulation of patient heart rate, non-invasive blood pressure (NIBP), oxygen saturation (SpO2), body temperature, and ventilator parameters (PEEP, Tidal Volume).
- **Alarms:** Abnormal vital alert indications.

---

### Module 14: Nursing Management (`admin/nursing.html`)
- **Medication Administration Record (MAR):** Daily checklist for 8:00 AM, 2:00 PM, and 8:00 PM doses.
- **Shift Handover:** Digital logbook recording critical patient updates between morning, evening, and night shifts.

---

### Module 15: Blood Bank (`admin/blood-bank.html`)
- **Blood Stock:** Real-time unit counts for all 8 blood groups (A+, A-, B+, B-, O+, O-, AB+, AB-).
- **Issue Workflow:** 1-click verification and stock reduction for clinical surgeries.
- **Donor Registry:** Tracks donor contact, last donation date, and 90-day eligibility intervals.

---

### Module 16: Ambulance Fleet (`admin/ambulance.html`)
- **Vehicle Fleet:** Dhaka Metro registered vehicles categorized by ICU Cardiac Ambulance, Advanced Life Support (ALS), and Patient Transport.
- **Dispatch Desk:** Record emergency pickup locations, destinations, and assigned drivers with contact hotlines.

---

### Module 17: HR & Payroll (`admin/hr.html`)
- **Employee Roster:** Doctors, nurses, technologists, accountants, and front desk executives.
- **Attendance & Leave:** Quick attendance toggle ('Present' / 'On Leave').
- **Payroll:** Automated monthly salary breakdown (Basic, House Rent, Medical Allowance, Provident Fund deductions) with printable payslips.

---

### Module 18: Inventory & Procurement (`admin/inventory.html`)
- **Hospital Consumables:** Surgical gloves, disposable syringes, IV cannula, intravenous fluids, oxygen masks.
- **Requisitions:** Purchase order workflow and minimum stock reorder warnings.

---

### Module 19: Health Insurance & TPA (`admin/insurance.html`)
- **Insurance Networks:** Green Delta Insurance, MetLife Bangladesh, Pragati Life.
- **Cashless Desk:** Policy number verification and patient claim tracking (Approved vs Pending).

---

### Module 20: Medical Records (MRD) (`admin/medical-records.html`)
- **Clinical Dossier:** Centralized repository of archived patient files.
- **Compliance Audit:** Tracks timestamps and user identities for every medical document access.

---

### Module 21: Auxiliary Hospital Modules (`admin/additional-modules.html`)
- Covers Diet & Clinical Nutrition, Housekeeping Shift Roster, Laundry Batch Tracking, Biomedical Equipment PPM, Telemedicine Virtual Clinic, and Security Visitor Passes.

---

### Module 22: Reports & Analytics (`admin/reports.html`)
- **Dynamic Report Engine:** Filter reports by type (Financial, Patients, Appointments, IPD Admissions, Laboratory LIS), start date, and end date.
- **Outputs:** Universal CSV data export and browser print formatting.

---

### Module 23: Website CMS (`admin/cms.html`)
- **Public Content Management:** Manage homepage hero title, hospital subtitles, emergency contact hotlines, health packages, and publish health articles.

---

### Module 24: Notification Center (`admin/notifications.html`)
- **Event Alerts:** Real-time notifications for appointment bookings, critical lab ready alerts, emergency triage arrivals, and low stock warnings.

---

### Module 25: System Settings & Security (`admin/settings.html`)
- **System Config:** Hospital license, address, hotline, default language (Bangla default), timezone (`Asia/Dhaka`), currency (`৳ BDT`).
- **User Accounts:** Directory of all 13 demo role accounts.
- **RBAC Matrix:** Visual matrix of module permissions per role.
- **Data Engine:** 1-click JSON backup export, JSON backup import, and demo data reset.
