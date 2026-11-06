# CarePoint Multispecialty Hospital & Research Center
## Advanced Hospital Management System (HMS) — Static Frontend Version

> **Enterprise Hospital ERP & Public Healthcare Portal**  
> Built strictly with **HTML5, CSS3, Bootstrap 5.x, Vanilla JavaScript (ES6+), Bootstrap Icons, Chart.js, and Browser LocalStorage**.  
> **100% Static & Standalone** — Zero backend required to run. Fully compatible with GitHub Pages and direct browser opening.

---

## 🌟 Key System Capabilities

- **1. Public Hospital Website (14 Pages):**
  - Full sitemap: Homepage, About Us, Departments, Doctors, Services, Health Packages, Facilities, Health Library (Blog), News & Events, Careers, Contact & Feedback, 5-Step Appointment Booking, Unified Login, and Patient Registration.
  - Emergency Top Bar with Hotline `10678` and Ambulance `01711-000999`.
  - Statistics Ribbon, Doctor Profile Modals, and Interactive Health Package Booking.

- **2. Hospital Administration ERP (25+ Modules):**
  - **Dynamic Dashboard:** Live KPI cards (Patients, Doctors, Appointments, Beds, Revenue in ৳ BDT) calculated directly from LocalStorage demo data. Real Chart.js graphs for OPD vs IPD trends, monthly revenue, department performance, and bed occupancy.
  - **Patient Care & Clinical:** Patient Management with auto-generated UHID (`CPH-2026-XXXX`), Appointment Queue with Token management, OPD Consultation with Digital Prescription Builder (Rx), IPD Inpatient Management with Bed Allocation and Discharge Summaries, Emergency Triage (Red/Yellow/Green), and Level-3 ICU/CCU Bedside Monitoring.
  - **Diagnostics & Pharmacy:** Laboratory Information System (LIS) with sample tracking barcodes (`SMP-2026-XXXX`), quantitative result entry, High/Low reference range flags, and approved report printer. Radiology & Imaging with simulated PACS/DICOM console. Pharmacy Inventory with batch tracking and a live POS billing counter with automatic stock deduction.
  - **Operations & Finance:** Bed & Ward visual matrix, Operating Theatre (OT) scheduling, 24/7 Blood Bank with group stock matrix, Ambulance fleet dispatch, Billing & Financial accounting with partial/full payment recording, and Health Insurance (TPA) claims tracking.
  - **Auxiliary Services:** Diet & Clinical Nutrition, Housekeeping rosters, Laundry batch tracking, Biomedical Equipment calibration logs, and Security visitor passes.
  - **Reports & Analytics:** Filterable reporting engine with date range pickers, universal CSV export, and print layouts.
  - **Website CMS:** Admin control over public homepage hero banners, emergency hotlines, packages, and health blog articles.

- **3. Patient Portal (7 Pages):**
  - Personal health dashboard scoped to the logged-in demo patient (`CPH-2026-0001` / মো. রফিকুল ইসলাম).
  - Profile with allergies and chronic conditions, personal appointment history, digital prescriptions archive, downloadable approved lab reports, admission history, and online bill payment simulation (bKash/Nagad/Card).

- **4. Bilingual Support (Bangla & English):**
  - Default language: **Bangla (বাংলা)** with Hind Siliguri typography.
  - 1-click instant language switch to **English**.
  - Currency formatted in Bangladeshi Taka (`৳ BDT`).
  - Asia/Dhaka timezone and Bangladesh-friendly date formats.

- **5. Role-Based Demo Experience (13 Roles):**
  - Super Administrator, Hospital Administrator, Receptionist, Doctor, Nurse, Laboratory Technician, Radiologist, Pharmacist, Accountant, HR Manager, Store Manager, IT Officer, and Patient.
  - Seamless 1-click role switcher in the topbar and on the login page.
  - Client-side navigation filtering per role.

- **6. Centralized Demo Data Engine:**
  - Seeded with realistic Bangladeshi healthcare records (carefully identified as fictional demo data).
  - Top demo banner on every page with **Export Data (JSON)**, **Import Data (JSON)**, and **Reset Demo Data**.

---

## 🚀 Quick Start Guide

### Option 1: Direct File Opening (No Installation)
Double-click `index.html` in the project root folder or right-click `index.html` and choose **Open with Google Chrome / Microsoft Edge / Firefox**.

### Option 2: Using Python Static Server (Recommended)
In terminal (PowerShell or Bash):
```bash
python -m http.server 8080
```
Open your browser at: `http://localhost:8080`

### Option 3: Deploying to GitHub Pages
1. Push this folder to a GitHub repository.
2. In your repo, go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and `/ (root)`. Click **Save**.
4. The prototype is immediately accessible via your GitHub Pages URL!

---

## 🔑 Demo Login Accounts

| Role | Username | Password | Default Redirect |
|---|---|---|---|
| **Super Administrator** | `admin` | `password123` | `/admin/index.html` |
| **Hospital Administrator** | `hosp_admin` | `password123` | `/admin/index.html` |
| **Doctor / Consultant** | `doctor` | `password123` | `/admin/index.html` |
| **Nurse / Incharge** | `nurse` | `password123` | `/admin/index.html` |
| **Receptionist** | `reception` | `password123` | `/admin/index.html` |
| **Laboratory Technician** | `lab` | `password123` | `/admin/laboratory.html` |
| **Radiologist** | `radiology` | `password123` | `/admin/radiology.html` |
| **Pharmacist** | `pharmacy` | `password123` | `/admin/pharmacy.html` |
| **Accountant** | `accountant` | `password123` | `/admin/billing.html` |
| **HR Manager** | `hr` | `password123` | `/admin/hr.html` |
| **Store Manager** | `store` | `password123` | `/admin/inventory.html` |
| **IT Officer** | `it` | `password123` | `/admin/settings.html` |
| **Patient (Portal)** | `patient` | `password123` | `/patient/index.html` |

*Tip: You can also click any of the 13 role cards on `login.html` to instantly log in as that persona!*

---

## 📁 Project Structure

```text
hospital-hms/
│
├── index.html                    (Public website home)
├── about.html                    (About hospital, history, mission, leadership)
├── departments.html              (Clinical departments directory & search)
├── doctors.html                  (Doctor directory, schedule & profile modal)
├── services.html                 (Comprehensive hospital services)
├── packages.html                 (Health checkup packages with pricing)
├── facilities.html               (ICU/CCU, Modern OT, Blood Bank, Ambulance)
├── health-library.html           (Health articles & blogs)
├── news-events.html              (Hospital news, achievements & camps)
├── careers.html                  (Job openings & online application form)
├── contact.html                  (Contact info, feedback, complaint & FAQ)
├── appointment.html              (Interactive 5-step appointment booking)
├── login.html                    (Unified role-based demo login)
├── register.html                 (Patient registration with sequence UHID)
│
├── patient/                      (Patient Portal Layout & Pages)
│   ├── index.html                (Personal health dashboard)
│   ├── profile.html              (Health profile & contact info)
│   ├── appointments.html         (My appointments & token slips)
│   ├── prescriptions.html        (Digital prescriptions archive)
│   ├── reports.html              (Approved laboratory & radiology reports)
│   ├── admissions.html           (Inpatient admissions & discharge summaries)
│   └── billing.html              (Bills & online payment demo)
│
├── admin/                        (Hospital Administration ERP)
│   ├── index.html                (Unified dashboard with Chart.js analytics)
│   ├── patients.html             (Patient directory & tabbed medical history)
│   ├── doctors.html              (Doctor schedule, fees & availability toggles)
│   ├── appointments.html         (Appointment queue & token lifecycle)
│   ├── opd.html                  (Consultation, vitals & digital prescription)
│   ├── ipd.html                  (Admission, bed validator & discharge summary)
│   ├── laboratory.html           (LIS catalog, result entry & report approval)
│   ├── radiology.html            (Imaging orders & simulated PACS console)
│   ├── pharmacy.html             (Medicine inventory, alerts & live POS counter)
│   ├── billing.html              (Invoices, payment collection & money receipt)
│   ├── beds.html                 (Visual bed matrix for wards, CCU & ICU)
│   ├── operation-theatre.html    (OT scheduling & surgical team roster)
│   ├── emergency.html            (Triage Red/Yellow/Green & fast-track admission)
│   ├── icu.html                  (ICU bedside vitals & ventilator simulation)
│   ├── nursing.html              (Nursing MAR medication checklist & handover)
│   ├── blood-bank.html           (Blood group inventory & donor registry)
│   ├── ambulance.html            (Fleet dispatch, driver assignment & trips)
│   ├── hr.html                   (Employee directory, attendance & payroll)
│   ├── inventory.html            (Consumables stock & purchase requisitions)
│   ├── insurance.html            (TPA providers, policy checks & claims tracking)
│   ├── medical-records.html      (MRD archive & access audit logs)
│   ├── additional-modules.html   (Diet, Laundry, Bio-Med, Security passes)
│   ├── reports.html              (Dynamic reporting engine + CSV export + print)
│   ├── cms.html                  (Website CMS for hero, hotlines & packages)
│   ├── notifications.html        (Notification center & alert channels)
│   └── settings.html             (Hospital settings, 13 roles & backup/restore)
│
├── assets/
│   ├── css/
│   │   ├── style.css             (Design system, colors, typography, tables)
│   │   ├── website.css           (Public website components & hero)
│   │   ├── dashboard.css         (Admin & Patient layouts, sidebars, bed cards)
│   │   └── responsive.css        (Mobile, tablet & desktop media queries)
│   └── js/
│       ├── config.js             (App configuration, constants, roles, statuses)
│       ├── i18n.js               (Bangla / English translation dictionaries)
│       ├── seed-data.js          (Realistic Bangladeshi healthcare sample data)
│       ├── storage.js            (LocalStorage data layer, CRUD & business rules)
│       ├── auth.js               (Demo authentication & role switcher)
│       ├── components.js         (Shared sidebars, topbars, toasts, CSV exporter)
│       ├── website.js            (Public website dynamic filtering & logic)
│       └── app.js                (Universal bootstrap initializer)
│
├── docs/
│   ├── PROJECT_DOCUMENTATION.md  (Primary project specification source of truth)
│   ├── PROJECT_SETUP_GUIDE.md    (How to run, test, and deploy)
│   ├── MODULE_DOCUMENTATION.md   (Functional breakdown of all 29 modules)
│   ├── DEMO_DATA_GUIDE.md        (Storage schema & backup operations)
│   ├── STATIC_VERSION_LIMITATIONS.md (Static boundaries & future backend scope)
│   ├── LARAVEL_MIGRATION_PLAN.md (Controllers, endpoints, MySQL tables & security)
│   ├── TESTING_DOCUMENTATION.md  (Quality assurance verification matrix)
│   └── CHANGELOG.md              (Chronological milestones & version notes)
└── README.md
```

---

## 🔒 Limitations & Future Laravel Backend

This application is a **frontend prototype with browser LocalStorage persistence**:
- Browser data belongs to the current browser/device only; multi-device synchronization is not available without a backend.
- Demo login and permissions are frontend-only simulations and not server-enforced security.
- Integrations (SMS, Email, Payment Gateway, PACS/DICOM, Analyzer interfacing) are clearly identified browser simulations.

For complete details on transitioning to a production Laravel 11.x + MySQL stack, please review [`docs/LARAVEL_MIGRATION_PLAN.md`](docs/LARAVEL_MIGRATION_PLAN.md) and [`docs/STATIC_VERSION_LIMITATIONS.md`](docs/STATIC_VERSION_LIMITATIONS.md).

---

## 📄 License & Attribution

Designed and engineered for **CarePoint Multispecialty Hospital & Research Center** as a demonstration of high-standard frontend healthcare architecture.
All sample names, telephone numbers, and clinical details in demo data are purely fictional.

