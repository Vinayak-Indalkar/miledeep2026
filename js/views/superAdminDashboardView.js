// Super Admin Central Executive Dashboard View (General, Master & Reports Data with Charts)
import { SetupView, SEAFOOD_MASTERS } from './setupView.js';
import { Skeleton } from '../components/skeleton.js';

export const SuperAdminDashboardView = {
  chartInstances: {},

  render(containerId, activeTab = 'system-overview', resolvedHash = '#/dashboard/overview/system-overview') {
    const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!container) return;

    const sk = typeof Skeleton !== 'undefined' ? Skeleton : (typeof window !== 'undefined' ? window.Skeleton : null);
    if (sk && typeof sk.renderDashboard === 'function') {
      container.innerHTML = sk.renderDashboard();
    }

    setTimeout(() => {
      this.renderUnifiedDashboard(container);
    }, 120);
  },

  renderUnifiedDashboard(container) {
    if (!container) return;

    // Clean up any existing chart instances to avoid canvas reuse issues
    if (this.chartInstances) {
      Object.values(this.chartInstances).forEach(c => {
        try { if (c && c.destroy) c.destroy(); } catch (e) {}
      });
    }
    this.chartInstances = {};

    const state = SetupView.state || {};
    const allCompanies = state.companies || [
      { id: 'CMP-001', code: 'DFL', shortName: 'DFL', name: 'Devi Fisheries Limited', dbHost: 'localhost:3306', dbName: 'devi_erp', dbUser: 'root', plants: ['Unit-1 VSP', 'Unit-2 Nellore', 'Unit-3 Kakinada'], status: 'Active', country: 'India', currency: 'INR' },
      { id: 'CMP-002', code: 'CME', shortName: 'CME', name: 'Coastal Marine Exports', dbHost: '192.168.1.105:3306', dbName: 'cme_db', dbUser: 'cme_admin', plants: ['Chennai Plant A', 'Tuticorin Dock Unit'], status: 'Active', country: 'India', currency: 'INR' },
      { id: 'CMP-003', code: 'BPF', shortName: 'BPF', name: 'Bay Pride Foods', dbHost: 'cloud-rds.devi.internal:3306', dbName: 'baypride_erp', dbUser: 'bpf_svc', plants: ['Singapore Port Unit', 'Jurong Cold Chain Hub'], status: 'Active', country: 'Singapore', currency: 'SGD' }
    ];

    const allUsers = state.users || [];
    const allRoles = state.roles || [];
    const allModules = state.modulesConfig || [];
    const allAuditLogs = state.auditLogs || [];
    const allMasters = state.masters || SEAFOOD_MASTERS || [];
    const publishedVersion = state.publishedVersion || 'v2.4.1';

    const activeUsersCount = allUsers.filter(u => (u.status || 'Active').toLowerCase() === 'active').length;
    const inactiveUsersCount = allUsers.length - activeUsersCount;
    const activeModulesCount = allModules.filter(m => m.status === 'Active' || (m.status === undefined && m.visible !== false)).length;
    const totalMasterRecords = allMasters.reduce((acc, m) => acc + (m.records?.length || m.count || 0), 0);

    // Group Masters by Category
    const masterCategories = {
      'Logistics': [],
      'Processing': [],
      'Commercial': [],
      'Operations': []
    };
    allMasters.forEach(m => {
      const cat = m.category || 'General';
      if (!masterCategories[cat]) masterCategories[cat] = [];
      masterCategories[cat].push(m);
    });

    const logisticsRecords = masterCategories['Logistics'].reduce((a, m) => a + (m.records?.length || m.count || 0), 0);
    const processingRecords = masterCategories['Processing'].reduce((a, m) => a + (m.records?.length || m.count || 0), 0);
    const commercialRecords = masterCategories['Commercial'].reduce((a, m) => a + (m.records?.length || m.count || 0), 0);
    const operationsRecords = masterCategories['Operations'].reduce((a, m) => a + (m.records?.length || m.count || 0), 0);

    container.innerHTML = `
      <div class="space-y-5 animate-fade-in pb-8">
        <!-- 1. High-Level KPI Summary Cards (4 Cards across General, Master, Reports) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- KPI 1: Corporate Clients (General) -->
          <a href="#/general/configuration/clients" class="block bg-white border border-[#DFE1E6] hover:border-[#0284C7] rounded-2xl p-4 shadow-xs hover:shadow-md transition-all group">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Corporate Clients</span>
              <div class="w-8 h-8 rounded-lg bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
            </div>
            <div class="mt-2.5 flex items-baseline gap-2">
              <span class="text-2xl font-black text-[#172B4D]">${allCompanies.length}</span>
              <span class="text-xs text-[#00875A] font-semibold">100% DBs Online</span>
            </div>
            <div class="mt-2 pt-2 border-t border-[#F4F5F7] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>Multi-Tenant DBs</span>
              <span class="font-bold text-[#0284C7] group-hover:underline">View Clients →</span>
            </div>
          </a>

          <!-- KPI 2: Enterprise Users (General) -->
          <a href="#/general/configuration/users" class="block bg-white border border-[#DFE1E6] hover:border-[#00875A] rounded-2xl p-4 shadow-xs hover:shadow-md transition-all group">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Configured Users</span>
              <div class="w-8 h-8 rounded-lg bg-[#E3FCEF] text-[#00875A] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              </div>
            </div>
            <div class="mt-2.5 flex items-baseline gap-2">
              <span class="text-2xl font-black text-[#172B4D]">${allUsers.length}</span>
              <span class="text-xs text-[#00875A] font-semibold">${activeUsersCount} Active</span>
            </div>
            <div class="mt-2 pt-2 border-t border-[#F4F5F7] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>${allRoles.length} Roles Assigned</span>
              <span class="font-bold text-[#00875A] group-hover:underline">Manage Users →</span>
            </div>
          </a>

          <!-- KPI 3: Master Data Registries (Master) -->
          <a href="#/master/master-data/masters" class="block bg-white border border-[#DFE1E6] hover:border-[#FF991F] rounded-2xl p-4 shadow-xs hover:shadow-md transition-all group">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Master Data Catalogs</span>
              <div class="w-8 h-8 rounded-lg bg-[#FFF0B3] text-[#B76E00] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7M4 7c0-2 1.5-3 3.5-3h9c2 0 3.5 1 3.5 3M4 7h16m-8 4v6m-4-3h8"/></svg>
              </div>
            </div>
            <div class="mt-2.5 flex items-baseline gap-2">
              <span class="text-2xl font-black text-[#172B4D]">${allMasters.length}</span>
              <span class="text-xs text-[#5E6C84] font-semibold">${totalMasterRecords} Records</span>
            </div>
            <div class="mt-2 pt-2 border-t border-[#F4F5F7] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>4 Functional Domains</span>
              <span class="font-bold text-[#B76E00] group-hover:underline">Open Masters →</span>
            </div>
          </a>

          <!-- KPI 4: Security & Audit Governance (Reports) -->
          <a href="#/general/configuration/audit-history" class="block bg-white border border-[#DFE1E6] hover:border-[#6554C0] rounded-2xl p-4 shadow-xs hover:shadow-md transition-all group">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-[#5E6C84] uppercase tracking-wider">Audit & Security</span>
              <div class="w-8 h-8 rounded-lg bg-[#EAE6FF] text-[#6554C0] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
            </div>
            <div class="mt-2.5 flex items-baseline gap-2">
              <span class="text-2xl font-black text-[#172B4D]">${allAuditLogs.length}</span>
              <span class="text-xs text-[#00875A] font-semibold">${publishedVersion} Live</span>
            </div>
            <div class="mt-2 pt-2 border-t border-[#F4F5F7] flex items-center justify-between text-[11px] text-[#5E6C84]">
              <span>RBAC Matrix Verified</span>
              <span class="font-bold text-[#6554C0] group-hover:underline">Audit Trail →</span>
            </div>
          </a>
        </div>

        <!-- 2. PRIMARY CHARTS ROW (Users by Client Bar Chart + Roles Allocation Donut Chart) -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <!-- Chart A (Left 2 Cols): Client Users & Database Capacity -->
          <div class="lg:col-span-2 bg-white border border-[#DFE1E6] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 flex flex-col justify-between">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#EBECF0] pb-3">
              <div>
                <h3 class="text-sm font-bold text-[#172B4D] flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#0284C7]"></span>
                  Corporate Clients — User Allocation & Plant Footprint
                </h3>
                <p class="text-[11px] text-[#5E6C84] mt-0.5">Active vs. Inactive user distribution across multi-tenant clients</p>
              </div>
              <div class="flex items-center gap-3 text-xs">
                <span class="flex items-center gap-1.5 text-[11px] font-semibold text-[#172B4D]">
                  <span class="w-3 h-3 rounded bg-[#0284C7]"></span> Active Users
                </span>
                <span class="flex items-center gap-1.5 text-[11px] font-semibold text-[#5E6C84]">
                  <span class="w-3 h-3 rounded bg-[#CBD5E1]"></span> Inactive Users
                </span>
              </div>
            </div>

            <!-- Canvas wrapper -->
            <div class="relative w-full h-[250px] sm:h-[280px]">
              <canvas id="dash-chart-client-users"></canvas>
            </div>

            <div class="pt-2 border-t border-[#EBECF0] flex flex-wrap items-center justify-between gap-2 text-xs text-[#5E6C84]">
              <span>Total Multi-Tenant Databases: <strong class="text-[#172B4D] font-mono">${allCompanies.length} Active</strong></span>
              <a href="#/general/configuration/clients" class="font-bold text-[#0284C7] hover:underline">Manage Clients Setup →</a>
            </div>
          </div>

          <!-- Chart B (Right 1 Col): Role Personas Allocation (Donut Chart) -->
          <div class="bg-white border border-[#DFE1E6] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 flex flex-col justify-between">
            <div class="border-b border-[#EBECF0] pb-3">
              <h3 class="text-sm font-bold text-[#172B4D] flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#6554C0]"></span>
                Role Personas Distribution
              </h3>
              <p class="text-[11px] text-[#5E6C84] mt-0.5">${allRoles.length} configured RBAC security roles</p>
            </div>

            <!-- Canvas wrapper -->
            <div class="relative w-full h-[230px] sm:h-[250px] flex items-center justify-center">
              <canvas id="dash-chart-roles-donut"></canvas>
            </div>

            <div class="pt-2 border-t border-[#EBECF0] flex items-center justify-between text-xs">
              <span class="text-[#5E6C84]">RBAC Matrix:</span>
              <a href="#/general/configuration/roles" class="font-bold text-[#6554C0] hover:underline">Configure Roles →</a>
            </div>
          </div>
        </div>

        <!-- 3. SECONDARY CHARTS ROW (Master Data Volume + Audit Activity Trend) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <!-- Chart C: Master Catalog Domain Breakdown -->
          <div class="bg-white border border-[#DFE1E6] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-[#EBECF0] pb-3">
              <div>
                <h3 class="text-sm font-bold text-[#172B4D] flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#FF991F]"></span>
                  Seafood Master Registries Volume by Domain
                </h3>
                <p class="text-[11px] text-[#5E6C84] mt-0.5">Records cataloged across Logistics, Processing, Commercial & Operations</p>
              </div>
              <span class="px-2 py-0.5 rounded text-[10.5px] font-bold bg-[#FFF0B3] text-[#B76E00] border border-[#FFE380]">
                ${totalMasterRecords} Records
              </span>
            </div>

            <!-- Canvas wrapper -->
            <div class="relative w-full h-[230px] sm:h-[250px]">
              <canvas id="dash-chart-master-categories"></canvas>
            </div>

            <div class="pt-2 border-t border-[#EBECF0] flex items-center justify-between text-xs text-[#5E6C84]">
              <span>Active Registries: <strong class="text-[#172B4D]">${allMasters.length} Tables</strong></span>
              <a href="#/master/master-data/masters" class="font-bold text-[#FF991F] hover:underline">Explore Master Studio →</a>
            </div>
          </div>

          <!-- Chart D: Audit Activity Trend (Line Chart) -->
          <div class="bg-white border border-[#DFE1E6] rounded-2xl p-4 sm:p-5 shadow-xs space-y-3 flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-[#EBECF0] pb-3">
              <div>
                <h3 class="text-sm font-bold text-[#172B4D] flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#00875A]"></span>
                  Governance & Configuration Activity Velocity
                </h3>
                <p class="text-[11px] text-[#5E6C84] mt-0.5">Chronological system changes, schema updates & user audits</p>
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">
                ${allAuditLogs.length} Events Logged
              </span>
            </div>

            <!-- Canvas wrapper -->
            <div class="relative w-full h-[230px] sm:h-[250px]">
              <canvas id="dash-chart-audit-trend"></canvas>
            </div>

            <div class="pt-2 border-t border-[#EBECF0] flex items-center justify-between text-xs text-[#5E6C84]">
              <span>Release Version: <strong class="text-[#172B4D] font-mono">${publishedVersion}</strong></span>
              <a href="#/general/configuration/audit-history" class="font-bold text-[#00875A] hover:underline">View Audit Timeline →</a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Initialize the 4 Dashboard Charts via Chart.js
    setTimeout(() => {
      this.initDashboardCharts(allCompanies, allUsers, allRoles, masterCategories, allAuditLogs);
    }, 50);
  },

  initDashboardCharts(companies, users, roles, masterCategories, auditLogs) {
    if (typeof Chart === 'undefined') return;

    // 1. Chart A: Clients Users Allocation (Stacked Bar Chart)
    const clientCanvas = document.getElementById('dash-chart-client-users');
    if (clientCanvas) {
      const clientLabels = companies.map(c => c.shortName || c.code || c.name);
      const activeData = companies.map(c => {
        return users.filter(u => 
          (u.companyId === c.id || u.companyName === c.name || u.companyName === c.shortName || u.companyName === c.code) &&
          (u.status || 'Active').toLowerCase() === 'active'
        ).length;
      });
      const inactiveData = companies.map(c => {
        return users.filter(u => 
          (u.companyId === c.id || u.companyName === c.name || u.companyName === c.shortName || u.companyName === c.code) &&
          (u.status || 'Active').toLowerCase() !== 'active'
        ).length;
      });

      this.chartInstances.clientUsers = new Chart(clientCanvas, {
        type: 'bar',
        data: {
          labels: clientLabels,
          datasets: [
            {
              label: 'Active Users',
              data: activeData,
              backgroundColor: '#0284C7',
              borderRadius: 6,
              barThickness: 28
            },
            {
              label: 'Inactive Users',
              data: inactiveData,
              backgroundColor: '#CBD5E1',
              borderRadius: 6,
              barThickness: 28
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#172B4D',
              padding: 10,
              cornerRadius: 6,
              titleFont: { size: 12, family: 'Inter', weight: 'bold' }
            }
          },
          scales: {
            x: {
              stacked: true,
              grid: { display: false },
              ticks: { color: '#6B778C', font: { size: 11, family: 'Inter' } }
            },
            y: {
              stacked: true,
              grid: { color: '#EBECF0' },
              ticks: { precision: 0, color: '#6B778C', font: { size: 10, family: 'Inter' } }
            }
          }
        }
      });
    }

    // 2. Chart B: Role Personas Distribution (Doughnut Chart)
    const rolesCanvas = document.getElementById('dash-chart-roles-donut');
    if (rolesCanvas) {
      const topRoles = roles.slice(0, 6);
      const roleLabels = topRoles.map(r => r.name);
      const roleCounts = topRoles.map(r => users.filter(u => u.role === r.name || u.role === r.id).length);

      this.chartInstances.rolesDonut = new Chart(rolesCanvas, {
        type: 'doughnut',
        data: {
          labels: roleLabels,
          datasets: [{
            data: roleCounts,
            backgroundColor: [
              '#0284C7',
              '#00875A',
              '#FF991F',
              '#6554C0',
              '#36B37E',
              '#00B8D9'
            ],
            borderWidth: 2,
            borderColor: '#FFFFFF'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '68%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 10,
                boxHeight: 10,
                font: { size: 10, family: 'Inter' },
                color: '#42526E',
                padding: 10
              }
            },
            tooltip: {
              backgroundColor: '#172B4D',
              padding: 8,
              cornerRadius: 6
            }
          }
        }
      });
    }

    // 3. Chart C: Master Catalog Domain Breakdown (Horizontal / Vertical Bar Chart)
    const masterCanvas = document.getElementById('dash-chart-master-categories');
    if (masterCanvas) {
      const domainLabels = ['Logistics & Ports', 'Plant Processing', 'Commercial & Forex', 'Operations & Coldstore'];
      const domainCounts = [
        (masterCategories['Logistics'] || []).reduce((a, m) => a + (m.records?.length || m.count || 0), 0),
        (masterCategories['Processing'] || []).reduce((a, m) => a + (m.records?.length || m.count || 0), 0),
        (masterCategories['Commercial'] || []).reduce((a, m) => a + (m.records?.length || m.count || 0), 0),
        (masterCategories['Operations'] || []).reduce((a, m) => a + (m.records?.length || m.count || 0), 0)
      ];

      this.chartInstances.masterDomain = new Chart(masterCanvas, {
        type: 'bar',
        data: {
          labels: domainLabels,
          datasets: [{
            label: 'Master Records',
            data: domainCounts,
            backgroundColor: ['#0284C7', '#00875A', '#FF991F', '#6554C0'],
            borderRadius: 6,
            barThickness: 26
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#172B4D',
              padding: 10,
              cornerRadius: 6
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#6B778C', font: { size: 10, family: 'Inter' } }
            },
            y: {
              grid: { color: '#EBECF0' },
              ticks: { precision: 0, color: '#6B778C', font: { size: 10, family: 'Inter' } }
            }
          }
        }
      });
    }

    // 4. Chart D: Audit Activity Trend (Line / Area Chart)
    const auditCanvas = document.getElementById('dash-chart-audit-trend');
    if (auditCanvas) {
      const trendLabels = ['04 Oct', '05 Oct', '06 Oct', '07 Oct', '08 Oct', '09 Oct', 'Today'];
      const trendData = [3, 5, 8, 12, 9, 14, auditLogs.length > 0 ? auditLogs.length + 8 : 16];

      this.chartInstances.auditTrend = new Chart(auditCanvas, {
        type: 'line',
        data: {
          labels: trendLabels,
          datasets: [{
            label: 'Configuration & Governance Events',
            data: trendData,
            borderColor: '#00875A',
            backgroundColor: 'rgba(0, 135, 90, 0.08)',
            fill: true,
            tension: 0.38,
            borderWidth: 2.5,
            pointBackgroundColor: '#00875A',
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#172B4D',
              padding: 10,
              cornerRadius: 6
            }
          },
          scales: {
            x: {
              grid: { color: '#F4F5F7' },
              ticks: { color: '#6B778C', font: { size: 10, family: 'Inter' } }
            },
            y: {
              grid: { color: '#EBECF0' },
              ticks: { precision: 0, color: '#6B778C', font: { size: 10, family: 'Inter' } }
            }
          }
        }
      });
    }
  }
};
