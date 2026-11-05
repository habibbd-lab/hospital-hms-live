/**
 * CarePoint Multispecialty Hospital & Research Center
 * Centralized Realistic Bangladeshi Healthcare Demo Dataset
 */

window.HMS = window.HMS || {};

HMS.SEED_DATA = {
  // Hospital Profile & Branches
  hospital: {
    name_bn: 'কেয়ারপয়েন্ট মাল্টিস্পেশালিটি হাসপাতাল ও গবেষণা কেন্দ্র',
    name_en: 'CarePoint Multispecialty Hospital & Research Center',
    code: 'CPH-DHAKA',
    license: 'DGHS-REG-2018-9842',
    address: 'প্লট ১৮, রোড ৭, ধানমন্ডি, ঢাকা ১২০৫, বাংলাদেশ',
    hotline: '10678',
    phone: '+880 9612-888999',
    emergency: '+880 1711-000999',
    email: 'info@carepointhospital.bd',
    website: 'https://carepointhospital.bd',
    currency: '৳',
    timezone: 'Asia/Dhaka',
    branches: [
      { id: 'BR-01', name: 'ধানমন্ডি মূল ক্যাম্পাস (Main Hospital)', address: 'রোড ৭, ধানমন্ডি, ঢাকা', beds: 350, is_main: true },
      { id: 'BR-02', name: 'উত্তরা স্পেশালাইজড কেয়ার উইং', address: 'সেক্টর ৩, উত্তরা, ঢাকা', beds: 120, is_main: false }
    ]
  },

  // Users for Role-Based Login Demo
  users: [
    { id: 'USR-01', username: 'admin', role: 'super_admin', name: 'প্রকৌ. জহিরুল ইসলাম', email: 'admin@carepoint.bd', phone: '+880 1711-100001', dept: 'Administration' },
    { id: 'USR-02', username: 'hosp_admin', role: 'hospital_admin', name: 'মোস্তাফিজুর রহমান', email: 'hosp.admin@carepoint.bd', phone: '+880 1711-100002', dept: 'Operations' },
    { id: 'USR-03', username: 'reception', role: 'receptionist', name: 'শারমিন সুলতানা', email: 'reception@carepoint.bd', phone: '+880 1711-100003', dept: 'Front Desk' },
    { id: 'USR-04', username: 'doctor', role: 'doctor', name: 'অধ্যাপক ডা. মিজানুর রহমান', email: 'dr.mizan@carepoint.bd', phone: '+880 1711-100004', dept: 'Cardiology', doctor_id: 'DOC-01' },
    { id: 'USR-05', username: 'nurse', role: 'nurse', name: 'মোছা. নাসরিন জাহান (সিনিয়র স্টাফ নার্স)', email: 'nurse.nasrin@carepoint.bd', phone: '+880 1711-100005', dept: 'ICU / Ward' },
    { id: 'USR-06', username: 'lab', role: 'lab_technician', name: 'কবির হোসেন (মেডিকেল টেকনোলজিস্ট)', email: 'lab.kabir@carepoint.bd', phone: '+880 1711-100006', dept: 'Pathology & LIS' },
    { id: 'USR-07', username: 'radiology', role: 'radiologist', name: 'ডা. ফারহানা চৌধুরী', email: 'dr.farhana@carepoint.bd', phone: '+880 1711-100007', dept: 'Radiology' },
    { id: 'USR-08', username: 'pharmacy', role: 'pharmacist', name: 'তানভীর আহমেদ', email: 'tanvir.pharma@carepoint.bd', phone: '+880 1711-100008', dept: 'Pharmacy' },
    { id: 'USR-09', username: 'accountant', role: 'accountant', name: 'মাহবুব আলম', email: 'accounts@carepoint.bd', phone: '+880 1711-100009', dept: 'Finance & Billing' },
    { id: 'USR-10', username: 'hr', role: 'hr_manager', name: 'ফারজানা ববি', email: 'hr@carepoint.bd', phone: '+880 1711-100010', dept: 'Human Resources' },
    { id: 'USR-11', username: 'store', role: 'store_manager', name: 'আনিসুর রহমান', email: 'store@carepoint.bd', phone: '+880 1711-100011', dept: 'Procurement' },
    { id: 'USR-12', username: 'it', role: 'it_officer', name: 'সাকিব আল হাসান (আইটি)', email: 'it.support@carepoint.bd', phone: '+880 1711-100012', dept: 'IT Infrastructure' },
    { id: 'USR-13', username: 'patient', role: 'patient', name: 'মো. রফিকুল ইসলাম', email: 'rafiqul@gmail.com', phone: '+880 1819-223344', patient_uhid: 'CPH-2026-0001' }
  ],

  // Departments
  departments: [
    { id: 'DEP-01', code: 'CARD', name_bn: 'কার্ডিওলজি (হৃদরোগ বিভাগ)', name_en: 'Cardiology', head: 'অধ্যাপক ডা. মিজানুর রহমান', floor: '৪র্থ তলা', icon: 'bi-heart-pulse', doctors_count: 5, status: 'Active' },
    { id: 'DEP-02', code: 'NEUR', name_bn: 'নিউরোমেডিসিন ও নিউরোসার্জারি', name_en: 'Neurology & Neurosurgery', head: 'অধ্যাপক ডা. ফাহমিদা খাতুন', floor: '৫ম তলা', icon: 'bi-diagram-3', doctors_count: 4, status: 'Active' },
    { id: 'DEP-03', code: 'ORTH', name_bn: 'অর্থোপেডিক ও ট্রমা সার্জারি', name_en: 'Orthopedics & Trauma', head: 'ডা. হাসান জামিল', floor: '৩য় তলা', icon: 'bi-bandaid', doctors_count: 4, status: 'Active' },
    { id: 'DEP-04', code: 'MED', name_bn: 'জেনারেল মেডিসিন', name_en: 'General Medicine', head: 'ডা. তাসলিমা আক্তার', floor: '২য় তলা (OPD)', icon: 'bi-capsule', doctors_count: 6, status: 'Active' },
    { id: 'DEP-05', code: 'SURG', name_bn: 'জেনারেল ও ল্যাপারোস্কোপিক সার্জারি', name_en: 'General Surgery', head: 'ডা. সাইফুল ইসলাম', floor: '৬ষ্ঠ তলা', icon: 'bi-scissors', doctors_count: 4, status: 'Active' },
    { id: 'DEP-06', code: 'GYN', name_bn: 'গাইনোকোলজি ও অবস্টেট্রিক্স', name_en: 'Gynecology & Obstetrics', head: 'অধ্যাপক ডা. নাজনীন সুলতানা', floor: '৩য় তলা', icon: 'bi-gender-female', doctors_count: 5, status: 'Active' },
    { id: 'DEP-07', code: 'PED', name_bn: 'শিশু ও কিশোর রোগ বিভাগ (Pediatrics)', name_en: 'Pediatrics & Neonatology', head: 'ডা. কামরুল হাসান', floor: '২য় তলা', icon: 'bi-person-heart', doctors_count: 4, status: 'Active' },
    { id: 'DEP-08', code: 'NEPH', name_bn: 'নেফ্রোলজি ও ডায়ালাইসিস ইউনিট', name_en: 'Nephrology & Dialysis', head: 'ডা. আশরাফুল আলম', floor: '৪র্থ তলা', icon: 'bi-droplet-half', doctors_count: 3, status: 'Active' },
    { id: 'DEP-09', code: 'GAST', name_bn: 'গ্যাস্ট্রোএন্টারোলজি ও হেপাটোলজি', name_en: 'Gastroenterology', head: 'ডা. রেদওয়ানুর রহমান', floor: '৫ম তলা', icon: 'bi-shield-plus', doctors_count: 3, status: 'Active' },
    { id: 'DEP-10', code: 'RAD', name_bn: 'রেডিওলজি ও ডিজিটাল ইমেজিং', name_en: 'Radiology & Imaging', head: 'ডা. ফারহানা চৌধুরী', floor: '১ম ভূগর্ভস্থ তলা (Basement-1)', icon: 'bi-camera', doctors_count: 3, status: 'Active' },
    { id: 'DEP-11', code: 'PATH', name_bn: 'প্যাথলজি ও ল্যাবরেটরি মেডিসিন', name_en: 'Pathology & LIS', head: 'ডা. আসিফ মাহমুদ', floor: '১ম ভূগর্ভস্থ তলা', icon: 'bi-eyedropper', doctors_count: 4, status: 'Active' },
    { id: 'DEP-12', code: 'EMERG', name_bn: 'জরুরি বিভাগ ও ট্রায়াজ ইউনিট', name_en: 'Emergency & Triage', head: 'ডা. সাজিদ আহমেদ', floor: 'নিচতলা (Ground Floor)', icon: 'bi-hospital', doctors_count: 8, status: 'Active' }
  ],

  // Doctors
  doctors: [
    {
      id: 'DOC-01',
      name_bn: 'অধ্যাপক ডা. মিজানুর রহমান',
      name_en: 'Prof. Dr. Mizanur Rahman',
      dept_id: 'DEP-01',
      dept_name: 'কার্ডিওলজি (হৃদরোগ বিভাগ)',
      degrees: 'MBBS, FCPS (Cardiology), FACC (USA), FRCP (Edin)',
      designation: 'অধ্যাপক ও বিভাগীয় প্রধান, কার্ডিওলজি',
      experience: '২২ বছর',
      fee: 1500,
      room: '৪০২ (৪র্থ তলা)',
      schedule: 'শনি - বুধ (বিকাল ৫:০০ - রাত ৯:০০)',
      rating: 4.9,
      phone: '+880 1711-200101',
      status: 'Available',
      bio: 'দেশের প্রখ্যাত হৃদরোগ বিশেষজ্ঞ ও ইন্টারভেনশনাল কার্ডিওলজিস্ট। এনজিওগ্রাম, এনজিওপ্লাস্টি ও পেসমেকার প্রতিস্থাপনে অভিজ্ঞ।'
    },
    {
      id: 'DOC-02',
      name_bn: 'অধ্যাপক ডা. ফাহমিদা খাতুন',
      name_en: 'Prof. Dr. Fahmida Khatun',
      dept_id: 'DEP-02',
      dept_name: 'নিউরোমেডিসিন ও নিউরোসার্জারি',
      degrees: 'MBBS, MD (Neurology), Fellow Interventional Neurology (Japan)',
      designation: 'অধ্যাপক, নিউরোমেডিসিন বিভাগ',
      experience: '১৮ বছর',
      fee: 1500,
      room: '৫০৪ (৫ম তলা)',
      schedule: 'রবি - বৃহস্পতি (বিকাল ৪:০০ - রাত ৮:০০)',
      rating: 4.8,
      phone: '+880 1711-200102',
      status: 'Available',
      bio: 'স্ট্রোক, এপিলেপ্সি, পারকিনসন্স ও জটিল স্নায়বিক রোগের আধুনিক চিকিৎসায় বিশেষ পারদর্শী।'
    },
    {
      id: 'DOC-03',
      name_bn: 'ডা. হাসান জামিল',
      name_en: 'Dr. Hasan Jamil',
      dept_id: 'DEP-03',
      dept_name: 'অর্থোপেডিক ও ট্রমা সার্জারি',
      degrees: 'MBBS, MS (Orthopedics), AO Trauma Fellow (Germany)',
      designation: 'চিফ কনসালট্যান্ট, অর্থোপেডিক সার্জারি',
      experience: '১৫ বছর',
      fee: 1200,
      room: '৩০২ (৩য় তলা)',
      schedule: 'শনি, সোম, বুধ (বিকাল ৫:৩০ - রাত ৯:০০)',
      rating: 4.8,
      phone: '+880 1711-200103',
      status: 'Available',
      bio: 'হাড়ভাঙা ট্রমা সার্জারি, হাঁটু ও নিতম্ব প্রতিস্থাপন (Joint Replacement) বিশেষজ্ঞ।'
    },
    {
      id: 'DOC-04',
      name_bn: 'ডা. তাসলিমা আক্তার',
      name_en: 'Dr. Taslima Akter',
      dept_id: 'DEP-04',
      dept_name: 'জেনারেল মেডিসিন',
      degrees: 'MBBS, FCPS (Medicine), MRCP (UK)',
      designation: 'সহযোগী অধ্যাপক, ইন্টারনাল মেডিসিন',
      experience: '১৪ বছর',
      fee: 1000,
      room: '২০৫ (২য় তলা)',
      schedule: 'প্রতিদিন (সকাল ১০:০০ - দুপুর ২:০০ ও বিকাল ৫:০০ - ৮:০০)',
      rating: 4.9,
      phone: '+880 1711-200104',
      status: 'Available',
      bio: 'ডায়াবেটিস, উচ্চ রক্তচাপ, থাইরয়েড ও সংক্রামক ব্যাধি ব্যবস্থাপনায় অভিজ্ঞ।'
    },
    {
      id: 'DOC-05',
      name_bn: 'অধ্যাপক ডা. নাজনীন সুলতানা',
      name_en: 'Prof. Dr. Nazneen Sultana',
      dept_id: 'DEP-06',
      dept_name: 'গাইনোকোলজি ও অবস্টেট্রিক্স',
      degrees: 'MBBS, FCPS (Gynae & Obs), MS, FICMCH',
      designation: 'অধ্যাপক ও সিনিয়র কনসালট্যান্ট',
      experience: '২০ বছর',
      fee: 1500,
      room: '৩০৮ (৩য় তলা)',
      schedule: 'শনি - বৃহস্পতি (বিকাল ৪:৩০ - রাত ৮:৩০)',
      rating: 4.9,
      phone: '+880 1711-200105',
      status: 'Available',
      bio: 'হাই-রিস্ক প্রেগন্যান্সি, ল্যাপারোস্কোপিক গাইনোকোলজিক্যাল সার্জারি ও ইনফার্টিলিটি কেয়ার।'
    },
    {
      id: 'DOC-06',
      name_bn: 'ডা. কামরুল হাসান',
      name_en: 'Dr. Kamrul Hasan',
      dept_id: 'DEP-07',
      dept_name: 'শিশু ও কিশোর রোগ বিভাগ (Pediatrics)',
      degrees: 'MBBS, DCH, MD (Pediatrics)',
      designation: 'সহকারী অধ্যাপক ও শিশু বিশেষজ্ঞ',
      experience: '১২ বছর',
      fee: 1000,
      room: '২০৩ (২য় তলা)',
      schedule: 'শনি - বুধ (সকাল ১০:০০ - দুপুর ১:০০ ও বিকাল ৫:০০ - ৮:০০)',
      rating: 4.7,
      phone: '+880 1711-200106',
      status: 'Available',
      bio: 'নবজাতক পরিচর্যা, শিশু পুষ্টি, টিকাদান ও শিশুদের জটিল রোগের সার্বক্ষণিক চিকিৎসা।'
    },
    {
      id: 'DOC-07',
      name_bn: 'ডা. সাইফুল ইসলাম',
      name_en: 'Dr. Saiful Islam',
      dept_id: 'DEP-05',
      dept_name: 'জেনারেল ও ল্যাপারোস্কোপিক সার্জারি',
      degrees: 'MBBS, FCPS (Surgery), FMAS (Minimal Access Surgery)',
      designation: 'সিনিয়র কনসালট্যান্ট, জেনারেল ও ল্যাপ সার্জারি',
      experience: '১৬ বছর',
      fee: 1200,
      room: '৬০৩ (৬ষ্ঠ তলা)',
      schedule: 'রবি, মঙ্গল, বৃহস্পতি (বিকাল ৬:০০ - রাত ৯:০০)',
      rating: 4.8,
      phone: '+880 1711-200107',
      status: 'Available',
      bio: 'ল্যাপারোস্কোপিক পিত্তথলির পাথর, হার্নিয়া ও এপেন্ডিক্স অপারেশনে অভিজ্ঞ।'
    },
    {
      id: 'DOC-08',
      name_bn: 'ডা. ফারহানা চৌধুরী',
      name_en: 'Dr. Farhana Chowdhury',
      dept_id: 'DEP-10',
      dept_name: 'রেডিওলজি ও ডিজিটাল ইমেজিং',
      degrees: 'MBBS, M.Phil (Radiology & Imaging)',
      designation: 'চিফ রেডিওলজিস্ট',
      experience: '১৩ বছর',
      fee: 1000,
      room: 'B1-04 (Basement-1)',
      schedule: 'শনি - বৃহস্পতি (সকাল ৯:০০ - বিকাল ৫:০০)',
      rating: 4.8,
      phone: '+880 1711-200108',
      status: 'Available',
      bio: 'এমআরআই, সিটি স্ক্যান, কালার ডপলার ও আল্ট্রাসনোগ্রাম রিপোর্ট বিশ্লেষণে পারদর্শী।'
    }
  ],

  // Registered Patients
  patients: [
    {
      id: 'P-01',
      uhid: 'CPH-2026-0001',
      name_bn: 'মো. রফিকুল ইসলাম',
      name_en: 'Md. Rafiqul Islam',
      age: 52,
      gender: 'Male',
      blood_group: 'B+',
      phone: '+880 1819-223344',
      email: 'rafiqul@gmail.com',
      nid: '19742691234567890',
      dob: '1974-05-12',
      address: 'বাড়ি ১২, রোড ৫, ধানমন্ডি, ঢাকা',
      emergency_contact_name: 'সুলতানা ইসলাম (স্ত্রী)',
      emergency_contact_phone: '+880 1819-223345',
      allergies: 'Penicillin, Dust',
      chronic_conditions: 'Hypertension, Type-2 Diabetes',
      registered_date: '2026-01-10',
      status: 'Active'
    },
    {
      id: 'P-02',
      uhid: 'CPH-2026-0002',
      name_bn: 'সাবরিনা আক্তার',
      name_en: 'Sabrina Akter',
      age: 34,
      gender: 'Female',
      blood_group: 'O+',
      phone: '+880 1712-334455',
      email: 'sabrina.akter@yahoo.com',
      nid: '19922692233445566',
      dob: '1992-08-22',
      address: 'ফ্ল্যাট ৪বি, বাড়ি ৯, মিরপুর ২, ঢাকা',
      emergency_contact_name: 'আহমেদ জুবায়ের (স্বামী)',
      emergency_contact_phone: '+880 1712-334456',
      allergies: 'None known',
      chronic_conditions: 'Hypothyroidism',
      registered_date: '2026-01-15',
      status: 'Active'
    },
    {
      id: 'P-03',
      uhid: 'CPH-2026-0003',
      name_bn: 'কাজী আনোয়ার হোসেন',
      name_en: 'Kazi Anwar Hossain',
      age: 64,
      gender: 'Male',
      blood_group: 'A+',
      phone: '+880 1911-556677',
      email: 'anwar.kazi@outlook.com',
      nid: '19622693344556677',
      dob: '1962-11-04',
      address: 'হাউস ২২, সেক্টর ৭, উত্তরা, ঢাকা',
      emergency_contact_name: 'কাজী ফয়সাল (পুত্র)',
      emergency_contact_phone: '+880 1911-556678',
      allergies: 'Sulfa drugs',
      chronic_conditions: 'IHD (Ischemic Heart Disease), Chronic Kidney Disease (Stage 3)',
      registered_date: '2026-01-22',
      status: 'Admitted'
    },
    {
      id: 'P-04',
      uhid: 'CPH-2026-0004',
      name_bn: 'মোছা. রোকেয়া বেগম',
      name_en: 'Mst. Rokeya Begum',
      age: 48,
      gender: 'Female',
      blood_group: 'AB+',
      phone: '+880 1612-778899',
      email: 'rokeya.begum@gmail.com',
      nid: '19782694455667788',
      dob: '1978-03-18',
      address: 'রোড ৩, বনশ্রী, ঢাকা',
      emergency_contact_name: 'মো. মকবুল হোসেন (স্বামী)',
      emergency_contact_phone: '+880 1612-778800',
      allergies: 'Ciprofloxacin',
      chronic_conditions: 'Osteoarthritis, Hyperlipidemia',
      registered_date: '2026-02-01',
      status: 'Active'
    },
    {
      id: 'P-05',
      uhid: 'CPH-2026-0005',
      name_bn: 'আরিফ আহমেদ (শিশু)',
      name_en: 'Arif Ahmed (Child)',
      age: 7,
      gender: 'Male',
      blood_group: 'O-',
      phone: '+880 1733-889900',
      email: 'father.tariq@gmail.com',
      nid: 'Birth Reg: 20192695566778899',
      dob: '2019-09-14',
      address: 'বাড়ি ৭/এ, লালমাটিয়া, ঢাকা',
      emergency_contact_name: 'মো. তারিক আহমেদ (পিতা)',
      emergency_contact_phone: '+880 1733-889900',
      allergies: 'Egg, Peanut',
      chronic_conditions: 'Asthma (Mild persistent)',
      registered_date: '2026-02-10',
      status: 'Active'
    }
  ],

  // Appointments
  appointments: [
    {
      id: 'APT-2026-001',
      appointment_no: 'CPH-APT-1001',
      token_no: 1,
      patient_uhid: 'CPH-2026-0001',
      patient_name: 'মো. রফিকুল ইসলাম',
      patient_phone: '+880 1819-223344',
      doctor_id: 'DOC-01',
      doctor_name: 'অধ্যাপক ডা. মিজানুর রহমান',
      dept_name: 'কার্ডিওলজি',
      date: '2026-11-06',
      time_slot: '05:30 PM',
      fee: 1500,
      type: 'Online Booking',
      status: 'Confirmed',
      payment_status: 'Paid',
      symptoms: 'বুকে মৃদু চাপ ও সিঁড়ি বেয়ে ওঠার সময় শ্বাসকষ্ট',
      created_at: '2026-11-05 10:20'
    },
    {
      id: 'APT-2026-002',
      appointment_no: 'CPH-APT-1002',
      token_no: 2,
      patient_uhid: 'CPH-2026-0002',
      patient_name: 'সাবরিনা আক্তার',
      patient_phone: '+880 1712-334455',
      doctor_id: 'DOC-05',
      doctor_name: 'অধ্যাপক ডা. নাজনীন সুলতানা',
      dept_name: 'গাইনোকোলজি',
      date: '2026-11-06',
      time_slot: '06:00 PM',
      fee: 1500,
      type: 'Walk-in',
      status: 'Checked In',
      payment_status: 'Paid',
      symptoms: 'নিয়মিত রুটিন চেকআপ ও আল্ট্রাসাউন্ড রিপোর্ট পর্যালোচনা',
      created_at: '2026-11-05 11:45'
    },
    {
      id: 'APT-2026-003',
      appointment_no: 'CPH-APT-1003',
      token_no: 3,
      patient_uhid: 'CPH-2026-0004',
      patient_name: 'মোছা. রোকেয়া বেগম',
      patient_phone: '+880 1612-778899',
      doctor_id: 'DOC-03',
      doctor_name: 'ডা. হাসান জামিল',
      dept_name: 'অর্থোপেডিক',
      date: '2026-11-06',
      time_slot: '06:30 PM',
      fee: 1200,
      type: 'Phone Booking',
      status: 'Waiting',
      payment_status: 'Paid',
      symptoms: 'ডান হাঁটুতে তীব্র ব্যথা ও চলাফেরায় অসুবিধা',
      created_at: '2026-11-05 14:10'
    },
    {
      id: 'APT-2026-004',
      appointment_no: 'CPH-APT-1004',
      token_no: 4,
      patient_uhid: 'CPH-2026-0005',
      patient_name: 'আরিফ আহমেদ (শিশু)',
      patient_phone: '+880 1733-889900',
      doctor_id: 'DOC-06',
      doctor_name: 'ডা. কামরুল হাসান',
      dept_name: 'শিশু বিভাগ',
      date: '2026-11-06',
      time_slot: '11:00 AM',
      fee: 1000,
      type: 'Online Booking',
      status: 'Completed',
      payment_status: 'Paid',
      symptoms: 'মৌসুমি সর্দি, কাশি ও জ্বর',
      created_at: '2026-11-04 09:15'
    }
  ],

  // OPD Visits & Prescriptions
  opd_visits: [
    {
      id: 'OPD-2026-001',
      uhid: 'CPH-2026-0001',
      patient_name: 'মো. রফিকুল ইসলাম',
      doctor_id: 'DOC-01',
      doctor_name: 'অধ্যাপক ডা. মিজানুর রহমান',
      date: '2026-11-05',
      vitals: { bp: '135/85 mmHg', pulse: '76 bpm', temp: '98.4°F', weight: '74 kg', spo2: '98%' },
      chief_complaints: 'Exertional chest tightness for 2 weeks, dyspnea on brisk walking.',
      diagnosis: 'Stable Angina Pectoris, Essential Hypertension, Uncontrolled T2DM',
      medicines: [
        { name: 'Tab. Osartil 50 mg (Losartan)', dosage: '১+০+০ (সকালে খাবার পর)', duration: '১ মাস' },
        { name: 'Tab. Rovista 10 mg (Rosuvastatin)', dosage: '০+০+১ (রাতে খাবার পর)', duration: '১ মাস' },
        { name: 'Tab. Monocard 20 mg (ISMN)', dosage: '১+০+১ (খাবার পর)', duration: '১৫ দিন' },
        { name: 'Tab. Comet 500 mg (Metformin)', dosage: '১+০+১ (খাবার মাঝে)', duration: '১ মাস' }
      ],
      investigations_recommended: ['ECG (12 Lead)', 'Echocardiogram', 'Lipid Profile', 'HbA1c', 'Serum Creatinine'],
      advice: 'তৈলাক্ত ও অতিরিক্ত লবণযুক্ত খাবার বর্জন করুন। প্রতিদিন ৩০ মিনিট হালকা হাঁটুন। জরুরি অবস্থায় নাইট্রোগ্লিসারিন স্প্রে ব্যবহার করুন।',
      follow_up: '২১ দিন পর ইকোকার্ডিওগ্রাম রিপোর্টসহ'
    }
  ],

  // IPD Admissions & Bed Allocations
  admissions: [
    {
      id: 'ADM-2026-001',
      admission_no: 'CPH-IPD-5001',
      uhid: 'CPH-2026-0003',
      patient_name: 'কাজী আনোয়ার হোসেন',
      age: 64,
      gender: 'Male',
      bed_id: 'BED-CCU-02',
      bed_number: 'CCU-02',
      ward_name: 'করোনারি কেয়ার ইউনিট (CCU)',
      admission_date: '2026-11-04 18:30',
      attending_doctor: 'অধ্যাপক ডা. মিজানুর রহমান',
      admission_diagnosis: 'Acute Coronary Syndrome (NSTEMI), AKI on CKD',
      advance_paid: 30000,
      current_charges: 45600,
      vitals: { bp: '145/90 mmHg', pulse: '84 bpm', spo2: '97%', temp: '98.8°F', urine_output: '1200 ml/24h' },
      nursing_notes: 'রোগী স্থিতিশীল। ২৪ ঘণ্টা কার্ডিয়াক মনিটরিং ও অক্সিজেন সাপোর্ট চলমান। আইভি ফ্লুইড ও অ্যান্টিপ্লেটলেট থেরাপি চালু রয়েছে।',
      status: 'Admitted'
    }
  ],

  // Beds & Wards Matrix
  wards: [
    { id: 'WRD-01', name: 'পুরুষ সাধারণ ওয়ার্ড (Male General)', code: 'MGW-1', floor: '২য় তলা', total_beds: 10, charge_per_day: 1200 },
    { id: 'WRD-02', name: 'মহিলা সাধারণ ওয়ার্ড (Female General)', code: 'FGW-1', floor: '২য় তলা', total_beds: 10, charge_per_day: 1200 },
    { id: 'WRD-03', name: 'করোনারি কেয়ার ইউনিট (CCU)', code: 'CCU', floor: '৪র্থ তলা', total_beds: 8, charge_per_day: 6000 },
    { id: 'WRD-04', name: 'ইনটেনসিভ কেয়ার ইউনিট (ICU)', code: 'ICU', floor: '৪র্থ তলা', total_beds: 12, charge_per_day: 8000 },
    { id: 'WRD-05', name: 'ভিআইপি ও ডিলাক্স কেবিন', code: 'CABIN', floor: '৫ম তলা', total_beds: 8, charge_per_day: 4500 }
  ],

  beds: [
    { id: 'BED-MGW-01', number: '101', ward_id: 'WRD-01', ward_name: 'পুরুষ সাধারণ ওয়ার্ড', type: 'General', charge: 1200, status: 'Available', patient_name: '', patient_uhid: '' },
    { id: 'BED-MGW-02', number: '102', ward_id: 'WRD-01', ward_name: 'পুরুষ সাধারণ ওয়ার্ড', type: 'General', charge: 1200, status: 'Occupied', patient_name: 'মো. রফিক উল্লাহ', patient_uhid: 'CPH-2026-0008' },
    { id: 'BED-MGW-03', number: '103', ward_id: 'WRD-01', ward_name: 'পুরুষ সাধারণ ওয়ার্ড', type: 'General', charge: 1200, status: 'Available', patient_name: '', patient_uhid: '' },
    { id: 'BED-MGW-04', number: '104', ward_id: 'WRD-01', ward_name: 'পুরুষ সাধারণ ওয়ার্ড', type: 'General', charge: 1200, status: 'Maintenance', patient_name: '', patient_uhid: '' },

    { id: 'BED-FGW-01', number: '201', ward_id: 'WRD-02', ward_name: 'মহিলা সাধারণ ওয়ার্ড', type: 'General', charge: 1200, status: 'Occupied', patient_name: 'সুলতানা বেগম', patient_uhid: 'CPH-2026-0012' },
    { id: 'BED-FGW-02', number: '202', ward_id: 'WRD-02', ward_name: 'মহিলা সাধারণ ওয়ার্ড', type: 'General', charge: 1200, status: 'Available', patient_name: '', patient_uhid: '' },
    { id: 'BED-FGW-03', number: '203', ward_id: 'WRD-02', ward_name: 'মহিলা সাধারণ ওয়ার্ড', type: 'General', charge: 1200, status: 'Available', patient_name: '', patient_uhid: '' },

    { id: 'BED-CCU-01', number: 'CCU-01', ward_id: 'WRD-03', ward_name: 'CCU', type: 'Cardiac Monitor', charge: 6000, status: 'Available', patient_name: '', patient_uhid: '' },
    { id: 'BED-CCU-02', number: 'CCU-02', ward_id: 'WRD-03', ward_name: 'CCU', type: 'Cardiac Monitor', charge: 6000, status: 'Occupied', patient_name: 'কাজী আনোয়ার হোসেন', patient_uhid: 'CPH-2026-0003' },
    { id: 'BED-CCU-03', number: 'CCU-03', ward_id: 'WRD-03', ward_name: 'CCU', type: 'Cardiac Monitor', charge: 6000, status: 'Available', patient_name: '', patient_uhid: '' },

    { id: 'BED-ICU-01', number: 'ICU-01', ward_id: 'WRD-04', ward_name: 'ICU', type: 'Ventilator Ready', charge: 8000, status: 'Occupied', patient_name: 'আব্দুল কাদের', patient_uhid: 'CPH-2026-0015' },
    { id: 'BED-ICU-02', number: 'ICU-02', ward_id: 'WRD-04', ward_name: 'ICU', type: 'Ventilator Ready', charge: 8000, status: 'Available', patient_name: '', patient_uhid: '' },
    { id: 'BED-ICU-03', number: 'ICU-03', ward_id: 'WRD-04', ward_name: 'ICU', type: 'Ventilator Ready', charge: 8000, status: 'Available', patient_name: '', patient_uhid: '' },

    { id: 'BED-CAB-01', number: 'Cabin 501', ward_id: 'WRD-05', ward_name: 'কেবিন ব্লক', type: 'Deluxe AC', charge: 4500, status: 'Occupied', patient_name: 'মাহমুদুল হাসান', patient_uhid: 'CPH-2026-0020' },
    { id: 'BED-CAB-02', number: 'Cabin 502', ward_id: 'WRD-05', ward_name: 'কেবিন ব্লক', type: 'Deluxe AC', charge: 4500, status: 'Available', patient_name: '', patient_uhid: '' },
    { id: 'BED-CAB-03', number: 'Cabin 503', ward_id: 'WRD-05', ward_name: 'কেবিন ব্লক', type: 'VIP Suite', charge: 7500, status: 'Available', patient_name: '', patient_uhid: '' }
  ],

  // Laboratory Tests & Orders
  lab_catalog: [
    { id: 'LAB-T-01', code: 'CBC', name: 'Complete Blood Count (CBC) with ESR', category: 'Hematology', price: 600, turnaround_hours: 4, normal_range: 'Hb: 12-16 g/dL, WBC: 4,000-11,000/cumm, Platelets: 150k-450k' },
    { id: 'LAB-T-02', code: 'LIPID', name: 'Lipid Profile (Fasting)', category: 'Biochemistry', price: 1200, turnaround_hours: 6, normal_range: 'Total Cholesterol < 200, HDL > 40, LDL < 100, Triglycerides < 150 mg/dL' },
    { id: 'LAB-T-03', code: 'HBA1C', name: 'Glycated Hemoglobin (HbA1c)', category: 'Biochemistry', price: 1000, turnaround_hours: 4, normal_range: '< 5.7% Normal, 5.7-6.4% Prediabetes, ≥ 6.5% Diabetes' },
    { id: 'LAB-T-04', code: 'S_CREAT', name: 'Serum Creatinine', category: 'Biochemistry', price: 400, turnaround_hours: 3, normal_range: '0.6 - 1.2 mg/dL' },
    { id: 'LAB-T-05', code: 'DENGUE', name: 'Dengue NS1 Antigen & IgG/IgM', category: 'Serology', price: 1200, turnaround_hours: 2, normal_range: 'Negative' },
    { id: 'LAB-T-06', code: 'LFT', name: 'Liver Function Test (Bilirubin, SGPT, SGOT, Alk Phos)', category: 'Biochemistry', price: 1400, turnaround_hours: 6, normal_range: 'SGPT: < 45 U/L, Bilirubin: 0.2-1.0 mg/dL' },
    { id: 'LAB-T-07', code: 'TSH', name: 'Thyroid Stimulating Hormone (TSH, Ultrasensitive)', category: 'Immunology', price: 800, turnaround_hours: 6, normal_range: '0.4 - 4.2 µIU/mL' },
    { id: 'LAB-T-08', code: 'URINE', name: 'Urine Routine & Microscopic Examination (R/M/E)', category: 'Clinical Pathology', price: 300, turnaround_hours: 2, normal_range: 'Pus cells: 0-3 /HPF, Sugar: Nil, Albumin: Nil' }
  ],

  lab_orders: [
    {
      id: 'LBO-2026-001',
      order_no: 'CPH-LAB-8001',
      uhid: 'CPH-2026-0001',
      patient_name: 'মো. রফিকুল ইসলাম',
      tests: ['Complete Blood Count (CBC) with ESR', 'Lipid Profile (Fasting)', 'Glycated Hemoglobin (HbA1c)'],
      sample_id: 'SMP-2026-901',
      sample_type: 'Whole Blood (EDTA & Plain)',
      ordered_by: 'অধ্যাপক ডা. মিজানুর রহমান',
      order_date: '2026-11-05 11:30',
      status: 'Approved', // Ordered -> Sample Collected -> Processing -> Verified -> Approved
      results: [
        { test: 'Hemoglobin (Hb)', value: '13.8', unit: 'g/dL', normal: '13.0 - 17.0', flag: 'Normal' },
        { test: 'Total WBC Count', value: '7,400', unit: '/cumm', normal: '4,000 - 11,000', flag: 'Normal' },
        { test: 'Platelet Count', value: '260,000', unit: '/cumm', normal: '150,000 - 450,000', flag: 'Normal' },
        { test: 'Total Cholesterol', value: '235', unit: 'mg/dL', normal: '< 200', flag: 'High' },
        { test: 'LDL Cholesterol', value: '148', unit: 'mg/dL', normal: '< 100', flag: 'High' },
        { test: 'HDL Cholesterol', value: '38', unit: 'mg/dL', normal: '> 40', flag: 'Low' },
        { test: 'Triglycerides', value: '220', unit: 'mg/dL', normal: '< 150', flag: 'High' },
        { test: 'HbA1c', value: '8.2', unit: '%', normal: '< 6.5%', flag: 'High' }
      ],
      verified_by: 'কবির হোসেন (মেডিকেল টেকনোলজিস্ট)',
      approved_by: 'ডা. আসিফ মাহমুদ (হেড অব প্যাথলজি)',
      total_bill: 2800,
      payment_status: 'Paid'
    },
    {
      id: 'LBO-2026-002',
      order_no: 'CPH-LAB-8002',
      uhid: 'CPH-2026-0003',
      patient_name: 'কাজী আনোয়ার হোসেন',
      tests: ['Serum Creatinine', 'Complete Blood Count (CBC) with ESR'],
      sample_id: 'SMP-2026-902',
      sample_type: 'Blood (Serum)',
      ordered_by: 'অধ্যাপক ডা. মিজানুর রহমান',
      order_date: '2026-11-05 14:15',
      status: 'Processing',
      results: [],
      verified_by: '',
      approved_by: '',
      total_bill: 1000,
      payment_status: 'Paid'
    }
  ],

  // Radiology & Imaging Services
  radiology_orders: [
    {
      id: 'RAD-2026-001',
      order_no: 'CPH-RAD-3001',
      uhid: 'CPH-2026-0001',
      patient_name: 'মো. রফিকুল ইসলাম',
      service_name: 'Chest X-Ray Digital (P/A View)',
      category: 'X-Ray',
      date: '2026-11-05 12:00',
      price: 800,
      status: 'Approved',
      findings: 'Cardiac silhouette shows mild left ventricular prominence (cardiomegaly). Lung fields are clear. Costophrenic angles are sharp. Both hemidiaphragms are normal in contour.',
      impression: 'Mild Cardiomegaly. No active pulmonary infiltration or consolidation.',
      radiologist: 'ডা. ফারহানা চৌধুরী, MBBS, M.Phil',
      pacs_demo_status: 'Integrated PACS Demo Mode (Simulated Image Available)'
    },
    {
      id: 'RAD-2026-002',
      order_no: 'CPH-RAD-3002',
      uhid: 'CPH-2026-0004',
      patient_name: 'মোছা. রোকেয়া বেগম',
      service_name: 'X-Ray Both Knee Joints (A/P & Lateral View)',
      category: 'X-Ray',
      date: '2026-11-05 15:30',
      price: 1400,
      status: 'Pending',
      findings: 'Pending technician acquisition and radiologist verification.',
      impression: 'Scheduled for acquisition',
      radiologist: 'ডা. ফারহানা চৌধুরী',
      pacs_demo_status: 'Scheduled'
    }
  ],

  // Pharmacy Inventory & Catalog
  medicines: [
    { id: 'MED-01', brand: 'Napa Extra', generic: 'Paracetamol + Caffeine (500mg+65mg)', company: 'Beximco Pharmaceuticals', form: 'Tablet', category: 'Analgesic', batch: 'NX-2601', stock: 1200, unit_price: 3.5, buy_price: 2.8, expiry: '2027-10-31', reorder_level: 200 },
    { id: 'MED-02', brand: 'Maxpro 20', generic: 'Esomeprazole Magnesium (20mg)', company: 'Renata Limited', form: 'Capsule', category: 'Anti-ulcerant', batch: 'MP-8902', stock: 850, unit_price: 8.0, buy_price: 6.5, expiry: '2027-08-31', reorder_level: 150 },
    { id: 'MED-03', brand: 'Osartil 50', generic: 'Losartan Potassium (50mg)', company: 'Incepta Pharmaceuticals', form: 'Tablet', category: 'Antihypertensive', batch: 'OS-4401', stock: 450, unit_price: 10.0, buy_price: 8.0, expiry: '2027-12-31', reorder_level: 100 },
    { id: 'MED-04', brand: 'Rovista 10', generic: 'Rosuvastatin (10mg)', company: 'Square Pharmaceuticals', form: 'Tablet', category: 'Lipid Lowering', batch: 'RV-1205', stock: 380, unit_price: 22.0, buy_price: 17.5, expiry: '2027-06-30', reorder_level: 80 },
    { id: 'MED-05', brand: 'Moxaclav 625', generic: 'Amoxicillin + Clavulanic Acid', company: 'Square Pharmaceuticals', form: 'Tablet', category: 'Antibiotic', batch: 'MX-7803', stock: 260, unit_price: 38.0, buy_price: 30.0, expiry: '2026-12-31', reorder_level: 60 },
    { id: 'MED-06', brand: 'Comet 500', generic: 'Metformin Hydrochloride (500mg)', company: 'Square Pharmaceuticals', form: 'Tablet', category: 'Antidiabetic', batch: 'CM-3302', stock: 540, unit_price: 5.0, buy_price: 4.0, expiry: '2027-09-30', reorder_level: 100 },
    { id: 'MED-07', brand: 'Monocard 20', generic: 'Isosorbide Mononitrate (20mg)', company: 'Sanofi Bangladesh', form: 'Tablet', category: 'Cardiovascular', batch: 'MC-1102', stock: 320, unit_price: 7.5, buy_price: 6.0, expiry: '2027-05-31', reorder_level: 50 },
    { id: 'MED-08', brand: 'Ceclor 250 (Suspension)', generic: 'Cefaclor (125mg/5ml)', company: 'Beximco Pharmaceuticals', form: 'Syrup', category: 'Pediatric Antibiotic', batch: 'CC-0901', stock: 75, unit_price: 180.0, buy_price: 145.0, expiry: '2026-11-30', reorder_level: 30 }
  ],

  // Invoices & Financial Transactions
  invoices: [
    {
      id: 'INV-2026-001',
      invoice_no: 'CPH-INV-9001',
      date: '2026-11-05 11:45',
      uhid: 'CPH-2026-0001',
      patient_name: 'মো. রফিকুল ইসলাম',
      patient_phone: '+880 1819-223344',
      items: [
        { desc: 'OPD Doctor Consultation Fee (অধ্যাপক ডা. মিজানুর রহমান)', qty: 1, rate: 1500, amount: 1500 },
        { desc: 'Complete Blood Count (CBC) with ESR', qty: 1, rate: 600, amount: 600 },
        { desc: 'Lipid Profile (Fasting)', qty: 1, rate: 1200, amount: 1200 },
        { desc: 'Glycated Hemoglobin (HbA1c)', qty: 1, rate: 1000, amount: 1000 },
        { desc: 'Chest X-Ray Digital (P/A View)', qty: 1, rate: 800, amount: 800 }
      ],
      subtotal: 5100,
      discount: 300,
      vat: 240, // 5% VAT demo
      total: 5040,
      paid_amount: 5040,
      due_amount: 0,
      payment_method: 'bKash (TrxID: 9X87K2L1P)',
      status: 'Paid',
      cashier: 'মাহবুব আলম'
    },
    {
      id: 'INV-2026-002',
      invoice_no: 'CPH-INV-9002',
      date: '2026-11-05 16:00',
      uhid: 'CPH-2026-0003',
      patient_name: 'কাজী আনোয়ার হোসেন',
      patient_phone: '+880 1911-556677',
      items: [
        { desc: 'IPD Admission Advance & CCU Bed Allocation (CCU-02)', qty: 1, rate: 30000, amount: 30000 },
        { desc: 'Emergency Resuscitation & Emergency Medicine Kit', qty: 1, rate: 8500, amount: 8500 }
      ],
      subtotal: 38500,
      discount: 0,
      vat: 1925,
      total: 40425,
      paid_amount: 30000,
      due_amount: 10425,
      payment_method: 'Bank Card (Visa Ending 4821)',
      status: 'Partial',
      cashier: 'মাহবুব আলম'
    }
  ],

  // Operation Theatre (OT)
  ot_schedules: [
    {
      id: 'OT-01',
      ot_room: 'OT-1 (Super Specialty Surgical Suite)',
      surgery_name: 'Laparoscopic Cholecystectomy (পিত্তথলি অপারেশন)',
      patient_uhid: 'CPH-2026-0002',
      patient_name: 'সাবরিনা আক্তার',
      lead_surgeon: 'ডা. সাইফুল ইসলাম (FCPS)',
      anesthesiologist: 'ডা. জিয়াউদ্দিন আহমেদ',
      date: '2026-11-08',
      time: '10:00 AM - 12:00 PM',
      status: 'Scheduled',
      pre_op_clearance: 'Completed (Blood Group O+ verified, anesthesia fit)'
    },
    {
      id: 'OT-02',
      ot_room: 'OT-2 (Cardiac / Cath Lab Suite)',
      surgery_name: 'Coronary Angiogram & Possible PCI',
      patient_uhid: 'CPH-2026-0003',
      patient_name: 'কাজী আনোয়ার হোসেন',
      lead_surgeon: 'অধ্যাপক ডা. মিজানুর রহমান',
      anesthesiologist: 'ডা. সানজিদা পারভীন',
      date: '2026-11-07',
      time: '02:30 PM - 04:30 PM',
      status: 'Ready',
      pre_op_clearance: 'Pending S. Creatinine optimization'
    }
  ],

  // Emergency & Triage Cases
  emergency_cases: [
    {
      id: 'EMG-2026-01',
      uhid: 'CPH-2026-0003',
      patient_name: 'কাজী আনোয়ার হোসেন',
      arrival_time: '2026-11-04 17:45',
      triage_level: 'Red (Resuscitation)',
      chief_complaint: 'Severe retrosternal crushing chest pain radiating to left jaw, diaphoresis.',
      vitals_on_arrival: 'BP 85/55, Pulse 110, SpO2 91% on room air',
      doctor_assigned: 'ডা. সাজিদ আহমেদ (Emergency Specialist)',
      action_taken: 'Immediate High flow O2, Aspirin 300mg + Clopidogrel 300mg stat, Sublingual NTG held due to hypotension, urgent ECG confirmed NSTEMI, immediate transfer to CCU.',
      status: 'Transferred to CCU'
    },
    {
      id: 'EMG-2026-02',
      uhid: 'CPH-2026-0007',
      patient_name: 'তানভীর হাসান',
      arrival_time: '2026-11-05 19:20',
      triage_level: 'Yellow (Urgent)',
      chief_complaint: 'Road Traffic Accident (RTA), laceration over right forearm with active bleeding.',
      vitals_on_arrival: 'BP 125/80, Pulse 88, SpO2 99%',
      doctor_assigned: 'ডা. রাজিবুল করিম',
      action_taken: 'Pressure bandage, wound debridement & suturing under local anesthesia, Tetanus Toxoid 0.5ml IM given.',
      status: 'Observation'
    }
  ],

  // Blood Bank Stock
  blood_bank: [
    { group: 'A+', units_available: 18, component: 'Whole Blood / PRBC', last_updated: '2026-11-05' },
    { group: 'A-', units_available: 5, component: 'Whole Blood / PRBC', last_updated: '2026-11-05' },
    { group: 'B+', units_available: 24, component: 'Whole Blood / PRBC', last_updated: '2026-11-05' },
    { group: 'B-', units_available: 4, component: 'Whole Blood / PRBC', last_updated: '2026-11-05' },
    { group: 'O+', units_available: 28, component: 'Whole Blood / PRBC', last_updated: '2026-11-05' },
    { group: 'O-', units_available: 6, component: 'Whole Blood / PRBC', last_updated: '2026-11-05' },
    { group: 'AB+', units_available: 12, component: 'Whole Blood / PRBC', last_updated: '2026-11-05' },
    { group: 'AB-', units_available: 3, component: 'Whole Blood / PRBC', last_updated: '2026-11-05' }
  ],

  // Ambulance Fleet
  ambulances: [
    { id: 'AMB-01', reg_no: 'ঢাকা মেট্রো-ছ ৭১-৮৯৪৫', type: 'ICU / Cardiac Ambulance', driver: 'মো. সুজন মিয়া', phone: '+880 1711-000881', equipment: 'Ventilator, Defibrillator, Syringe Pump, O2', status: 'Available' },
    { id: 'AMB-02', reg_no: 'ঢাকা মেট্রো-ছ ৭১-৮৯৪৬', type: 'Advanced Life Support (ALS)', driver: 'মো. রফিক উদ্দিন', phone: '+880 1711-000882', equipment: 'Cardiac Monitor, O2 Cylinder, Suction', status: 'On Trip', destination: 'উত্তরা সেক্টর ৭' },
    { id: 'AMB-03', reg_no: 'ঢাকা মেট্রো-ছ ৭১-৮৯৪৭', type: 'Basic Patient Transport', driver: 'মো. জসিম খন্দকার', phone: '+880 1711-000883', equipment: 'Stretcher, Basic O2 Kit', status: 'Available' }
  ],

  // HR & Employees
  employees: [
    { id: 'EMP-01', name: 'অধ্যাপক ডা. মিজানুর রহমান', designation: 'অধ্যাপক ও চিফ কার্ডিওলজিস্ট', dept: 'Cardiology', salary: 250000, join_date: '2019-03-01', phone: '+880 1711-200101', attendance: 'Present' },
    { id: 'EMP-02', name: 'মোছা. নাসরিন জাহান', designation: 'সিনিয়র স্টাফ নার্স (ইনচার্জ)', dept: 'ICU', salary: 45000, join_date: '2020-07-15', phone: '+880 1711-100005', attendance: 'Present' },
    { id: 'EMP-03', name: 'কবির হোসেন', designation: 'সিনিয়র মেডিকেল টেকনোলজিস্ট', dept: 'Pathology', salary: 38000, join_date: '2021-01-10', phone: '+880 1711-100006', attendance: 'Present' },
    { id: 'EMP-04', name: 'তানভীর আহমেদ', designation: 'রেজিস্টার্ড ফার্মাসিস্ট', dept: 'Pharmacy', salary: 42000, join_date: '2021-05-01', phone: '+880 1711-100008', attendance: 'Present' },
    { id: 'EMP-05', name: 'মাহবুব আলম', designation: 'সিনিয়র অ্যাকাউন্টস অফিসার', dept: 'Accounts', salary: 48000, join_date: '2019-11-20', phone: '+880 1711-100009', attendance: 'Present' },
    { id: 'EMP-06', name: 'শারমিন সুলতানা', designation: 'ফ্রন্ট ডেস্ক এক্সিকিউটিভ', dept: 'Reception', salary: 30000, join_date: '2022-04-01', phone: '+880 1711-100003', attendance: 'Present' }
  ],

  // Inventory Items & Procurement
  inventory: [
    { id: 'INV-ITM-01', name: 'Surgical Examination Gloves (Latex, Size M)', category: 'Disposable Consumables', current_stock: 4500, unit: 'Pairs', min_stock: 1000, supplier: 'MediSupply Bangladesh Ltd.', last_purchase_price: 12 },
    { id: 'INV-ITM-02', name: 'Disposable Syringes (5ml with needle)', category: 'Disposable Consumables', current_stock: 3200, unit: 'Pcs', min_stock: 800, supplier: 'JMI Syringes Ltd.', last_purchase_price: 6 },
    { id: 'INV-ITM-03', name: 'IV Cannula (20G Pink)', category: 'Medical Equipment', current_stock: 850, unit: 'Pcs', min_stock: 200, supplier: 'Becton Dickinson Dist.', last_purchase_price: 35 },
    { id: 'INV-ITM-04', name: 'Normal Saline 0.9% (1000ml IV Infusion)', category: 'IV Fluids', current_stock: 920, unit: 'Bags', min_stock: 250, supplier: 'Beximco Infusion', last_purchase_price: 68 },
    { id: 'INV-ITM-05', name: 'High-Concentration Oxygen Masks with Reservoir', category: 'Respiratory Equipment', current_stock: 240, unit: 'Pcs', min_stock: 50, supplier: 'MediSupply Bangladesh Ltd.', last_purchase_price: 180 }
  ],

  // Insurance Providers (TPA)
  insurance_providers: [
    { id: 'INS-01', name: 'গ্রীন ডেল্টা ইন্স্যুরেন্স পিএলসি', code: 'GREEN-DELTA', coverage: 'Cashless & Reimbursement', helpline: '16457', contact_person: 'কামাল উদ্দিন', status: 'Active' },
    { id: 'INS-02', name: 'মেটলাইফ বাংলাদেশ (MetLife)', code: 'METLIFE-BD', coverage: 'Direct Hospital Network', helpline: '16344', contact_person: 'ফারিয়া তাবাসসুম', status: 'Active' },
    { id: 'INS-03', name: 'প্রগতি লাইফ ইন্স্যুরেন্স লিমিটেড', code: 'PRAGATI-LIFE', coverage: 'Corporate Health Cards', helpline: '16688', contact_person: 'রেজাউল করিম', status: 'Active' }
  ],

  // Public Website CMS Content
  cms: {
    hero: {
      title_bn: 'উন্নত প্রযুক্তির চিকিৎসা ও মানবিক সেবায় বিশ্বস্ত প্রতিষ্ঠান',
      title_en: 'Advanced Healthcare Technology with Compassionate Healing',
      subtitle_bn: 'সার্বক্ষণিক জরুরি সেবা, অভিজ্ঞ চিকিৎসক মণ্ডলী, আধুনিক আইসিইউ এবং আন্তর্জাতিক মানের ডায়াগনস্টিক সুবিধার সমন্বয়ে আপনার সেবায় নিয়োজিত।',
      subtitle_en: '24/7 Emergency Care, World-Class ICU, Renowned Specialists, and Modern Diagnostic Facilities in Dhaka, Bangladesh.',
      hotline: '10678',
      ambulance: '+880 1711-000999'
    },
    packages: [
      {
        id: 'PKG-01',
        title_bn: 'মৌলিক স্বাস্থ্য পরীক্ষা প্যাকেজ (Basic Wellness)',
        title_en: 'Basic Wellness Health Checkup',
        price: 2500,
        original_price: 3600,
        featured: false,
        tests: ['CBC with ESR', 'Fasting Blood Sugar', 'Serum Creatinine', 'Lipid Profile (Mini)', 'Urine R/M/E', 'General Physician Consultation']
      },
      {
        id: 'PKG-02',
        title_bn: 'এক্সিকিউটিভ কার্ডিয়াক প্যাকেজ (Comprehensive Cardiac)',
        title_en: 'Executive Comprehensive Cardiac Package',
        price: 8500,
        original_price: 11500,
        featured: true,
        tests: ['Digital ECG 12-Lead', 'Echocardiogram with Color Doppler', 'Lipid Profile Comprehensive', 'Serum Creatinine & Electrolytes', 'Chest X-Ray Digital', 'Senior Cardiologist Consultation']
      },
      {
        id: 'PKG-03',
        title_bn: 'সিনিয়র সিটিজেন স্বাস্থ্য প্যাকেজ (Senior Citizen)',
        title_en: 'Senior Citizen Total Care Package',
        price: 6200,
        original_price: 8800,
        featured: false,
        tests: ['CBC with ESR', 'HbA1c & Fasting Glucose', 'Kidney & Liver Function Test', 'Uric Acid & Calcium', 'USG Whole Abdomen', 'Consultant Physician Checkup']
      }
    ],
    news_and_articles: [
      {
        id: 'ART-01',
        title_bn: 'হৃদরোগ প্রতিরোধে জীবনযাপনের সঠিক নিয়ম ও সতর্কতা',
        title_en: 'Preventing Cardiovascular Disease: Lifestyle Habits & Warnings',
        category: 'হৃদরোগ ও স্বাস্থ্য',
        date: '2026-11-02',
        author: 'অধ্যাপক ডা. মিজানুর রহমান',
        excerpt_bn: 'নিয়মিত শরীরচর্চা, লবণ-চিনির পরিমিত ব্যবহার এবং ধূমপান পরিহারের মাধ্যমে হৃদরোগের ঝুঁকি ৮০% পর্যন্ত হ্রাস করা সম্ভব।'
      },
      {
        id: 'ART-02',
        title_bn: 'ডায়াবেটিস রোগীদের কিডনি সুরক্ষায় যা জানা জরুরি',
        title_en: 'Protecting Kidney Health in Diabetic Patients',
        category: 'ডায়াবেটিস ও কিডনি',
        date: '2026-10-28',
        author: 'ডা. তাসলিমা আক্তার',
        excerpt_bn: 'রক্তে গ্লুকোজ ও রক্তচাপ নিয়ন্ত্রণে রাখা এবং প্রতি ৬ মাসে সিরাম ক্রিয়েটিনিন ও প্রস্রাবের মাইক্রোঅ্যালবুমিন পরীক্ষা করার গুরুত্ব।'
      },
      {
        id: 'ART-03',
        title_bn: 'কেয়ারপয়েন্ট হাসপাতালে নতুন অত্যাধুনিক ক্যাথল্যাব উদ্বোধন',
        title_en: 'Inauguration of Advanced Cath Lab at CarePoint Hospital',
        category: 'হাসপাতাল সংবাদ',
        date: '2026-10-20',
        author: 'কেয়ারপয়েন্ট জনসংযোগ বিভাগ',
        excerpt_bn: 'আন্তর্জাতিক মানের ফিলিপস অ্যাজুরিয়ন ৭ ক্যাথল্যাব স্থাপনের ফলে হৃদরোগীদের দ্রুত এনজিওগ্রাম ও রিং পরানোর ক্ষেত্রে নতুন মাত্রা যোগ হলো।'
      }
    ]
  },

  // Notifications
  notifications: [
    { id: 'NOTIF-01', type: 'Appointment', title: 'নতুন অনলাইন অ্যাপয়েন্টমেন্ট', desc: 'মো. রফিকুল ইসলাম অধ্যাপক ডা. মিজানুর রহমানের জন্য অ্যাপয়েন্টমেন্ট বুক করেছেন।', time: '১০ মিনিট আগে', unread: true },
    { id: 'NOTIF-02', type: 'Lab', title: 'জরুরি ল্যাব টেস্ট রিপোর্ট প্রস্তুত', desc: 'কাজী আনোয়ার হোসেনের (UHID: CPH-2026-0003) সিরাম ক্রিয়েটিনিন টেস্ট অনুমোদিত হয়েছে।', time: '৪৫ মিনিট আগে', unread: true },
    { id: 'NOTIF-03', type: 'Emergency', title: 'রেড ট্রায়াজ অ্যালার্ট', desc: 'জরুরি বিভাগে একিউট করোনারি সিনড্রোমের রোগী ভর্তি হয়েছে।', time: '২ ঘণ্টা আগে', unread: false },
    { id: 'NOTIF-04', type: 'Pharmacy', title: 'স্বল্প স্টক সতর্কতা (Low Stock Alert)', desc: 'Ceclor 250 Syrup এর স্টক ৩০ ইউনিটের নিচে নেমে গেছে। অবিলম্বে সংগ্রহ প্রয়োজন।', time: '৪ ঘণ্টা আগে', unread: false }
  ]
};
