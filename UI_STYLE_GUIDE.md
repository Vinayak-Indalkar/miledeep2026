# Miledeep Enterprise ERP — UI Style Guide & Design System

A production-ready UI design system and style specification calibrated for high-density enterprise web applications, seafood/food processing, and ERP platforms.

---

## 1. Color Palette

### 1.1 Brand & Accent Colors
| Role | Color Name | Hex Code | Tailwind Equivalent / Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | Marine Teal | `#00A4B7` | Primary buttons, active tabs, brand accents, focus rings |
| **Primary Dark / Hover**| Deep Teal | `#008F9F` | Hover state for primary buttons and interactive accents |
| **Secondary Brand** | Ocean Blue | `#0284C7` | Key links, informational badges, secondary accents |
| **Secondary Dark** | Navy Ocean | `#075985` | Sidebar active states, deep headers |

### 1.2 Neutral & Surface Hierarchy
| Role | Hex Code | Description & Usage |
| :--- | :--- | :--- |
| **App Canvas / Page BG** | `#F8FAFC` | Light grey-slate background for page views |
| **Card / Surface BG** | `#FFFFFF` | Surface background for cards, tables, modals |
| **Subtle Fill / Row Hover**| `#F1F5F9` | Table row hover, tab hover, search bar input backgrounds |
| **Border Light** | `#E2E8F0` | Inner card dividers, modal headers, calendar grids |
| **Border Default** | `#DFE1E6` | Table cell borders, tab bar bottom rules, card frames |
| **Border Input / Form** | `#CBD5E1` | Input fields, selects, dropdowns |
| **Text Primary (Headings)**| `#0F172A` | Slate 900 — Maximum readability for headlines & values |
| **Text Body** | `#1E293B` | Slate 800 — Standard data table text and paragraph body |
| **Text Secondary (Labels)**| `#475569` | Slate 600 — Field labels, table headers, descriptions |
| **Text Muted / Placeholders**| `#94A3B8` | Slate 400 — Placeholder text, disabled labels, icon fills |

### 1.3 Semantic & Status Colors
| Status | Background | Text Color | Border Color | Tailwind / CSS Example |
| :--- | :--- | :--- | :--- | :--- |
| **Success / Completed** | `#E3FCEF` | `#006644` | `#ABF5D1` | `bg-[#E3FCEF] text-[#006644]` |
| **Info / Active / In Progress**| `#E0F2FE` | `#0284C7` | `#BAE6FD` | `bg-[#E0F2FE] text-[#0284C7]` |
| **Warning / Pending** | `#FFF0B3` | `#172B4D` | `#FFE380` | `bg-[#FFF0B3] text-[#172B4D]` |
| **Danger / Rejected / Due** | `#FFEBE6` | `#BF2600` | `#FFBDAD` | `bg-[#FFEBE6] text-[#BF2600]` |
| **Draft / Inactive** | `#F4F5F7` | `#42526E` | `#DFE1E6` | `bg-[#F4F5F7] text-[#42526E]` |

---

## 2. Typography

### 2.1 Font Family
- **Font Family:** `'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Google Fonts Import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### 2.2 Scale & Hierarchy
| Level | Font Size | Line Height | Font Weight | Typical Element |
| :--- | :--- | :--- | :--- | :--- |
| **Display / H1** | 22px (`1.375rem`) | 28px | 800 (Bold) | Dashboard & View Title |
| **Section / H2** | 16px (`1.0rem`) | 22px | 700 (Bold) | Card Header / Form Group Title |
| **Subheading / H3** | 14px (`0.875rem`) | 20px | 600 (Semibold) | Modal Title / KPI Subtitle |
| **Form Labels** | 11px - 12px | 16px | 600 (Semibold) | Uppercase tracking-wider form labels |
| **Body / Table Cell**| 12px - 13px | 18px | 400 - 500 | Data grid cells, paragraphs |
| **Badges / Microcopy**| 10px - 11px | 14px | 600 (Semibold) | Status pills, tooltips |

---

## 3. Buttons & Interactive Controls

All primary and action buttons follow **Full Pill Geometry (`rounded-full`)** without heavy borders.

### 3.1 Button Variants
```html
<!-- Primary Button (Brand Marine Teal) -->
<button class="btn-primary border-0 px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-[#00A4B7] hover:bg-[#008F9F] text-white transition-all">
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
  <span>Add New</span>
</button>

<!-- Secondary Button (Clean White Surface) -->
<button class="btn-secondary border border-[#CBD5E1] px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-xs bg-white text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-all">
  <svg class="w-4 h-4 text-[#00A4B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
  <span>Export</span>
</button>

<!-- Danger Button (Alert Red) -->
<button class="btn-danger border-0 px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer bg-[#EF4444] hover:bg-[#DC2626] text-white transition-all">
  <span>Delete</span>
</button>

<!-- Circular Icon Button (28px x 28px) -->
<button class="w-7 h-7 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#334155] hover:bg-[#F1F5F9] hover:text-[#00A4B7] hover:border-[#00A4B7] transition-all cursor-pointer">
  <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
</button>
```

---

## 4. Tabs System (Underline Text Tabs)

Tabs are clean text buttons with an active bottom indicator line (`border-bottom: 2px solid #00A4B7`).

```html
<!-- Tab Bar Container -->
<div class="flex items-center gap-1 overflow-x-auto bg-transparent p-0 border-b border-[#DFE1E6] scrollbar-thin">
  
  <!-- Active Tab -->
  <a role="tab" aria-selected="true" class="select-none px-4 py-2.5 text-xs font-bold whitespace-nowrap flex items-center gap-1.5 outline-none bg-transparent -mb-[1px] border-b-2 border-[#00A4B7] text-[#00A4B7]">
    <span>Active Tab</span>
  </a>

  <!-- Inactive Tab -->
  <a role="tab" aria-selected="false" class="select-none px-4 py-2.5 text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 outline-none bg-transparent -mb-[1px] border-b-2 border-transparent text-[#5E6C84] hover:text-[#172B4D] hover:border-[#DFE1E6]">
    <span>Inactive Tab</span>
  </a>

</div>
```

---

## 5. Form Fields & Inputs

### 5.1 Text & Number Inputs
- **Height:** 36px (`min-height: 36px;`)
- **Border:** `1px solid #CBD5E1` (`rounded-lg` / 8px)
- **Focus Ring:** `border-color: #00A4B7; box-shadow: 0 0 0 2px rgba(0, 164, 183, 0.15);`

```html
<div>
  <label class="block text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1">
    Field Label <span class="text-red-500">*</span>
  </label>
  <input 
    type="text" 
    class="w-full text-xs px-3 py-2 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7] text-[#0F172A]" 
    placeholder="Enter text..." 
  />
</div>
```

### 5.2 Standard Date Input (Forced `DD-MM-YYYY`)
The design system enforces uppercase date formatting (`DD-MM-YYYY`) through CSS:

```css
/* Show DD-MM-YYYY in uppercase across all WebKit/Chromium date fields */
input[type="date"],
input[type="datetime-local"],
input[type="month"],
.erp-date-input {
  text-transform: uppercase !important;
}

input[type="date"]::-webkit-datetime-edit,
input[type="date"]::-webkit-datetime-edit-fields-wrapper,
input[type="date"]::-webkit-datetime-edit-text,
input[type="date"]::-webkit-datetime-edit-month-field,
input[type="date"]::-webkit-datetime-edit-day-field,
input[type="date"]::-webkit-datetime-edit-year-field {
  text-transform: uppercase !important;
}

/* Suppress duplicate browser SVG icons */
.erp-date-icon {
  display: none !important;
}
```

```html
<input 
  type="date" 
  class="erp-date-input w-full text-xs px-2.5 py-1.5 bg-white border border-[#DFE1E6] rounded focus:outline-none focus:border-[#00A4B7] uppercase" 
  onclick="this.showPicker ? this.showPicker() : this.focus()" 
/>
```

### 5.3 Dropdown Search Input
```html
<div class="erp-dropdown-search-wrapper p-2 border-b border-[#E2E8F0] bg-[#F8FAFC]">
  <div class="relative flex items-center w-full">
    <span class="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none text-[#94A3B8]">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </span>
    <input 
      type="text" 
      id="erp-dropdown-search-input" 
      placeholder="Search..." 
      autocomplete="off" 
      spellcheck="false" 
      class="w-full text-xs pl-8 pr-2.5 py-1.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#00A4B7]" 
    />
  </div>
</div>
```

---

## 6. Status Pills & Badges (Lozenges)

All status indicators use high-contrast capsule badges:
```html
<!-- Success / Received / Paid -->
<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644] border border-[#ABF5D1]">
  <span class="w-1.5 h-1.5 rounded-full bg-[#00875A]"></span> Paid
</span>

<!-- Pending / Processing -->
<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFF0B3] text-[#172B4D] border border-[#FFE380]">
  <span class="w-1.5 h-1.5 rounded-full bg-[#FFAB00]"></span> Pending
</span>

<!-- Rejected / Overdue -->
<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFEBE6] text-[#BF2600] border border-[#FFBDAD]">
  <span class="w-1.5 h-1.5 rounded-full bg-[#DE350B]"></span> Overdue
</span>
```

---

## 7. Data Tables & Grids

### 7.1 Table Container & Scrollbar
For high-density tables with 10+ columns, apply horizontal overflow with a custom visible 8px scrollbar:

```css
/* Visible Custom Scrollbar */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px !important;
}
.overflow-x-auto::-webkit-scrollbar-track {
  background: #F1F5F9 !important;
  border-radius: 4px !important;
}
.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #CBD5E1 !important;
  border-radius: 4px !important;
}
.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #94A3B8 !important;
}
```

### 7.2 Table Markup
```html
<div class="bg-white rounded-xl border border-[#DFE1E6] shadow-2xs overflow-hidden">
  <div class="overflow-x-auto" style="overflow-x: auto !important; -webkit-overflow-scrolling: touch;">
    <table class="w-full text-left text-xs border-collapse" style="min-width: 1300px;">
      <thead class="bg-[#F8FAFC] border-b border-[#DFE1E6] text-[#475569] font-bold uppercase tracking-wider text-[11px]">
        <tr>
          <th class="py-3 px-4">S.No</th>
          <th class="py-3 px-4">Reference No</th>
          <th class="py-3 px-4">Supplier Name</th>
          <th class="py-3 px-4 text-right">Amount (₹)</th>
          <th class="py-3 px-4 text-center">Status</th>
          <th class="py-3 px-4 text-right">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-[#E2E8F0] text-[#1E293B]">
        <tr class="hover:bg-[#F8FAFC] transition-colors">
          <td class="py-3 px-4 font-mono">1</td>
          <td class="py-3 px-4 font-bold text-[#00A4B7]">PO-2026-0891</td>
          <td class="py-3 px-4 font-medium">Apex Chemicals India Ltd</td>
          <td class="py-3 px-4 text-right font-mono font-bold">₹1,45,000</td>
          <td class="py-3 px-4 text-center">
            <span class="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3FCEF] text-[#006644]">Paid</span>
          </td>
          <td class="py-3 px-4 text-right">
            <button class="w-7 h-7 rounded-full hover:bg-[#F1F5F9] inline-flex items-center justify-center text-[#64748B] hover:text-[#00A4B7]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

---

## 8. Modals & Dialogs

- **Backdrop:** `fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center`
- **Dialog Box:** `bg-white rounded-2xl shadow-2xl border border-[#DFE1E6] w-full max-w-2xl overflow-hidden`
- **Header:** `px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between`
- **Footer:** `px-6 py-4 border-t border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-end gap-3`

---

## 9. Key UI Rules & Best Practices

1. **No Outlined Subheaders:** Avoid border lines or unnecessary padding under module titles (`mb-0`).
2. **Clean Datepickers:** Single calendar icon native to the browser, with the redundant custom SVG icon suppressed (`display: none !important;`).
3. **Pill Buttons:** Action buttons, pills, and filter triggers use `rounded-full` without heavy rectangular borders.
4. **Active Underline Tabs:** Submenu tabs use text styling with a 2px colored bottom line (`#00A4B7`) instead of bulky colored solid capsules.
5. **Horizontal Scroll Accessibility:** Any data table wider than standard viewport has a forced visible scrollbar (`scrollbar-thin` / 8px) with `min-width: 1300px+`.
6. **Date Standard:** Always display `DD-MM-YYYY` in uppercase for consistency across Chromium, WebKit, and mobile browsers.

