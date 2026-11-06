/**
 * CarePoint Multispecialty Hospital & Research Center
 * Core Configuration & Global Constants
 */

window.HMS = window.HMS || {};

HMS.CONFIG = {
  APP_NAME: 'CarePoint HMS',
  HOSPITAL_NAME_BN: 'কেয়ারপয়েন্ট মাল্টিস্পেশালিটি হাসপাতাল ও রিসার্চ সেন্টার',
  HOSPITAL_NAME_EN: 'CarePoint Multispecialty Hospital & Research Center',
  TAGLINE_BN: 'উন্নত চিকিৎসা প্রযুক্তি ও মানবিক সেবায় আপনার নির্ভরযোগ্য ঠিকানা',
  TAGLINE_EN: 'Dedicated to Advanced Medical Care & Compassion',
  
  ADDRESS_BN: 'প্লট ১৮, রোড ৭, ধানমন্ডি, ঢাকা ১২০৫, বাংলাদেশ',
  ADDRESS_EN: 'Plot 18, Road 7, Dhanmondi, Dhaka 1205, Bangladesh',
  HOTLINE: '10678',
  PHONE: '+880 9612-888999',
  EMERGENCY: '+880 1711-000999',
  EMAIL: 'info@carepointhospital.bd',
  AMBULANCE: '+880 1711-000888',
  
  CURRENCY_SYMBOL: '৳',
  CURRENCY_CODE: 'BDT',
  TIMEZONE: 'Asia/Dhaka',
  DEFAULT_LANG: 'bn',
  DEFAULT_DATE_FORMAT: 'DD/MM/YYYY',
  VAT_RATE: 0.05, // 5% standard healthcare demo VAT
  
  STORAGE_KEYS: {
    DATA: 'carepoint_hms_data_v1',
    AUTH: 'carepoint_hms_auth_v1',
    LANG: 'carepoint_hms_lang_v1',
    SETTINGS: 'carepoint_hms_settings_v1'
  },
  
  ROLES: [
    { id: 'super_admin', name_bn: 'সুপার অ্যাডমিনিস্ট্রেটর', name_en: 'Super Administrator', icon: 'bi-shield-shaded' },
    { id: 'hospital_admin', name_bn: 'হাসপাতাল প্রশাসক', name_en: 'Hospital Administrator', icon: 'bi-building-gear' },
    { id: 'receptionist', name_bn: 'অভ্যর্থনাকারী (রিসেপশন)', name_en: 'Receptionist', icon: 'bi-person-badge' },
    { id: 'doctor', name_bn: 'চিকিৎসক (ডাক্তার)', name_en: 'Doctor', icon: 'bi-heart-pulse' },
    { id: 'nurse', name_bn: 'নার্স / সেবিকা', name_en: 'Nurse', icon: 'bi-activity' },
    { id: 'lab_technician', name_bn: 'ল্যাব টেকনিশিয়ান', name_en: 'Laboratory Technician', icon: 'bi-eyedropper' },
    { id: 'radiologist', name_bn: 'রেডিওলজিস্ট', name_en: 'Radiologist', icon: 'bi-person-video2' },
    { id: 'pharmacist', name_bn: 'ফার্মাসিস্ট', name_en: 'Pharmacist', icon: 'bi-capsule' },
    { id: 'accountant', name_bn: 'হিসাবরক্ষক (অ্যাকাউন্টেন্ট)', name_en: 'Accountant', icon: 'bi-cash-coin' },
    { id: 'hr_manager', name_bn: 'এইচআর ম্যানেজার', name_en: 'HR Manager', icon: 'bi-people' },
    { id: 'store_manager', name_bn: 'স্টোর ও ইনভেন্টরি ম্যানেজার', name_en: 'Store Manager', icon: 'bi-box-seam' },
    { id: 'it_officer', name_bn: 'আইটি অফিসার', name_en: 'IT Officer', icon: 'bi-hdd-network' },
    { id: 'patient', name_bn: 'রোগী (পেশেন্ট পোর্টাল)', name_en: 'Patient', icon: 'bi-person' }
  ],

  STATUSES: {
    APPOINTMENT: ['Pending', 'Confirmed', 'Checked In', 'Waiting', 'In Consultation', 'Completed', 'Cancelled', 'No Show'],
    ADMISSION: ['Admitted', 'Observation', 'Discharged', 'Transferred'],
    BED: ['Available', 'Occupied', 'Maintenance', 'Cleaning'],
    LAB_ORDER: ['Ordered', 'Sample Collected', 'Processing', 'Verified', 'Approved', 'Delivered'],
    BILLING: ['Paid', 'Partial', 'Unpaid', 'Refunded'],
    TRIAGE: ['Red (Resuscitation)', 'Yellow (Urgent)', 'Green (Non-Urgent)', 'Black (Deceased)'],
    PRESCRIPTION: ['Active', 'Dispensed', 'Expired']
  }
};

