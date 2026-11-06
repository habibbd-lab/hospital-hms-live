/**
 * CarePoint Hospital Management System
 * Global Application Bootstrapper
 */

window.HMS = window.HMS || {};

HMS.App = {
  init: function() {
    console.log('CarePoint HMS Initializing...');
    HMS.Storage.init();
    HMS.I18n.init();
    HMS.Auth.init();
    HMS.UI.renderDemoBanner();

    // Re-apply localization whenever language is updated
    window.addEventListener('hms:lang_changed', () => {
      HMS.UI.renderDemoBanner();
    });

    // Close mobile sidebar when clicking outside
    document.addEventListener('click', (e) => {
      if (document.body.classList.contains('sidebar-open')) {
        const sidebar = document.querySelector('.hms-sidebar');
        const toggleBtn = document.querySelector('.sidebar-toggle-btn');
        if (sidebar && !sidebar.contains(e.target) && (!toggleBtn || !toggleBtn.contains(e.target))) {
          document.body.classList.remove('sidebar-open');
        }
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  HMS.App.init();
});

