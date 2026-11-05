# STATIC FRONTEND VERSION LIMITATIONS & PRODUCTION ROADMAP
## CarePoint Multispecialty Hospital Management System

### 1. Purpose of this Document

This document transparently explains the technical boundaries and limitations of this **Static Frontend Prototype** and outlines the server-side architectural requirements needed for a production-grade enterprise Hospital Management System.

---

### 2. Core Frontend Limitations

#### 2.1 Browser Storage is Not a Medical Database
- **Local Isolation:** All demo records (patients, appointments, invoices, admissions, vitals) are stored in the client browser's `LocalStorage`. Data entered on one device/browser does not sync with another device or doctor's tablet.
- **Data Volatility:** If a user clears their browser cache or uses private/incognito mode, the demo data resets to the default seed state.
- **Storage Limits:** LocalStorage has a browser-enforced quota (typically 5MB - 10MB per origin), which cannot support enterprise clinical imaging archives, high-resolution radiology DICOM files, or years of patient histories.

#### 2.2 Client-Side Authentication is Not Real Security
- **No Server Enforced RBAC:** Role switching and access permissions in this static version are implemented purely in JavaScript.
- **Plaintext Credentials:** Passwords entered in the static version are checked locally for demonstration only; there is no bcrypt hashing, server salt, or JWT signature validation.
- **No Protected Routes:** Anyone inspecting browser source code or network requests can view static templates. In production, medical records require strict HIPAA/GDPR-compliant server-side gatekeeping.

#### 2.3 Simulated External Integrations
- **SMS Gateway:** Appointment confirmations and notifications simulate SMS dispatch via UI alerts and browser notifications; no live telecom SMS gateway (e.g., Grameenphone, Banglalink, Twilio) is connected.
- **Payment Gateway:** bKash, Nagad, Rocket, and Card transactions generate simulated transaction IDs (TrxID) and mark demo invoices as paid without contacting Bangladesh Bank or payment aggregators.
- **PACS / DICOM Imaging:** The Radiology module demonstrates the radiologist's review workflow and clinical findings interface, but does not connect to a live hospital PACS server or DICOM router.
- **Laboratory Device Interfacing:** Lab results are entered via technician forms; automatic bi-directional interfacing with physical hematology/biochemistry analyzers (via RS-232 / HL7 protocol) is simulated.

---

### 3. Requirements for Future Laravel Backend

When upgrading to a production Laravel + MySQL deployment, the following changes must occur:

1. **Database Persistence:** Replace `HMS.Storage` JavaScript methods with RESTful JSON API calls (`axios` or `fetch`) targeting Laravel controllers.
2. **Relational MySQL Database:** Deploy indexed tables with foreign key constraints, ACID transaction rollbacks, and soft deletes.
3. **Authentication:** Implement Laravel Sanctum / Passport for token-based authentication, password hashing, and session management.
4. **Authorization:** Implement Laravel Policies and Spatie Permissions for server-side role validation.
5. **Secure Storage:** Store medical scans and uploaded files in S3 or protected private disks with signed URLs.
6. **Background Queues:** Use Redis and Laravel Queues for background SMS/Email reminders and daily automated database backups.
