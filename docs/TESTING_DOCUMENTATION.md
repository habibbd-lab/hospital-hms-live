# QUALITY ASSURANCE & TESTING DOCUMENTATION
## CarePoint Hospital Management System (HMS)

### 1. Test Overview

This test suite verifies the functionality, data persistence, business logic, responsive behavior, and print layouts of the entire Hospital Management System.

---

### 2. Functional Test Verification Matrix

| Area | Module / Workflow | Test Action | Expected Result | Status |
|---|---|---|---|---|
| **Public** | Homepage (`index.html`) | Load homepage, view stats ribbon, departments, doctors, packages | All sections render dynamically with zero JavaScript console errors | **PASS** |
| **Public** | Doctor Discovery (`doctors.html`) | Filter by Department & search doctor by keyword | Table dynamically filters in realtime; modal displays profile | **PASS** |
| **Public** | Appointment Booking (`appointment.html`) | Select doctor, date, time slot, input patient info, submit | Generates unique token, stores appointment, displays confirmation slip | **PASS** |
| **Public** | Patient Register (`register.html`) | Submit registration form | Generates sequence UHID (`CPH-2026-XXXX`), adds to storage | **PASS** |
| **Admin** | Dashboard (`admin/index.html`) | View counters and Chart.js graphs | Dynamic calculation from demo dataset (beds, patients, revenue) | **PASS** |
| **Admin** | Patient CRUD (`admin/patients.html`) | Add patient, search UHID, view detail modal, print health card | Complete tabbed history displays; print preview opens | **PASS** |
| **Admin** | Doctor CRUD (`admin/doctors.html`) | Toggle availability status, add new doctor | Status switches between "Available" and "On Leave" | **PASS** |
| **Admin** | Appointment Workflow (`admin/appointments.html`) | Change status (Checked In -> Completed), delete | State transitions update correctly; list refreshes | **PASS** |
| **Admin** | OPD Consultation (`admin/opd.html`) | Enter vitals, diagnosis, medicines, and save | Saves prescription, creates lab order automatically | **PASS** |
| **Admin** | IPD Admission (`admin/ipd.html`) | Admit patient into vacant bed | Bed status changes to 'Occupied'; occupied bed hidden from selector | **PASS** |
| **Admin** | IPD Discharge (`admin/ipd.html`) | Discharge admitted patient | Bed status reverts to 'Available'; discharge summary generated | **PASS** |
| **Admin** | LIS Laboratory (`admin/laboratory.html`) | Enter test numerical values, mark approved | Values flagged High/Low; report becomes available in patient portal | **PASS** |
| **Admin** | Pharmacy POS (`admin/pharmacy.html`) | Add medicines to POS cart, complete sale | Stock decrements immediately; new invoice created in billing | **PASS** |
| **Admin** | Billing (`admin/billing.html`) | Record partial/full payment on due invoice | Due amount reduces; status updates to 'Paid' / 'Partial' | **PASS** |
| **Admin** | Bed Matrix (`admin/beds.html`) | Click beds in ward matrix | Color-coded status displays; occupancy info shown | **PASS** |
| **Admin** | Emergency Triage (`admin/emergency.html`) | Register new emergency case | Triage level (Red/Yellow/Green) badges display | **PASS** |
| **Admin** | Reports & Analytics (`admin/reports.html`) | Select report type, click CSV export | `.csv` file downloads immediately with UTF-8 BOM encoding | **PASS** |
| **Admin** | Role Switching (`auth.js`) | Switch role to Doctor, Nurse, Pharmacist | Accessible sidebar modules dynamically adjust per role | **PASS** |
| **Admin** | Data Engine (`storage.js`) | Export JSON, Reset Demo Data | JSON downloads; reset re-seeds default data cleanly | **PASS** |
| **Patient** | Patient Portal (`patient/index.html`) | View personal appointments, prescriptions, and bills | Scoped specifically to the logged-in demo patient | **PASS** |
| **Patient** | Online Bill Pay (`patient/billing.html`) | Click online payment demo (bKash) | Clears due balance and marks invoice paid | **PASS** |

---

### 3. Responsive & Device Compatibility
- **Desktop (1920px, 1440px, 1366px):** Full desktop sidebar, multi-column dashboard cards.
- **Laptop (1280px, 1024px):** Clean table scrolling, responsive charts.
- **Tablet (768px):** Collapsible offcanvas sidebar, touch-friendly buttons.
- **Mobile (430px, 390px, 360px):** Single-column stacked layouts, horizontal scrolling tables, zero horizontal page blowout.

---

### 4. Browser Compatibility
- Tested and verified on Chromium (Chrome, Edge, Brave), Gecko (Firefox), and WebKit (Safari).
- UTF-8 character encoding verified for proper Bangla (বাংলা) font rendering without broken glyphs.
