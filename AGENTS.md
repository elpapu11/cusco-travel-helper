# AGENTS.md — Cusco Travel Helper

> This file is intended for AI coding agents. If you are reading this, you know nothing about the project yet.

## Project Overview

**Cusco Travel Helper** is a static, mobile-first, bilingual (EN/ES) single-page web application designed to help tourists in Cusco, Peru request private transfer quotes via WhatsApp. It also offers itinerary review assistance and Machu Picchu logistics guidance as a secondary service line.

This is an intentional MVP for demand validation. It is **not** a marketplace, travel agency, confirmed booking system, or payment platform. All logic runs in the browser with no backend or database.

## Technology Stack

- **Frontend:** Pure HTML5, CSS3, and vanilla JavaScript (ES6+). No frameworks, no build tools, no bundlers.
- **Styling:** Custom CSS with CSS custom properties (variables). Mobile-first with progressive enhancement.
- **Data:** Static JSON files loaded via `fetch()`. Inline fallback data embedded in `script.js` for local `file://` usage.
- **Analytics:** Google Analytics 4 (optional; gracefully ignored if not configured).
- **Communication:** WhatsApp via `wa.me` deep links.
- **Deployment:** Static hosting (Cloudflare Pages is the documented target).

## File Structure

```
/
  index.html          Single-page markup (hero, form, routes, products, FAQ, footer)
  styles.css          Premium mobile-first styles, CSS variables, no dependencies
  script.js           All logic: i18n, data loading, rendering, form handling, rules engine, WhatsApp builder
  data/
    routes.json       Popular routes with logistics metadata
    products.json     Trip-check / itinerary review products
    rules.json        Quote evaluator rules
  README.md           Human-facing documentation (bilingual EN/ES)
  AGENTS.md           This file
```

There are **no** `package.json`, `pyproject.toml`, `Cargo.toml`, or other package manifest files. There is no build step.

## Runtime Architecture

1. **Initialization:** On `DOMContentLoaded`, the app restores the user's language preference from `localStorage` (key: `cth-lang`), sets the page language, loads JSON data, and initializes the form.
2. **Data Loading:** `loadData()` fetches `data/routes.json`, `data/products.json`, and `data/rules.json` in parallel. If any fetch fails (e.g., local file access), inline fallback arrays are used instead.
3. **Rendering:** `renderRoutes()` and `renderProducts()` populate grid containers dynamically based on the current language.
4. **Form Flow:** The transfer quote form collects trip details, validates them, matches against route data, evaluates rules, and displays a result card with a pre-filled WhatsApp link.
5. **Internationalization:** Text content is translated via a `translations` object keyed by `data-i18n` attributes. The `<html lang>` attribute and active language button states are updated accordingly.
6. **Analytics:** `trackEvent()` wraps `gtag()` and only fires if the function is available, preventing errors when GA4 is not configured.

## Key Configuration Values

These are the only values an agent typically needs to change for a new deployment:

| Value | File | Line | Description |
|-------|------|------|-------------|
| `WHATSAPP_NUMBER` | `script.js` | ~11 | Full WhatsApp number with country code (e.g., `"51987654321"`). Used in all WhatsApp links and messages. |
| `GA4_ID` | `script.js` | ~14 | Google Analytics 4 measurement ID (e.g., `"G-ABC123DEF0"`). Must also be replaced in `index.html` in two places: the async script URL and the `gtag('config', ...)` call. |

## Code Organization & Module Divisions (`script.js`)

The JavaScript is divided into logical sections (top to bottom):

1. **Configuration** — `WHATSAPP_NUMBER`, `GA4_ID`
2. **Translations** — `translations` object with ~100 keys, each with `en` and `es` strings
3. **State** — `currentLang`, data arrays, `lastWhatsAppMessage`
4. **GA4 Helper** — `trackEvent(eventName, params)`
5. **Language Management** — `setLanguage(lang)`, `translatePage()`
6. **Inline Data Fallbacks** — `routesDataFallback`, `productsDataFallback`, `rulesDataFallback`
7. **Data Loading** — `loadData()` (fetch with fallback)
8. **Renderers** — `renderRoutes()`, `renderProducts()`
9. **Route Prefill** — `prefillRoute(routeId)`
10. **Form Handling** — `initForm()`, `getFormData(form)`, `validateForm(data)`
11. **Quote Generation** — `generateQuoteResult(formData)`
12. **Route Lookup** — `getRouteData(origin, destination)`
13. **Rules Engine** — `applyRules(formData)` (OR logic per rule; special handling for numeric travelers, early time, and "not sure")
14. **WhatsApp Builder** — `buildWhatsAppMessage(formData, context)`, `buildWhatsAppUrl(message)`
15. **Clipboard** — `copyRequestToClipboard()`
16. **Reset** — `resetForm()`
17. **Utility** — `escapeHtml(str)`
18. **Initialization** — `DOMContentLoaded` event handler

## Data Schemas

### `routes.json`
- `id`, `origin`, `destination`, `name_en`, `name_es`, `estimated_time_en`, `estimated_time_es`
- `logistics_level`: `"easy" | "moderate" | "high"`
- `suggested_vehicle_en`, `suggested_vehicle_es`, `warning_en`, `warning_es`
- `tags`: string array for future use
- `origin` and `destination` must match the `<option>` values in `index.html`

### `products.json`
- `id`, `name_en`, `name_es`, `price` (display string, e.g. `"US$19"`)
- `description_en`, `description_es`
- `includes_en`, `includes_es`: string arrays
- `whatsapp_intent_en`, `whatsapp_intent_es`: pre-filled message text

### `rules.json`
- `id`, `conditions` (array of `{ field, value }`), `logic` (currently always `"OR"`)
- `severity`: `"info" | "warning"`
- `message_en`, `message_es`
- Available fields for conditions: `origin`, `destination`, `travelers`, `luggage`, `vehicle`, `stops`, `pickup`, `concern`, `trip_date`, `trip_time`
- Special evaluation: `travelers` uses numeric `>=` comparison; `time` value `"early"` triggers when hour < 6; `destination` `"not-sure"` checks for empty or uncertain values

## Code Style Guidelines

- **CSS:** Mobile-first. Base styles for small screens; progressive enhancement at `@media (min-width: 640px)` (tablet) and `@media (min-width: 900px)` (desktop). Uses CSS custom properties for colors, spacing, shadows, and typography.
- **JavaScript:** Vanilla ES6+. No classes or modules — flat procedural style with clear section comments. Uses `const`/`let`, template literals, `async/await`, and arrow functions where appropriate.
- **HTML:** Semantic elements (`header`, `nav`, `main`, `section`, `footer`, `details`/`summary` for FAQ). Accessibility attributes (`aria-label`, `aria-pressed`, `aria-live`).
- **Naming:** `camelCase` for JS functions/variables; `kebab-case` for CSS classes and HTML IDs; `snake_case` for form field names.
- **Security:** Always use `escapeHtml()` when injecting dynamic text into the DOM. Never inject raw user input or JSON strings directly.

## Build and Test Commands

There is **no build system**. To run or test the project:

```bash
# Open directly in a browser (works with local file access)
open index.html

# Or serve with any static server for full fetch() support
python3 -m http.server 8000
npx serve .
```

To create a deployable archive:

```bash
zip -r cusco-travel-helper.zip index.html styles.css script.js data/ README.md
```

## Testing Strategy

- **No automated test suite.** All testing is manual.
- **Manual checklist:**
  1. Open `index.html` in Chrome, Firefox, Safari, and Edge.
  2. Switch languages (EN/ES) and verify all text updates, including meta tags and dynamic content.
  3. Submit the quote form with valid and invalid data (missing fields, same origin/destination).
  4. Click a route card and verify the form prefills.
  5. Click "Send request by WhatsApp" and verify the `wa.me` link opens with the correct pre-filled message.
  6. Test "Copy request" and verify clipboard content.
  7. Verify GA4 events fire (check browser console Network tab for `google-analytics` requests after configuring a real ID).
  8. Test responsiveness by resizing the viewport across mobile, tablet, and desktop breakpoints.
  9. Open via `file://` protocol to confirm inline fallback data loads when JSON fetches fail.

## Deployment Process

1. Update `WHATSAPP_NUMBER` in `script.js` and `GA4_ID` in both `script.js` and `index.html`.
2. Zip all root files and the `data/` folder.
3. Upload to Cloudflare Pages (or any static host) with **"None"** as the framework preset and no build command.
4. Set the output directory to `/` (root).

## Security Considerations

- **No backend or database.** All logic is client-side.
- **No authentication or user accounts.** The site is completely anonymous.
- **No payment processing.** No PCI or financial data is handled.
- **XSS mitigation:** Dynamic content injected into the DOM is passed through `escapeHtml()`.
- **WhatsApp number exposure:** The business phone number is hardcoded in client-side JS/HTML, which is expected for this use case.
- **No sensitive file exposure:** No `.env`, API keys (beyond the public GA4 ID), or server configs exist in the repository.

## Important Notes for Agents

- **Do not add a build step or bundler** unless explicitly requested. The project is intentionally zero-dependency.
- **Keep the inline fallbacks in `script.js` in sync** with `data/*.json` when editing data. The fallbacks are used when the site is opened locally via `file://`.
- **Always maintain bilingual parity.** When adding new UI text, add both `en` and `es` entries to the `translations` object and update both `_en` and `_es` fields in JSON data files.
- **Do not convert the form or data handling to a framework** (React, Vue, etc.). The value proposition of this project is its simplicity and deployability.
- **Preserve mobile-first CSS.** If adding new components, style for mobile first and enhance at the existing breakpoints (`640px`, `900px`).
