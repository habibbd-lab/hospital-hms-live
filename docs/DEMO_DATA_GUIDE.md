# DEMO DATA GUIDE & STORAGE SCHEMA
## CarePoint Hospital Management System (HMS)

### 1. Data Layer Overview

The system uses a centralized data model initialized from `assets/js/seed-data.js` and managed through `assets/js/storage.js`.

The storage key in the browser is:
`carepoint_hms_data_v1`

---

### 2. Primary Collections Schema

#### 1. `hospital`
- Hospital identity, license, phone numbers, emergency hotlines, and branches.

#### 2. `users`
- System user accounts for all 13 supported roles with usernames, departments, and linked doctor/patient records.

#### 3. `departments`
- Clinical departments: `id`, `code`, `name_bn`, `name_en`, `head`, `floor`, `icon`, `doctors_count`, `status`.

#### 4. `doctors`
- Medical specialists: `id` (e.g. `DOC-01`), `name_bn`, `name_en`, `dept_id`, `dept_name`, `degrees`, `designation`, `experience`, `fee`, `room`, `schedule`, `status`.

#### 5. `patients`
- Registered patients: `id`, `uhid` (e.g. `CPH-2026-0001`), `name_bn`, `name_en`, `age`, `gender`, `blood_group`, `phone`, `nid`, `dob`, `address`, `emergency_contact_name`, `emergency_contact_phone`, `allergies`, `chronic_conditions`, `status`.

#### 6. `appointments`
- Outpatient bookings: `id`, `appointment_no`, `token_no`, `patient_uhid`, `patient_name`, `patient_phone`, `doctor_id`, `doctor_name`, `dept_name`, `date`, `time_slot`, `fee`, `type`, `status`, `payment_status`.

#### 7. `admissions`
- Inpatient admissions: `id`, `admission_no`, `uhid`, `patient_name`, `age`, `gender`, `bed_id`, `bed_number`, `ward_name`, `admission_date`, `attending_doctor`, `admission_diagnosis`, `advance_paid`, `status`, `discharge_date`, `discharge_summary`.

#### 8. `wards` & `beds`
- Ward blocks and individual beds with numbers, categories, daily charges, occupancy status, and occupying patient UHID.

#### 9. `lab_catalog` & `lab_orders`
- Test pricing catalog and individual diagnostic orders with sample IDs, barcode placeholders, numerical test values, and pathologist approvals.

#### 10. `medicines`
- Pharmacy inventory with generic/brand names, batch numbers, manufacturer, stock counts, expiry dates, and unit prices.

#### 11. `invoices`
- Financial ledger records with itemized descriptions, subtotal, discount, VAT, total, paid amount, due balance, and payment methods.

#### 12. `ot_schedules`, `emergency_cases`, `blood_bank`, `ambulances`, `employees`, `inventory`, `insurance_providers`, `cms`, `notifications`.

---

### 3. Backup & Reset Operations

1. **Exporting Demo Data:**
   - Calling `HMS.Storage.exportJSON()` creates a downloadable file `carepoint_hms_backup_YYYY-MM-DD.json`.
2. **Importing Demo Data:**
   - Calling `HMS.Storage.importJSON(jsonString)` validates the presence of required collections before saving to LocalStorage.
3. **Resetting Demo Data:**
   - Calling `HMS.Storage.resetToSeed()` restores the initial seed data from `HMS.SEED_DATA` without requiring a browser cache clear.

