/**
 * CarePoint Hospital Management System
 * Shared UI Renderers: Sidebars, Topbars, Modals, Toasts & Table Utilities
 */

window.HMS = window.HMS || {};

HMS.UI = {
  // 1. Top Demo Indicator Banner
  renderDemoBanner: function() {
    const isEn = HMS.I18n.currentLang === 'en';
    const bannerHTML = `
      <div class="demo-badge-bar no-print">
        <div class="container-fluid d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            <i class="bi bi-info-circle me-1"></i>
            <span>${isEn ? 'PROTOTYPE: Static Frontend HMS with LocalStorage Persistence' : 'প্রোটোটাইপ: স্ট্যাটিক ফ্রন্টএন্ড এইচএমএস (লোকালস্টোরেজ ডেটা)'}</span>
            <span class="badge bg-warning text-dark ms-2">Static Demo Only</span>
          </div>
          <div class="d-flex align-items-center gap-3">
            <button class="btn btn-sm btn-outline-light py-0 px-2" style="font-size:0.75rem" onclick="HMS.Storage.exportJSON()">
              <i class="bi bi-download me-1"></i>${isEn ? 'Export JSON' : 'এক্সপোর্ট ডেটা'}
            </button>
            <label class="btn btn-sm btn-outline-light py-0 px-2 mb-0" style="font-size:0.75rem; cursor:pointer;">
              <i class="bi bi-upload me-1"></i>${isEn ? 'Import JSON' : 'ইমপোর্ট ডেটা'}
              <input type="file" id="hms-import-file-input" style="display:none" accept=".json" onchange="HMS.UI.handleFileImport(event)">
            </label>
            <button class="btn btn-sm btn-danger py-0 px-2" style="font-size:0.75rem" onclick="HMS.UI.confirmResetData()">
              <i class="bi bi-arrow-counterclockwise me-1"></i>${isEn ? 'Reset Demo' : 'ডেটা রিসেট'}
            </button>
          </div>
        </div>
      </div>
    `;
    const container = document.getElementById('demo-banner-placeholder');
    if (container) container.innerHTML = bannerHTML;
  },

  handleFileImport: function(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      const res = HMS.Storage.importJSON(e.target.result);
      if (res.success) {
        HMS.UI.showToast('ডেমো ডেটা সফলভাবে ইমপোর্ট করা হয়েছে!', 'success');
        setTimeout(() => window.location.reload(), 1000);
      } else {
        alert('ডেটা ইমপোর্ট ব্যর্থ হয়েছে: ' + res.error);
      }
    };
    reader.readAsText(file);
  },

  confirmResetData: function() {
    if (confirm('আপনি কি সমস্ত ডেমো ডেটা রিসেট করে প্রাথমিক অবস্থায় ফিরিয়ে নিতে চান? এতে আপনার করা সকল পরিবর্তন মুছে যাবে।')) {
      HMS.Storage.resetToSeed();
      HMS.UI.showToast('ডেমো ডেটা সফলভাবে রিসেট করা হয়েছে!', 'success');
      setTimeout(() => window.location.reload(), 800);
    }
  },

  // 2. Admin Sidebar Renderer
  renderAdminSidebar: function(activeModule = 'dashboard') {
    const user = HMS.Auth.getCurrentUser();
    const isEn = HMS.I18n.currentLang === 'en';

    // Sidebar structure with all modules from PROJECT_DOCUMENTATION.md
    const navSections = [
      {
        heading: isEn ? 'MAIN' : 'প্রধান',
        items: [
          { id: 'dashboard', name: isEn ? 'Dashboard' : 'ড্যাশবোর্ড', icon: 'bi-grid-fill', url: 'index.html' }
        ]
      },
      {
        heading: isEn ? 'PATIENT CARE' : 'রোগী সেবা ও ক্লিনিকাল',
        items: [
          { id: 'patients', name: isEn ? 'Patient Management' : 'রোগী ব্যবস্থাপনা', icon: 'bi-people-fill', url: 'patients.html' },
          { id: 'appointments', name: isEn ? 'Appointment Queue' : 'অ্যাপয়েন্টমেন্ট', icon: 'bi-calendar-check-fill', url: 'appointments.html' },
          { id: 'opd', name: isEn ? 'OPD Management' : 'বহিঃবিভাগ (OPD)', icon: 'bi-clipboard2-pulse-fill', url: 'opd.html' },
          { id: 'ipd', name: isEn ? 'IPD Inpatient' : 'অন্তঃবিভাগ (IPD)', icon: 'bi-hospital-fill', url: 'ipd.html' },
          { id: 'emergency', name: isEn ? 'Emergency & Triage' : 'জরুরি বিভাগ ও ট্রায়াজ', icon: 'bi-exclamation-triangle-fill', url: 'emergency.html', badge: 'Triage' }
        ]
      },
      {
        heading: isEn ? 'MEDICAL STAFF' : 'মেডিকেল স্টাফ',
        items: [
          { id: 'doctors', name: isEn ? 'Doctor Management' : 'চিকিৎসক (ডাক্তার)', icon: 'bi-heart-pulse-fill', url: 'doctors.html' },
          { id: 'nursing', name: isEn ? 'Nursing Station' : 'নার্সিং স্টেশন', icon: 'bi-bandaid-fill', url: 'nursing.html' }
        ]
      },
      {
        heading: isEn ? 'CLINICAL SERVICES' : 'ক্লিনিকাল সার্ভিসেস',
        items: [
          { id: 'laboratory', name: isEn ? 'Laboratory (LIS)' : 'ল্যাবরেটরি (LIS)', icon: 'bi-eyedropper', url: 'laboratory.html' },
          { id: 'radiology', name: isEn ? 'Radiology & Imaging' : 'রেডিওলজি ও ইমেজিং', icon: 'bi-camera-reels-fill', url: 'radiology.html' },
          { id: 'pharmacy', name: isEn ? 'Pharmacy (POS & Rx)' : 'ফার্মেসি ব্যবস্থাপনা', icon: 'bi-capsule-pill', url: 'pharmacy.html' },
          { id: 'operation-theatre', name: isEn ? 'Operation Theatre (OT)' : 'অপারেশন থিয়েটার (OT)', icon: 'bi-scissors', url: 'operation-theatre.html' },
          { id: 'icu', name: isEn ? 'ICU / CCU Monitoring' : 'আইসিইউ / সিসিইউ', icon: 'bi-activity', url: 'icu.html' },
          { id: 'blood-bank', name: isEn ? 'Blood Bank Management' : 'ব্লাড ব্যাংক', icon: 'bi-droplet-fill', url: 'blood-bank.html' },
          { id: 'medical-records', name: isEn ? 'Medical Records (MRD)' : 'মেডিকেল রেকর্ডস (MRD)', icon: 'bi-file-earmark-medical-fill', url: 'medical-records.html' }
        ]
      },
      {
        heading: isEn ? 'HOSPITAL OPERATIONS' : 'হাসপাতাল অপারেশন',
        items: [
          { id: 'beds', name: isEn ? 'Bed & Ward Matrix' : 'বেড ও ওয়ার্ড ব্যবস্থাপনা', icon: 'bi-door-closed-fill', url: 'beds.html' },
          { id: 'ambulance', name: isEn ? 'Ambulance Services' : 'অ্যাম্বুলেন্স সার্ভিস', icon: 'bi-truck-front-fill', url: 'ambulance.html' },
          { id: 'additional-modules', name: isEn ? 'Auxiliary Services' : 'ডায়েট, লন্ড্রি ও নিরাপত্তা', icon: 'bi-boxes', url: 'additional-modules.html' }
        ]
      },
      {
        heading: isEn ? 'FINANCE & BILLING' : 'ফাইন্যান্স ও বিলিং',
        items: [
          { id: 'billing', name: isEn ? 'Billing & Accounts' : 'বিলিং ও অ্যাকাউন্টস', icon: 'bi-cash-coin', url: 'billing.html' },
          { id: 'insurance', name: isEn ? 'Health Insurance (TPA)' : 'স্বাস্থ্য বীমা (Insurance)', icon: 'bi-shield-check', url: 'insurance.html' }
        ]
      },
      {
        heading: isEn ? 'ADMINISTRATION' : 'প্রশাসন ও এইচআর',
        items: [
          { id: 'hr', name: isEn ? 'HR & Payroll' : 'এইচআর ও পেরোল', icon: 'bi-person-badge-fill', url: 'hr.html' },
          { id: 'inventory', name: isEn ? 'Inventory & Procurement' : 'ইনভেন্টরি ও প্রকিউরমেন্ট', icon: 'bi-box-seam-fill', url: 'inventory.html' }
        ]
      },
      {
        heading: isEn ? 'ANALYTICS & CMS' : 'রিপোর্ট ও ওয়েবসাইট',
        items: [
          { id: 'reports', name: isEn ? 'Reports & Analytics' : 'রিপোর্টস ও অ্যানালিটিক্স', icon: 'bi-bar-chart-line-fill', url: 'reports.html' },
          { id: 'cms', name: isEn ? 'Website CMS' : 'ওয়েবসাইট CMS', icon: 'bi-globe2', url: 'cms.html' },
          { id: 'notifications', name: isEn ? 'Notifications' : 'বিজ্ঞপ্তি কেন্দ্র', icon: 'bi-bell-fill', url: 'notifications.html' }
        ]
      },
      {
        heading: isEn ? 'SYSTEM' : 'সিস্টেম',
        items: [
          { id: 'settings', name: isEn ? 'Settings & Security' : 'সিস্টেম সেটিংস ও ভূমিকা', icon: 'bi-gear-fill', url: 'settings.html' }
        ]
      }
    ];

    let html = `
      <div class="sidebar-header">
        <a href="index.html" class="sidebar-brand">
          <div class="brand-logo-icon">
            <i class="bi bi-hospital"></i>
          </div>
          <div>
            <span>CarePoint</span>
            <small class="brand-subtext">HOSPITAL ERP</small>
          </div>
        </a>
        <button class="btn btn-sm btn-link text-white sidebar-toggle-btn d-lg-none" onclick="HMS.UI.toggleSidebar()">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
      <div class="sidebar-nav">
    `;

    navSections.forEach(sec => {
      // Filter items according to permissions
      const accessibleItems = sec.items.filter(item => HMS.Auth.canAccess(item.id));
      if (accessibleItems.length > 0) {
        html += `<div class="sidebar-heading">${sec.heading}</div>`;
        accessibleItems.forEach(item => {
          const isActive = activeModule === item.id ? 'active' : '';
          html += `
            <a href="${item.url}" class="sidebar-link ${isActive}">
              <i class="bi ${item.icon}"></i>
              <span>${item.name}</span>
              ${item.badge ? `<span class="sidebar-badge">${item.badge}</span>` : ''}
            </a>
          `;
        });
      }
    });

    html += `
        <div class="mt-4 pt-3 border-top border-secondary border-opacity-25 px-2">
          <a href="../index.html" class="btn btn-outline-light btn-sm w-100 mb-2">
            <i class="bi bi-arrow-left me-1"></i>${isEn ? 'Public Website' : 'পাবলিক ওয়েবসাইট'}
          </a>
          <a href="../patient/index.html" class="btn btn-hms-success btn-sm w-100">
            <i class="bi bi-person me-1"></i>${isEn ? 'Patient Portal' : 'পেশেন্ট পোর্টাল'}
          </a>
        </div>
      </div>
    `;

    const sidebarEl = document.getElementById('admin-sidebar-placeholder');
    if (sidebarEl) sidebarEl.innerHTML = html;
  },

  // 3. Admin Topbar Renderer with Role Switcher & Notifications
  renderAdminTopbar: function(title = 'Dashboard', breadcrumbs = []) {
    const user = HMS.Auth.getCurrentUser();
    const isEn = HMS.I18n.currentLang === 'en';
    const notifications = HMS.Storage.getCollection('notifications');
    const unreadCount = notifications.filter(n => n.unread).length;

    let breadcrumbsHTML = `
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0" style="font-size: 0.85rem;">
          <li class="breadcrumb-item"><a href="index.html">HMS</a></li>
    `;
    breadcrumbs.forEach((b, index) => {
      const isLast = index === breadcrumbs.length - 1;
      breadcrumbsHTML += isLast
        ? `<li class="breadcrumb-item active" aria-current="page">${b.title}</li>`
        : `<li class="breadcrumb-item"><a href="${b.url}">${b.title}</a></li>`;
    });
    breadcrumbsHTML += `</ol></nav>`;

    let rolesDropdown = '';
    HMS.CONFIG.ROLES.forEach(r => {
      const isSelected = user.role === r.id ? 'selected fw-bold text-primary' : '';
      rolesDropdown += `
        <li>
          <a class="dropdown-item ${isSelected} d-flex align-items-center gap-2" href="#" onclick="HMS.UI.switchRole('${r.id}')">
            <i class="bi ${r.icon}"></i>
            <span>${isEn ? r.name_en : r.name_bn}</span>
            ${user.role === r.id ? '<i class="bi bi-check ms-auto text-primary"></i>' : ''}
          </a>
        </li>
      `;
    });

    let notifListHTML = '';
    notifications.slice(0, 4).forEach(n => {
      notifListHTML += `
        <li class="p-2 border-bottom">
          <div class="fw-semibold small text-hms-navy">${n.title}</div>
          <div class="text-muted small">${n.desc}</div>
          <div class="text-end text-muted" style="font-size:0.7rem">${n.time}</div>
        </li>
      `;
    });

    const topbarHTML = `
      <div class="hms-topbar no-print">
        <div class="topbar-left">
          <button class="btn btn-light sidebar-toggle-btn me-2" onclick="HMS.UI.toggleSidebar()">
            <i class="bi bi-list fs-5"></i>
          </button>
          <div>
            <h5 class="mb-0 fw-bold text-hms-navy">${title}</h5>
            ${breadcrumbsHTML}
          </div>
        </div>
        <div class="topbar-right">
          <!-- Language Switcher -->
          <div class="btn-group btn-group-sm me-2">
            <button class="btn btn-outline-secondary lang-btn-bn ${!isEn ? 'active' : ''}" onclick="HMS.I18n.setLanguage('bn')">বাংলা</button>
            <button class="btn btn-outline-secondary lang-btn-en ${isEn ? 'active' : ''}" onclick="HMS.I18n.setLanguage('en')">English</button>
          </div>

          <!-- Notification Dropdown -->
          <div class="dropdown me-2">
            <button class="btn btn-light position-relative rounded-circle p-2" type="button" data-bs-toggle="dropdown">
              <i class="bi bi-bell fs-5 text-secondary"></i>
              ${unreadCount > 0 ? `<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${unreadCount}</span>` : ''}
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow" style="width: 320px;">
              <li class="dropdown-header fw-bold text-hms-navy d-flex justify-content-between align-items-center">
                <span>${isEn ? 'Notifications' : 'বিজ্ঞপ্তিসমূহ'}</span>
                <span class="badge bg-primary">${unreadCount} New</span>
              </li>
              ${notifListHTML}
              <li class="text-center pt-2">
                <a href="notifications.html" class="small text-decoration-none">${isEn ? 'View All Notifications' : 'সকল বিজ্ঞপ্তি দেখুন'}</a>
              </li>
            </ul>
          </div>

          <!-- Role Switcher Dropdown (Essential Feature for Demo) -->
          <div class="dropdown me-2">
            <button class="btn btn-light border dropdown-toggle role-badge-pill" type="button" data-bs-toggle="dropdown">
              <i class="bi bi-person-fill-gear"></i>
              <span>${isEn ? (HMS.CONFIG.ROLES.find(r => r.id === user.role)?.name_en || user.role) : (HMS.CONFIG.ROLES.find(r => r.id === user.role)?.name_bn || user.role)}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow" style="max-height: 420px; overflow-y: auto;">
              <li class="dropdown-header text-uppercase small">${isEn ? 'Switch Demo Role' : 'ডেমো ভূমিকা পরিবর্তন করুন'}</li>
              ${rolesDropdown}
            </ul>
          </div>

          <!-- User Profile Avatar & Menu -->
          <div class="dropdown">
            <button class="btn p-0 border-0 d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown">
              <div class="user-avatar-sm">
                ${user.name ? user.name.charAt(0) : 'U'}
              </div>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow">
              <li class="p-3 border-bottom text-center">
                <div class="fw-bold">${user.name}</div>
                <div class="text-muted small">${user.dept || 'CarePoint Hospital'}</div>
                <span class="badge bg-info text-dark mt-1">${user.role}</span>
              </li>
              <li><a class="dropdown-item" href="settings.html"><i class="bi bi-gear me-2"></i>${isEn ? 'Settings' : 'সেটিংস'}</a></li>
              <li><a class="dropdown-item text-danger" href="../login.html" onclick="HMS.Auth.logout()"><i class="bi bi-box-arrow-right me-2"></i>${isEn ? 'Logout' : 'লগআউট'}</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;

    const topbarEl = document.getElementById('admin-topbar-placeholder');
    if (topbarEl) topbarEl.innerHTML = topbarHTML;
  },

  // 4. Patient Portal Sidebar
  renderPatientSidebar: function(activeModule = 'dashboard') {
    const isEn = HMS.I18n.currentLang === 'en';
    const items = [
      { id: 'dashboard', name: isEn ? 'My Dashboard' : 'আমার ড্যাশবোর্ড', icon: 'bi-speedometer2', url: 'index.html' },
      { id: 'profile', name: isEn ? 'My Profile' : 'আমার প্রোফাইল', icon: 'bi-person-badge', url: 'profile.html' },
      { id: 'appointments', name: isEn ? 'My Appointments' : 'আমার অ্যাপয়েন্টমেন্ট', icon: 'bi-calendar-event', url: 'appointments.html' },
      { id: 'prescriptions', name: isEn ? 'My Prescriptions' : 'আমার প্রেসক্রিপশন', icon: 'bi-file-earmark-medical', url: 'prescriptions.html' },
      { id: 'reports', name: isEn ? 'Lab & Radiology Reports' : 'ল্যাব ও রেডিওলজি রিপোর্ট', icon: 'bi-clipboard-check', url: 'reports.html' },
      { id: 'admissions', name: isEn ? 'Admissions & Discharge' : 'ভর্তি ও ছাড়পত্র ইতিহাস', icon: 'bi-hospital', url: 'admissions.html' },
      { id: 'billing', name: isEn ? 'Billing & Online Pay' : 'বিল ও অনলাইন পেমেন্ট', icon: 'bi-credit-card-2-front', url: 'billing.html' }
    ];

    let html = `
      <div class="sidebar-header">
        <a href="index.html" class="sidebar-brand">
          <div class="brand-logo-icon">
            <i class="bi bi-person-heart"></i>
          </div>
          <div>
            <span>Patient Portal</span>
            <small class="brand-subtext">CarePoint Health</small>
          </div>
        </a>
      </div>
      <div class="sidebar-nav">
        <div class="sidebar-heading">${isEn ? 'PATIENT SERVICES' : 'রোগী সেবা'}</div>
    `;

    items.forEach(item => {
      const isActive = activeModule === item.id ? 'active' : '';
      html += `
        <a href="${item.url}" class="sidebar-link ${isActive}">
          <i class="bi ${item.icon}"></i>
          <span>${item.name}</span>
        </a>
      `;
    });

    html += `
        <div class="mt-4 pt-3 border-top border-secondary border-opacity-25 px-2">
          <a href="../index.html" class="btn btn-outline-light btn-sm w-100 mb-2">
            <i class="bi bi-arrow-left me-1"></i>${isEn ? 'Public Website' : 'ওয়েবসাইট হোম'}
          </a>
          <a href="../admin/index.html" class="btn btn-hms-primary btn-sm w-100">
            <i class="bi bi-shield-lock me-1"></i>${isEn ? 'Admin View' : 'অ্যাডমিন ভিউ'}
          </a>
        </div>
      </div>
    `;

    const sidebarEl = document.getElementById('patient-sidebar-placeholder');
    if (sidebarEl) sidebarEl.innerHTML = html;
  },

  // 5. Patient Portal Topbar
  renderPatientTopbar: function(title = 'Patient Portal') {
    const isEn = HMS.I18n.currentLang === 'en';
    const patientUser = HMS.Storage.getById('patients', 'CPH-2026-0001') || { name_bn: 'মো. রফিকুল ইসলাম', uhid: 'CPH-2026-0001' };

    const topbarHTML = `
      <div class="hms-topbar no-print">
        <div class="topbar-left">
          <button class="btn btn-light sidebar-toggle-btn me-2" onclick="HMS.UI.toggleSidebar()">
            <i class="bi bi-list fs-5"></i>
          </button>
          <div>
            <h5 class="mb-0 fw-bold text-hms-navy">${title}</h5>
            <small class="text-muted">UHID: <span class="badge bg-primary">${patientUser.uhid}</span></small>
          </div>
        </div>
        <div class="topbar-right">
          <div class="btn-group btn-group-sm me-2">
            <button class="btn btn-outline-secondary lang-btn-bn ${!isEn ? 'active' : ''}" onclick="HMS.I18n.setLanguage('bn')">বাংলা</button>
            <button class="btn btn-outline-secondary lang-btn-en ${isEn ? 'active' : ''}" onclick="HMS.I18n.setLanguage('en')">English</button>
          </div>
          <div class="d-flex align-items-center gap-2">
            <div class="user-avatar-sm bg-success">
              <i class="bi bi-person"></i>
            </div>
            <div class="d-none d-sm-block">
              <div class="fw-bold small text-hms-navy">${patientUser.name_bn || patientUser.name_en}</div>
              <div class="text-muted" style="font-size:0.75rem">${patientUser.phone || ''}</div>
            </div>
          </div>
        </div>
      </div>
    `;
    const topbarEl = document.getElementById('patient-topbar-placeholder');
    if (topbarEl) topbarEl.innerHTML = topbarHTML;
  },

  toggleSidebar: function() {
    document.body.classList.toggle('sidebar-open');
  },

  switchRole: function(roleId) {
    HMS.Auth.loginAs(roleId);
    HMS.UI.showToast(`ভূমিকা পরিবর্তিত হয়েছে: ${roleId}`, 'success');
    setTimeout(() => window.location.reload(), 400);
  },

  // 6. Toast Notification Helper
  showToast: function(message, type = 'info') {
    let container = document.getElementById('hms-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'hms-toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `hms-toast ${type}`;
    const icon = type === 'success' ? 'bi-check-circle-fill text-success' : (type === 'danger' ? 'bi-x-circle-fill text-danger' : 'bi-info-circle-fill text-primary');
    toast.innerHTML = `
      <i class="bi ${icon} fs-5"></i>
      <div class="flex-grow-1" style="font-size:0.9rem;">${message}</div>
      <button type="button" class="btn-close btn-sm" onclick="this.parentElement.remove()"></button>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  },

  // 7. Universal CSV Exporter
  exportTableToCSV: function(tableId, filename = 'export.csv') {
    const table = document.getElementById(tableId);
    if (!table) {
      alert('Table not found for export');
      return;
    }
    let csv = [];
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
      const cols = row.querySelectorAll('th, td');
      let rowData = [];
      cols.forEach(col => {
        // Skip action buttons column if tagged with no-export
        if (col.classList.contains('no-export')) return;
        let text = col.innerText.replace(/"/g, '""').trim();
        rowData.push(`"${text}"`);
      });
      if (rowData.length > 0) csv.push(rowData.join(','));
    });

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + csv.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
};
