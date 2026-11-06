# CHANGELOG
## CarePoint Hospital Management System (HMS)

All notable changes and milestones for the static frontend version of the Advanced Multispecialty Hospital Management System are documented in this file.

---

### [Version 1.0.0] - 2026-11-06

#### Added
- **Design System & Architecture:**
  - Modern healthcare color palette: Navy (`#12304A`), Medical Blue (`#1677C8`), Green (`#16A085`), Light Background (`#F5F8FC`).
  - Dual typography support: Bangla ('Hind Siliguri') and English ('Inter').
  - Responsive layout engine with desktop sidebar, collapsible offcanvas navigation, and topbar.
  - Reusable UI component renderers: `HMS.UI.renderDemoBanner()`, `HMS.UI.renderAdminSidebar()`, `HMS.UI.renderAdminTopbar()`, `HMS.UI.showToast()`, and universal CSV table exporter.

- **Storage & State Engine:**
  - Centralized LocalStorage persistence layer (`HMS.Storage`) with relational demo simulation.
  - Initial seed dataset (`HMS.SEED_DATA`) tailored to realistic Bangladeshi healthcare contexts.
  - JSON Data Export and Validated JSON Data Import utilities.
  - 1-click Demo Data Reset feature.

- **Localization (i18n):**
  - Full bilingual support (Bangla default, English toggle).
  - Currency formatting in Bangladeshi Taka (`৳ BDT`).
  - Asia/Dhaka timezone and date formatting helpers.

- **Public Hospital Website (14 Pages):**
  - `index.html`: Hero banner, quick appointment card, statistics ribbon, departments, doctors, packages, testimonials, articles, emergency box, and Google map.
  - `about.html`: Hospital history, mission, vision, chairman and MD messages, leadership, and DGHS/ISO accreditations.
  - `departments.html`: 12+ clinical departments with live search and filtering.
  - `doctors.html`: Doctor directory with department filter, search, chamber schedules, fees, and view profile modal.
  - `services.html`: OPD, IPD, Emergency, ICU, Cath Lab, Dialysis, and Ambulance.
  - `packages.html`: Comprehensive health packages with pricing and test breakdowns.
  - `facilities.html`: ICU/CCU, Modular Operation Theatres, Blood Bank, and Ambulance fleet.
  - `health-library.html`: Health articles and educational blogs.
  - `news-events.html`: News, achievements, and free health camps.
  - `careers.html`: Job openings with interactive online application modal.
  - `contact.html`: Contact info, patient feedback form, complaint desk, and FAQ accordion.
  - `appointment.html`: 5-step interactive appointment booking workflow with instant token slip.
  - `login.html`: Role-selection quick login screen for all 13 demo accounts.
  - `register.html`: Patient registration form generating sequence UHID (`CPH-2026-XXXX`).

- **HMS Admin Application (16 Modules):**
  - `admin/index.html`: Dashboard with dynamic counters, Chart.js graphs, live appointment queue, and quick actions.
  - `admin/patients.html`: Patient CRUD, multi-parameter search, tabbed medical history modal, and printable health cards.
  - `admin/doctors.html`: Doctor CRUD, chamber schedules, consultation fees, and availability toggles.
  - `admin/appointments.html`: Appointment list, token generation, status lifecycle, and token printing.
  - `admin/opd.html`: Consultation queue, vitals entry, clinical diagnosis, digital prescription builder, and investigation requests.
  - `admin/ipd.html`: Inpatient admission, bed allocation validator (prevents assigning occupied beds), nursing notes, discharge workflow, and printable discharge summary.
  - `admin/laboratory.html`: LIS test catalog, sample barcodes, quantitative result entry with High/Low flags, and approved report printer.
  - `admin/radiology.html`: Imaging orders, radiologist reports, and simulated PACS/DICOM console.
  - `admin/pharmacy.html`: Medicine inventory, batch tracking, stock alerts, and live POS counter with automatic stock deduction and invoice generation.
  - `admin/billing.html`: Financial ledger, payment collection (Cash, bKash, Nagad, Card), due tracking, and printable receipts.
  - `admin/beds.html`: Interactive visual bed matrix for wards, CCU, ICU, and cabins.
  - `admin/operation-theatre.html`: OT scheduling, surgeon/anesthesia booking, and surgery status tracking.
  - `admin/emergency.html`: Emergency triage (Red/Yellow/Green), doctor assignment, and direct IPD transfer.
  - `admin/icu.html`: ICU/CCU bedside monitoring simulation with live pulse fluctuation and ventilator parameters.
  - `admin/nursing.html`: Assigned patient roster, Medication Administration Record (MAR), and shift handover logs.
  - `admin/blood-bank.html`: Blood inventory by group (A+, A-, B+, B-, O+, O-, AB+, AB-), donor registry, and issue logs.
  - `admin/ambulance.html`: Vehicle fleet, GPS dispatch desk, driver assignment, and trip history.
  - `admin/hr.html`: Employee directory, attendance toggles, monthly payroll calculation, and printable payslips.
  - `admin/inventory.html`: Consumables stock, purchase requisitions, and supplier records.
  - `admin/insurance.html`: TPA providers, policy verification, and claims tracking.
  - `admin/medical-records.html`: MRD archive and access audit logs.
  - `admin/additional-modules.html`: Auxiliary hospital services (Diet, Laundry, Housekeeping, Bio-Medical, Security).
  - `admin/reports.html`: Multi-category analytics with date filters, CSV export, and print layout.
  - `admin/cms.html`: Content management for public homepage, packages, and health blog.
  - `admin/notifications.html`: Real-time notification center and event configuration.
  - `admin/settings.html`: Hospital settings, 13 user accounts, RBAC matrix, and backup/restore.

- **Patient Portal (7 Pages):**
  - `patient/index.html`: Personal health dashboard scoped to demo patient.
  - `patient/profile.html`: Personal health card, allergies, and contact details.
  - `patient/appointments.html`: Personal appointments, token slips, and cancellation.
  - `patient/prescriptions.html`: Archive of digital prescriptions.
  - `patient/reports.html`: Downloadable and printable approved laboratory and radiology reports.
  - `patient/admissions.html`: Inpatient admission history and discharge summaries.
  - `patient/billing.html`: Invoices, receipts, and online bill payment simulation.

- **Documentation Suite:**
  - Preserved `PROJECT_DOCUMENTATION.md` as primary specification.
  - Created `PROJECT_SETUP_GUIDE.md`, `STATIC_VERSION_LIMITATIONS.md`, `LARAVEL_MIGRATION_PLAN.md`, `MODULE_DOCUMENTATION.md`, `DEMO_DATA_GUIDE.md`, `TESTING_DOCUMENTATION.md`, `CHANGELOG.md`, and `README.md`.

