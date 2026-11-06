/**
 * CarePoint Hospital Management System
 * Public Website Dynamic Logic, Doctor Filters, Booking & UI
 */

window.HMS = window.HMS || {};

HMS.Website = {
  initNavbarAndFooter: function(activePage = 'home') {
    const isEn = HMS.I18n.currentLang === 'en';
    const topBarEl = document.getElementById('public-topbar-placeholder');
    if (topBarEl) {
      topBarEl.innerHTML = `
        <div class="top-emergency-bar no-print">
          <div class="container d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div class="d-flex align-items-center gap-3">
              <span><i class="bi bi-telephone-fill me-1 text-danger"></i>${isEn ? '24/7 Emergency Hotline:' : '২৪/৭ জরুরি হটলাইন:'} <a href="tel:10678" class="emergency-hotline">10678</a></span>
              <span class="d-none d-md-inline"><i class="bi bi-geo-alt-fill me-1 text-info"></i>${isEn ? 'Dhanmondi, Dhaka' : 'ধানমন্ডি, ঢাকা'}</span>
              <span class="d-none d-lg-inline"><i class="bi bi-envelope-fill me-1"></i>info@carepointhospital.bd</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <div class="btn-group btn-group-sm">
                <button class="btn btn-outline-light py-0 px-2 lang-btn-bn ${!isEn ? 'active' : ''}" onclick="HMS.I18n.setLanguage('bn')">বাংলা</button>
                <button class="btn btn-outline-light py-0 px-2 lang-btn-en ${isEn ? 'active' : ''}" onclick="HMS.I18n.setLanguage('en')">English</button>
              </div>
              <a href="login.html" class="btn btn-sm btn-outline-light py-0 px-2">
                <i class="bi bi-box-arrow-in-right me-1"></i>${isEn ? 'Portal Login' : 'লগইন'}
              </a>
            </div>
          </div>
        </div>
      `;
    }

    const navEl = document.getElementById('public-navbar-placeholder');
    if (navEl) {
      navEl.innerHTML = `
        <nav class="navbar navbar-expand-xl site-navbar">
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <div class="brand-logo-icon">
                <i class="bi bi-hospital"></i>
              </div>
              <div>
                <span class="d-block">${isEn ? 'CarePoint Hospital' : 'কেয়ারপয়েন্ট হাসপাতাল'}</span>
                <span class="brand-subtext">${isEn ? 'Multispecialty Care & Research' : 'মাল্টিস্পেশালিটি কেয়ার'}</span>
              </div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siteNav">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="siteNav">
              <ul class="navbar-nav ms-auto mb-2 mb-xl-0 align-items-xl-center">
                <li class="nav-item"><a class="nav-link ${activePage === 'home' ? 'active' : ''}" href="index.html">${isEn ? 'Home' : 'হোম'}</a></li>
                <li class="nav-item"><a class="nav-link ${activePage === 'about' ? 'active' : ''}" href="about.html">${isEn ? 'About Us' : 'আমাদের সম্পর্কে'}</a></li>
                <li class="nav-item"><a class="nav-link ${activePage === 'departments' ? 'active' : ''}" href="departments.html">${isEn ? 'Departments' : 'বিভাগসমূহ'}</a></li>
                <li class="nav-item"><a class="nav-link ${activePage === 'doctors' ? 'active' : ''}" href="doctors.html">${isEn ? 'Doctors' : 'ডাক্তারগণ'}</a></li>
                <li class="nav-item"><a class="nav-link ${activePage === 'services' ? 'active' : ''}" href="services.html">${isEn ? 'Services' : 'সেবাসমূহ'}</a></li>
                <li class="nav-item"><a class="nav-link ${activePage === 'packages' ? 'active' : ''}" href="packages.html">${isEn ? 'Health Packages' : 'প্যাকেজ'}</a></li>
                <li class="nav-item"><a class="nav-link ${activePage === 'facilities' ? 'active' : ''}" href="facilities.html">${isEn ? 'Facilities' : 'সুযোগ-সুবিধা'}</a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">${isEn ? 'More' : 'আরও'}</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="health-library.html">${isEn ? 'Health Library' : 'স্বাস্থ্য কথিকা'}</a></li>
                    <li><a class="dropdown-item" href="news-events.html">${isEn ? 'News & Events' : 'সংবাদ ও ইভেন্ট'}</a></li>
                    <li><a class="dropdown-item" href="careers.html">${isEn ? 'Careers' : 'ক্যারিয়ার'}</a></li>
                    <li><a class="dropdown-item" href="contact.html">${isEn ? 'Contact & Feedback' : 'যোগাযোগ ও মতামত'}</a></li>
                  </ul>
                </li>
                <li class="nav-item ms-xl-2 mt-2 mt-xl-0">
                  <a class="btn btn-hms-primary btn-sm d-flex align-items-center gap-1" href="appointment.html">
                    <i class="bi bi-calendar-check"></i>
                    <span>${isEn ? 'Book Appointment' : 'সিরিয়াল নিন'}</span>
                  </a>
                </li>
                <li class="nav-item ms-xl-2 mt-2 mt-xl-0">
                  <a class="btn btn-hms-success btn-sm d-flex align-items-center gap-1" href="admin/index.html">
                    <i class="bi bi-speedometer2"></i>
                    <span>${isEn ? 'Admin ERP' : 'অ্যাডমিন ERP'}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `;
    }

    const footerEl = document.getElementById('public-footer-placeholder');
    if (footerEl) {
      footerEl.innerHTML = `
        <footer class="site-footer">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-4 col-md-6">
                <div class="d-flex align-items-center gap-2 mb-3">
                  <div class="brand-logo-icon">
                    <i class="bi bi-hospital"></i>
                  </div>
                  <h4 class="text-white mb-0">CarePoint Hospital</h4>
                </div>
                <p class="text-muted small">
                  ${isEn 
                    ? 'A premier multispecialty tertiary care hospital & research institute dedicated to international standards of healthcare, clinical excellence and patient safety.'
                    : 'আন্তর্জাতিক মানের আধুনিক চিকিৎসা প্রযুক্তি, বিশিষ্ট বিশেষজ্ঞ চিকিৎসক দল এবং সার্বক্ষণিক জরুরি সেবায় প্রতিজ্ঞাবদ্ধ দেশের শীর্ষস্থানীয় টারশিয়ারি কেয়ার হাসপাতাল।'}
                </p>
                <div class="text-white small mb-1">
                  <i class="bi bi-geo-alt me-2 text-info"></i>${isEn ? 'Plot 18, Road 7, Dhanmondi, Dhaka 1205' : 'প্লট ১৮, রোড ৭, ধানমন্ডি, ঢাকা ১২০৫'}
                </div>
                <div class="text-white small mb-1">
                  <i class="bi bi-telephone me-2 text-danger"></i>${isEn ? 'Hotline:' : 'হটলাইন:'} 10678 | +880 9612-888999
                </div>
                <div class="text-white small">
                  <i class="bi bi-envelope me-2 text-success"></i>info@carepointhospital.bd
                </div>
              </div>
              <div class="col-lg-2 col-md-6">
                <h5>${isEn ? 'Quick Links' : 'দ্রুত লিঙ্ক'}</h5>
                <ul class="footer-links">
                  <li><a href="about.html">${isEn ? 'About Hospital' : 'আমাদের সম্পর্কে'}</a></li>
                  <li><a href="departments.html">${isEn ? 'Departments' : 'বিভাগসমূহ'}</a></li>
                  <li><a href="doctors.html">${isEn ? 'Specialist Doctors' : 'বিশেষজ্ঞ চিকিৎসক'}</a></li>
                  <li><a href="packages.html">${isEn ? 'Health Packages' : 'স্বাস্থ্য প্যাকেজ'}</a></li>
                  <li><a href="facilities.html">${isEn ? 'ICU & Emergency' : 'জরুরি সেবা ও আইসিইউ'}</a></li>
                  <li><a href="careers.html">${isEn ? 'Job Careers' : 'ক্যারিয়ার'}</a></li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6">
                <h5>${isEn ? 'Clinical Services' : 'ক্লিনিকাল সার্ভিসেস'}</h5>
                <ul class="footer-links">
                  <li><a href="services.html">${isEn ? 'Cardiology & Cath Lab' : 'কার্ডিওলজি ও ক্যাথল্যাব'}</a></li>
                  <li><a href="services.html">${isEn ? 'Neurology & Stroke' : 'নিউরোমেডিসিন ও স্ট্রোক ইউনিট'}</a></li>
                  <li><a href="services.html">${isEn ? 'Orthopedics & Trauma' : 'অর্থোপেডিক ও ট্রমা সেন্টার'}</a></li>
                  <li><a href="services.html">${isEn ? 'Nephrology & Dialysis' : 'নেফ্রোলজি ও ডায়ালাইসিস'}</a></li>
                  <li><a href="services.html">${isEn ? 'Gynecology & Neonatal' : 'প্রসূতি ও নবজাতক পরিচর্যা'}</a></li>
                  <li><a href="facilities.html">${isEn ? '24/7 Ambulance Fleet' : 'সার্বক্ষণিক অ্যাম্বুলেন্স সার্ভিস'}</a></li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6">
                <h5>${isEn ? 'Patient Support & Hours' : 'রোগী সহায়তা ও সেবা'}</h5>
                <p class="small text-muted mb-2">
                  ${isEn ? 'Emergency, ICU, Lab & Pharmacy are open 24 Hours, 7 Days a week.' : 'জরুরি বিভাগ, আইসিইউ, প্যাথলজি ল্যাব ও ফার্মেসি ২৪ ঘণ্টা ও সপ্তাহে ৭ দিন উন্মুক্ত।'}
                </p>
                <div class="p-3 bg-dark bg-opacity-50 rounded border border-secondary border-opacity-25 mb-3">
                  <div class="fw-bold text-danger mb-1"><i class="bi bi-bell-fill me-1"></i>${isEn ? 'Cardiac & Trauma Emergency' : 'জরুরি অ্যাম্বুলেন্স ও ট্রমা হেল্পলাইন'}</div>
                  <div class="fs-5 fw-bold text-white">+880 1711-000999</div>
                </div>
                <div class="d-flex gap-2">
                  <a href="#" class="btn btn-outline-light btn-sm rounded-circle"><i class="bi bi-facebook"></i></a>
                  <a href="#" class="btn btn-outline-light btn-sm rounded-circle"><i class="bi bi-youtube"></i></a>
                  <a href="#" class="btn btn-outline-light btn-sm rounded-circle"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div class="footer-bottom d-flex justify-content-between align-items-center flex-wrap gap-2 text-muted">
              <div>
                © 2026 CarePoint Multispecialty Hospital & Research Center. All rights reserved.
              </div>
              <div class="d-flex gap-3">
                <a href="contact.html" class="text-muted">${isEn ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}</a>
                <a href="contact.html" class="text-muted">${isEn ? 'Terms & Conditions' : 'শর্তাবলী'}</a>
                <a href="admin/index.html" class="text-muted">${isEn ? 'Admin Access' : 'অ্যাডমিন এক্সেস'}</a>
              </div>
            </div>
          </div>
        </footer>
      `;
    }
  }
};

