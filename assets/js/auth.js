/**
 * CarePoint Hospital Management System
 * Role-Based Demo Experience & Authentication Engine (Frontend Simulation)
 */

window.HMS = window.HMS || {};

HMS.Auth = {
  currentUser: null,

  init: function() {
    const raw = localStorage.getItem(HMS.CONFIG.STORAGE_KEYS.AUTH);
    if (raw) {
      try {
        this.currentUser = JSON.parse(raw);
      } catch (e) {
        this.currentUser = null;
      }
    }
    if (!this.currentUser) {
      // Default to Super Administrator for comprehensive demo review
      this.loginAs('super_admin');
    }
    return this.currentUser;
  },

  getCurrentUser: function() {
    if (!this.currentUser) this.init();
    return this.currentUser;
  },

  loginAs: function(roleId) {
    const users = HMS.Storage.getCollection('users');
    let user = users.find(u => u.role === roleId);
    if (!user) {
      // Fallback
      const roleDef = HMS.CONFIG.ROLES.find(r => r.id === roleId) || HMS.CONFIG.ROLES[0];
      user = {
        id: 'USR-DEMO',
        username: roleDef.id,
        role: roleDef.id,
        name: roleDef.name_bn,
        email: `${roleDef.id}@carepoint.bd`,
        dept: 'General'
      };
    }
    this.currentUser = user;
    localStorage.setItem(HMS.CONFIG.STORAGE_KEYS.AUTH, JSON.stringify(this.currentUser));
    window.dispatchEvent(new CustomEvent('hms:auth_changed', { detail: { user: this.currentUser } }));
    return this.currentUser;
  },

  logout: function() {
    localStorage.removeItem(HMS.CONFIG.STORAGE_KEYS.AUTH);
    this.currentUser = null;
    window.location.href = '../login.html';
  },

  // Role-based visibility rules
  getAccessibleModules: function(roleId) {
    switch (roleId) {
      case 'super_admin':
      case 'hospital_admin':
        return ['all'];

      case 'receptionist':
        return ['dashboard', 'patients', 'appointments', 'opd', 'billing', 'beds', 'ambulance'];

      case 'doctor':
        return ['dashboard', 'patients', 'appointments', 'opd', 'ipd', 'ot', 'mrd', 'reports'];

      case 'nurse':
        return ['dashboard', 'patients', 'ipd', 'nursing', 'beds', 'icu', 'emergency'];

      case 'lab_technician':
        return ['dashboard', 'lab', 'reports'];

      case 'radiologist':
        return ['dashboard', 'radiology', 'reports'];

      case 'pharmacist':
        return ['dashboard', 'pharmacy', 'billing', 'inventory', 'reports'];

      case 'accountant':
        return ['dashboard', 'billing', 'insurance', 'reports'];

      case 'hr_manager':
        return ['dashboard', 'hr', 'reports'];

      case 'store_manager':
        return ['dashboard', 'inventory', 'reports'];

      case 'it_officer':
        return ['dashboard', 'settings', 'notifications', 'reports', 'additional'];

      case 'patient':
        return ['patient_portal'];

      default:
        return ['dashboard'];
    }
  },

  canAccess: function(moduleKey) {
    if (!this.currentUser) this.init();
    const modules = this.getAccessibleModules(this.currentUser.role);
    if (modules.includes('all')) return true;
    return modules.includes(moduleKey);
  }
};
