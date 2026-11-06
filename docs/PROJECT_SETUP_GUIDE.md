# PROJECT SETUP & RUNNING GUIDE
## Advanced Multispecialty Hospital Management System (Static Frontend Version)

### 1. Overview

**CarePoint Multispecialty Hospital & Research Center (HMS)** is a complete, modular, and responsive static frontend Hospital Management ERP system built strictly with HTML5, CSS3, Bootstrap 5.x, Vanilla JavaScript (ES6+), Bootstrap Icons, Chart.js, and browser LocalStorage.

---

### 2. Prerequisites

Because this is a **100% Static Frontend Prototype**, **no backend server (Laravel, PHP, Node.js, MySQL, or XAMPP) is required**.

You only need:
- Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari)
- Optional: A lightweight static local web server (such as Python `http.server`, VS Code "Live Server" extension, or Node `npx serve`)

---

### 3. How to Run Locally

#### Option A: Direct Browser File Opening (Zero-Install)
Double-click `index.html` in the project root folder or right-click `index.html` and select **Open with Google Chrome / Microsoft Edge / Firefox**.
The entire website, admin ERP, patient portal, and LocalStorage data engine will run immediately.

#### Option B: Using Python Static Server (Recommended)
Open your terminal (PowerShell, Command Prompt, or Bash) in the project root folder:

```bash
# Python 3
python -m http.server 8080
```
Then open your browser at:
`http://localhost:8080`

#### Option C: Using Node.js npx serve
```bash
npx serve .
```

#### Option D: Using VS Code Live Server
1. Open the `hospital-hms` folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **"Open with Live Server"**.

---

### 4. Deploying to GitHub Pages

The application is engineered with **strict relative paths** (`assets/...`, `../assets/...`) to work flawlessly on GitHub Pages, including repository subpaths (e.g. `https://<username>.github.io/<repo-name>/`).

#### Step-by-Step Deployment:
1. Initialize Git in the project directory:
   ```bash
   git init
   git add .
   git commit -m "feat: complete multispecialty hospital management system frontend"
   ```
2. Create a new GitHub repository (e.g. `hospital-hms`).
3. Add the remote and push to the `main` branch:
   ```bash
   git remote add origin https://github.com/<your-username>/hospital-hms.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** > **Pages**.
5. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
6. Select branch: `main` and folder: `/ (root)`. Click **Save**.
7. In 1-2 minutes, your hospital prototype will be live globally!

---

### 5. Demo Accounts & Credentials

The system provides 13 pre-configured demo user accounts. You can log in using either the form or by clicking any role card on `login.html`:

| Role | Username | Password | Default Redirect |
|---|---|---|---|
| **Super Administrator** | `admin` | `password123` | `/admin/index.html` |
| **Hospital Administrator** | `hosp_admin` | `password123` | `/admin/index.html` |
| **Receptionist** | `reception` | `password123` | `/admin/index.html` |
| **Doctor / Consultant** | `doctor` | `password123` | `/admin/index.html` |
| **Nurse / Incharge** | `nurse` | `password123` | `/admin/index.html` |
| **Laboratory Technician** | `lab` | `password123` | `/admin/laboratory.html` |
| **Radiologist** | `radiology` | `password123` | `/admin/radiology.html` |
| **Pharmacist** | `pharmacy` | `password123` | `/admin/pharmacy.html` |
| **Accountant** | `accountant` | `password123` | `/admin/billing.html` |
| **HR Manager** | `hr` | `password123` | `/admin/hr.html` |
| **Store Manager** | `store` | `password123` | `/admin/inventory.html` |
| **IT Officer** | `it` | `password123` | `/admin/settings.html` |
| **Patient** | `patient` | `password123` | `/patient/index.html` |

---

### 6. Demo Data Management (Export / Import / Reset)

At the top of every page, the blue **Demo Mode Bar** provides 1-click tools:
- **Export Data (JSON):** Downloads a full `.json` file containing all patient, doctor, appointment, bed, invoice, and laboratory records.
- **Import Data (JSON):** Restores or loads any valid JSON dataset into LocalStorage.
- **Reset Demo Data:** Re-seeds the system back to its original realistic Bangladeshi healthcare sample dataset.

