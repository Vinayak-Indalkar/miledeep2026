// On-Screen Horizontal Tab Bar Component

import { NAV_HIERARCHY } from './sidebar.js';

export const TabBar = {
  render(containerId, activeHash) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    const clean = (activeHash || '').replace(/^#\/?/, '').replace(/^\/+/, '');
    const parts = clean.split('/');
    const modId = parts[0] || 'purchase';
    let subId = parts[1] || 'dashboard';
    let tabId = parts[2] || '';

    const module = NAV_HIERARCHY.find(m => m.id === modId);
    if (!module) return null;

    let submenu = module.submenus.find(s => s.id === subId);
    if (!submenu) {
      submenu = module.submenus[0];
      if (submenu && submenu.tabs.some(t => t.id === subId)) {
        tabId = subId;
      }
    }
    if (!submenu || submenu.tabs.length <= 1) {
      container.innerHTML = '';
      return null;
    }

    const currentTabId = tabId || submenu.defaultTab;

    container.innerHTML = `
      <nav aria-label="${submenu.title} tabs navigation" class="mb-4">
        <div 
          role="tablist" 
          aria-label="${submenu.title} views" 
          id="${containerId}-tablist" style="overflow-x: auto !important; -webkit-overflow-scrolling: touch; scrollbar-width: thin;"
          class="flex items-center gap-2 overflow-x-auto bg-transparent p-0 border-b-0 rounded-xl scrollbar-thin"
        >
          ${submenu.tabs.map(tab => {
            const isActive = tab.id === currentTabId;
            return `
              <a 
                id="tab-${tab.id}"
                role="tab"
                href="${tab.hash}" 
                aria-selected="${isActive ? 'true' : 'false'}"
                tabindex="${isActive ? '0' : '-1'}"
                aria-controls="panel-${tab.id}"
                class="select-none px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all rounded-full flex items-center gap-1.5 outline-none border-0 ${isActive ? 'tab-active bg-[#00A4B7] text-white font-bold shadow-xs' : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] bg-transparent'}"
              >
                <span class="select-none">${tab.label}</span>
              </a>
            `;
          }).join('')}
        </div>
      </nav>
    `;

    this.bindKeyboardNav(containerId);
    this.bindClickNav(containerId);
    this.bindWheelScroll(containerId);
    this.scrollActiveTabIntoView(containerId);

    return { module, submenu, currentTabId };
  },

  bindClickNav(containerId) {
    const tablistEl = document.getElementById(`${containerId}-tablist`);
    if (!tablistEl) return;
    tablistEl.addEventListener('click', (e) => {
      const clicked = e.target.closest('[role="tab"]');
      if (!clicked) return;
      tablistEl.querySelectorAll('[role="tab"]').forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.tabIndex = -1;
        t.classList.remove('tab-active', 'bg-[#00A4B7]', 'text-white', 'font-bold', 'shadow-xs');
        t.classList.add('text-[#475569]', 'hover:text-[#0F172A]', 'hover:bg-[#F1F5F9]', 'bg-transparent');
      });
      clicked.setAttribute('aria-selected', 'true');
      clicked.tabIndex = 0;
      clicked.classList.remove('text-[#475569]', 'hover:text-[#0F172A]', 'hover:bg-[#F1F5F9]', 'bg-transparent');
      clicked.classList.add('tab-active', 'bg-[#00A4B7]', 'text-white', 'font-bold', 'shadow-xs');
    });
  },

  bindKeyboardNav(containerId) {
    const tablistEl = document.getElementById(`${containerId}-tablist`);
    if (!tablistEl) return;

    const tabElements = Array.from(tablistEl.querySelectorAll('[role="tab"]'));
    if (!tabElements.length) return;

    tabElements.forEach((tabEl, index) => {
      tabEl.addEventListener('keydown', (e) => {
        let targetIndex = -1;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          targetIndex = (index + 1) % tabElements.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          targetIndex = (index - 1 + tabElements.length) % tabElements.length;
        } else if (e.key === 'Home') {
          e.preventDefault();
          targetIndex = 0;
        } else if (e.key === 'End') {
          e.preventDefault();
          targetIndex = tabElements.length - 1;
        } else if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          tabEl.click();
          return;
        }

        if (targetIndex !== -1) {
          const targetTab = tabElements[targetIndex];
          targetTab.focus();
          targetTab.click();
        }
      });
    });
  },

  bindWheelScroll(containerId) {
    const tablistEl = document.getElementById(`${containerId}-tablist`);
    if (!tablistEl) return;
    tablistEl.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        tablistEl.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  },

  scrollActiveTabIntoView(containerId) {
    const tablistEl = document.getElementById(`${containerId}-tablist`);
    if (!tablistEl) return;
    requestAnimationFrame(() => {
      const activeTab = tablistEl.querySelector('[aria-selected="true"]');
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    });
  },
};
