# LARAVEL BACKEND MIGRATION PLAN
## Enterprise Transition Architecture for CarePoint Hospital Management System

### 1. Executive Summary

This architecture plan outlines the structured transition from the current **Static Frontend Prototype** to a high-performance, secure **Laravel 11.x + MySQL Enterprise Hospital ERP**.

The frontend application has been designed specifically with decoupled service layers (`HMS.Storage`, `HMS.Auth`, `HMS.Config`) so that frontend JavaScript methods can be seamlessly connected to Laravel RESTful API endpoints without altering UI markup.

---

### 2. Frontend Modules & Corresponding Laravel Controllers

| Static Module | Frontend File | Target Laravel Controller | Database Tables Involved |
|---|---|---|---|
| **Auth & Users** | `login.html`, `auth.js` | `AuthController`, `UserController` | `users`, `roles`, `permissions`, `personal_access_tokens` |
| **Patients** | `patients.html` | `PatientController` | `patients`, `patient_contacts`, `patient_allergies` |
| **Doctors** | `doctors.html` | `DoctorController`, `ScheduleController` | `doctors`, `departments`, `doctor_schedules`, `leaves` |
| **Appointments** | `appointments.html` | `AppointmentController` | `appointments`, `appointment_tokens`, `doctor_schedules` |
| **OPD** | `opd.html` | `OpdConsultationController` | `opd_visits`, `prescriptions`, `prescription_items`, `diagnoses` |
| **IPD & Beds** | `ipd.html`, `beds.html` | `IpdAdmissionController`, `BedController` | `admissions`, `wards`, `beds`, `nursing_notes`, `discharges` |
| **Laboratory** | `laboratory.html` | `LabOrderController`, `LabCatalogController` | `lab_catalog`, `lab_orders`, `lab_results`, `lab_samples` |
| **Radiology** | `radiology.html` | `RadiologyController` | `imaging_orders`, `imaging_reports`, `pacs_links` |
| **Pharmacy** | `pharmacy.html` | `PharmacyController`, `MedicineController` | `medicines`, `medicine_batches`, `pharmacy_sales` |
| **Billing** | `billing.html` | `BillingController`, `PaymentController` | `invoices`, `invoice_items`, `payments`, `due_ledgers` |
| **Emergency** | `emergency.html` | `EmergencyController` | `emergency_cases`, `triage_records` |
| **Blood Bank** | `blood-bank.html` | `BloodBankController` | `blood_stock`, `donors`, `blood_transfusions` |
| **Ambulance** | `ambulance.html` | `AmbulanceController` | `ambulances`, `drivers`, `ambulance_trips` |
| **HR & Payroll** | `hr.html` | `EmployeeController`, `PayrollController` | `employees`, `designations`, `attendances`, `payslips` |
| **Inventory** | `inventory.html` | `InventoryController`, `SupplierController`| `inventory_items`, `suppliers`, `purchase_orders` |
| **Insurance** | `insurance.html` | `InsuranceController` | `insurance_providers`, `patient_policies`, `claims` |
| **CMS** | `cms.html` | `CmsController` | `cms_banners`, `cms_packages`, `articles`, `events` |

---

### 3. Suggested API Endpoint Architecture (`/api/v1/`)

```text
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
GET    /api/v1/auth/user
POST   /api/v1/auth/switch-role (SuperAdmin audit)

GET    /api/v1/dashboard/stats

GET    /api/v1/patients
POST   /api/v1/patients
GET    /api/v1/patients/{uhid}
PUT    /api/v1/patients/{uhid}
DELETE /api/v1/patients/{uhid}

GET    /api/v1/doctors
POST   /api/v1/doctors
GET    /api/v1/doctors/{id}/schedule

GET    /api/v1/appointments
POST   /api/v1/appointments
PATCH  /api/v1/appointments/{id}/status

POST   /api/v1/opd/consultations
POST   /api/v1/opd/prescriptions

GET    /api/v1/ipd/admissions
POST   /api/v1/ipd/admissions
POST   /api/v1/ipd/admissions/{id}/discharge

GET    /api/v1/beds
PATCH  /api/v1/beds/{id}/status

GET    /api/v1/laboratory/orders
POST   /api/v1/laboratory/orders
POST   /api/v1/laboratory/orders/{id}/results
POST   /api/v1/laboratory/orders/{id}/approve

GET    /api/v1/pharmacy/medicines
POST   /api/v1/pharmacy/sales

GET    /api/v1/billing/invoices
POST   /api/v1/billing/invoices
POST   /api/v1/billing/invoices/{id}/payments
```

---

### 4. Database Transaction & Concurrency Safeguards

In Laravel, critical hospital operations must be wrapped in `DB::transaction()` with pessimistic locking (`lockForUpdate`):
1. **Bed Allocation:**
   ```php
   DB::transaction(function () use ($bedId, $patientId) {
       $bed = Bed::where('id', $bedId)->lockForUpdate()->firstOrFail();
       if ($bed->status !== 'Available') {
           throw new BedAlreadyOccupiedException('Bed is no longer available.');
       }
       $bed->update(['status' => 'Occupied']);
       // Create admission record...
   });
   ```
2. **Pharmacy Dispensing:**
   ```php
   DB::transaction(function () use ($medicineId, $qty) {
       $batch = MedicineBatch::where('id', $batchId)->lockForUpdate()->firstOrFail();
       if ($batch->stock < $qty) {
           throw new InsufficientStockException('Insufficient stock remaining.');
       }
       $batch->decrement('stock', $qty);
   });
   ```

---

### 5. Production Security Checklist

- Enforce HTTPS and HSTS headers.
- Use Laravel Sanctum with short-lived access tokens and secure HttpOnly cookies.
- Hash passwords using Argon2id or Bcrypt.
- Sanitize HTML inputs and enforce CSRF token verification.
- Encrypt sensitive patient personal data columns (`nid`, `phone`, `medical_notes`) using Laravel's `$casts = ['nid' => 'encrypted']`.
- Maintain immutable `audit_logs` tracking every clinical document access.
