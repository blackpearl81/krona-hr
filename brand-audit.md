# Krona HR — Wipro adaptation audit

Status: source-only, non-enforcing review. Full brand compliance cannot be verified.

## Target and provenance

- Target: blackpearl81/krona-hr, main at e5bbf3958d60b07d9c5c491151ef65367b0425ae.
- Installed skill: blackpearl81/Brand-Guidelines-Compliance main at 8942ef2e26543d456242f246e5fae5496d434349. All five skill files are copied unchanged. The skill identifies its bundled reference extraction snapshot as 07f25e37e07ace838ebb8eb00c5f8cc5c9148714.
- Source document named by the references: Wipro Brand Guide 2022. Its PDF and visual examples were unavailable for independent verification; citations below are the bundled transcription, not new source validation.
- The target tree contains only App.tsx, index.css, main.tsx, and package.json. No existing root or nested AGENTS.md was present, so root instructions were added without replacing existing instructions.
- Scope: potential future adaptation only. Krona’s application files, branding, and behavior are unchanged. Installation grants no permission to rebrand or activate requirements.

## Coverage and limitations

React 19 / Vite / Tailwind 4 are declared. App.tsx uses state-based tabs rather than declared URL routes: overview (initial), attendance, leaves, performance, directory. It wires LeaveRequestModal, ManualAttendanceModal, PerformanceReviewModal, and EmployeeDetailDrawer. All five tabs and all four overlays are source-discovered only; none was rendered.

The checkout omits context/HRContext and every imported components/ module, plus index.html, TypeScript configuration, lockfile, and any asset folders. There is no complete existing build/run setup to execute. Declared commands are npm run dev (Vite port 3000), npm run build (vite build), npm run preview, and npm run lint (tsc --noEmit). Build, lint, installation, and browser tests were not run. Git clone failed because the execution proxy was unreachable; source inspection continued through the authorized GitHub connector.

The supplied AI Studio URL was inaccessible to the available web tool. No viewport dimensions, screenshots, computed fonts, logo measurements, color-pair contrast ratios, or licenses were captured. Hover, focus, disabled, loading, empty, error, keyboard, and responsive states remain uninspected. This is an audit of the uploaded snapshot, not evidence about the complete AI Studio application.

## Approval inventory

- Active rules: 0. Disabled rules: 45 (all pending_review / disabled_until_approved). Approval-blocked rules: 45; these counts overlap rather than add.
- Potential web scope: 41. Outside web-app scope: 4 (BR-GRID-001 through BR-GRID-004: A4, landscape creative, social media). They remain disabled and must not become responsive app constraints.
- Token leaves: 46; all pending_review, with a pending enclosing approval. A4 hierarchy sourceSize records also remain pending, with unspecified units. No tokens were exported.
- Components: 19, all pending_review. Sixteen UI component records have empty enforceable_component_rules; icon/chart/logo rule links convey no approval. Navigation links BR-LOGO-008 without specifying an app navigation design.
- Open reference issues: 16. No approvals, resolutions, or enforcement flags were changed.

## Non-enforcing source observations

Each rule below has outcome disabled_pending_approval. There is no approved expected requirement; the cited wording is only a pending candidate. Rule severity is copied metadata, not an application violation. The listed validation_method is the future method required after approval; this audit used source inspection only.

- Typography: index.css:5 declares Plus Jakarta Sans and system fallbacks; index.css:9 declares JetBrains Mono for code/monospace selectors. This differs from the pending Proxima Nova/Wipro Akkurat/conditional Arial directions, but does not justify substitution. Actual loaded fonts and heading/body roles are unknown (UN-004, UN-005).
- Palette: App.tsx:30 uses bg-slate-100 and selection:bg-slate-200; index.css:24 and :29 hardcode scrollbar rgba(148, 163, 184, 0.4) and rgba(100, 116, 139, 0.6). No approved Wipro semantic mapping or generated Wipro token import appears in these files. Neither generic light backgrounds nor palette names prove brand or contrast compliance (UN-001–003, UN-011, UN-016).
- Layout: App.tsx:30 uses full-screen overflow-hidden; App.tsx:51 uses a scrolling main canvas with p-6, max-w-7xl, and mx-auto. These are source classes, not measured dimensions. Do not replace them with A4/social 36px/18px grid values (UN-008, UN-013).
- Identity and logos: Sidebar and Header are imported but missing. No logo assets or visible Krona name strings exist in the uploaded files. Logo choice, location, dimensions, clear space, and co-branding cannot be assessed. Do not infer a missing Wipro logo is a defect or replace Krona’s identity (UN-006, UN-007, UN-012).
- Imagery, icons, charts, and infographics: no relevant component implementations or assets are supplied. lucide-react is declared as a dependency, which does not prove any icon is rendered. Diversity, disc geometry, stroke/fill, chart shape/palette, image provenance, and licensing remain unknown (UN-015).
- Copy and interaction: display headings, case, text alignment, controls, and focus/error states are hidden in missing components. Modal open/close state wiring does not prove accessible dialog behavior (UN-009, UN-010).

## Rule-by-rule evidence register

Common approval: pending_review. Common enforcement: disabled_until_approved. Common approved expectation: none. Common outcome: disabled_pending_approval. All source page citations refer to Wipro Brand Guide 2022 as transcribed by the skill.

| Rule | Severity | Scope | Page and pending source wording | Future validation method | Source location / evidence and observation |
| --- | --- | --- | --- | --- | --- |
| BR-LOGO-001 | warning | web_app | 4: The primary brand mark in full color should always be used if possible. | asset_review | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-LOGO-002 | warning | web_app | 4: in exceptional cases where production or contrast limitations prevent the use of the primary brand mark. | manual_review | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-LOGO-003 | error | web_app | 5: The minimum clear space for all brand mark versions is defined by the height (100%) of the letter ‘o’. | geometry_review | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-LOGO-004 | error | web_app | 6: Digital : Min 140 px | dom_asset_measurement | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-LOGO-005 | error | web_app | 6: Digital : Min 50 px | dom_asset_measurement | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-LOGO-006 | error | web_app | 6: Digital : Min 35 px | dom_asset_measurement | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-LOGO-007 | info | web_app | 6: To determine the best mark size, multiply the smallest side of the creative layout by 20%. | manual_review | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-LOGO-008 | warning | web_app | 8: In certain instances such as websites, follow the usual convention of placing the brand mark in the top left position. | visual_review | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-LOGO-009 | warning | web_app | 8: Whenever possible avoid centering the brand mark. | visual_review | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-LOGO-010 | warning | web_app | 13: The appropriate monochrome option is selected to ensure maximum contrast against the background image. | visual_contrast_review | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-LOGO-011 | warning | web_app | 13: unnatural post-production techniques are not be applied to accommodate the brand mark. | manual_review | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-LOGO-012 | warning | web_app | 14: This section lists examples of brand mark misuse. | visual_review | App.tsx:8–9 imports missing Sidebar/Header; no logo asset, geometry, or placement evidence. |
| BR-COLOR-001 | info | web_app | 16: We are a multicolored brand with blue being our key color. | visual_review | App.tsx:30 bg-slate-100/selection:bg-slate-200; index.css:24,29 scrollbar RGBA. No computed foreground/background pairs or approved semantic mapping. |
| BR-COLOR-002 | info | web_app | 16: White and Light Gray are usually used for backgrounds. | visual_review | App.tsx:30 bg-slate-100/selection:bg-slate-200; index.css:24,29 scrollbar RGBA. No computed foreground/background pairs or approved semantic mapping. |
| BR-COLOR-003 | info | web_app | 16: Black is usually used for body text. | visual_review | App.tsx:30 bg-slate-100/selection:bg-slate-200; index.css:24,29 scrollbar RGBA. No computed foreground/background pairs or approved semantic mapping. |
| BR-COLOR-004 | warning | web_app | 19: for creating digital content that is meant to be inclusive, we recommend using ADA colors. | palette_review | App.tsx:30 bg-slate-100/selection:bg-slate-200; index.css:24,29 scrollbar RGBA. No computed foreground/background pairs or approved semantic mapping. |
| BR-TYPE-001 | warning | web_app | 22: Proxima is our display font used for feature headings and subheadings | css_font_audit | index.css:5 Plus Jakarta Sans/system stack, :9 JetBrains Mono. Missing views prevent heading/copy role, case, weight, alignment and computed-font inspection. |
| BR-TYPE-002 | error | web_app | 22: It is always set in sentence case, never uppercase. | text_case_lint | index.css:5 Plus Jakarta Sans/system stack, :9 JetBrains Mono. Missing views prevent heading/copy role, case, weight, alignment and computed-font inspection. |
| BR-TYPE-003 | warning | web_app | 22: The typeface Wipro Akkurat is used for all secondary level copy. | css_font_audit | index.css:5 Plus Jakarta Sans/system stack, :9 JetBrains Mono. Missing views prevent heading/copy role, case, weight, alignment and computed-font inspection. |
| BR-TYPE-004 | warning | web_app | 23: Arial is the default font that will be used when a system font is required. | css_font_audit | index.css:5 Plus Jakarta Sans/system stack, :9 JetBrains Mono. Missing views prevent heading/copy role, case, weight, alignment and computed-font inspection. |
| BR-TYPE-005 | warning | web_app | 23: Arial Bold is used for headings and subheadings, and Arial Regular for body text. | css_font_audit | index.css:5 Plus Jakarta Sans/system stack, :9 JetBrains Mono. Missing views prevent heading/copy role, case, weight, alignment and computed-font inspection. |
| BR-TYPE-006 | info | web_app | 23: *Italics included but discouraged | manual_review | index.css:5 Plus Jakarta Sans/system stack, :9 JetBrains Mono. Missing views prevent heading/copy role, case, weight, alignment and computed-font inspection. |
| BR-TYPE-007 | warning | web_app | 24: Case: Sentence Case; Line Spacing: Auto; Letter Spacing: 0; Justification: Left Flush | css_and_content_audit | index.css:5 Plus Jakarta Sans/system stack, :9 JetBrains Mono. Missing views prevent heading/copy role, case, weight, alignment and computed-font inspection. |
| BR-GRID-001 | info | A4_document | 36: 36 px; 18 px line separation; 36 px column gutter | template_geometry_check | App.tsx:51 p-6/max-w-7xl/mx-auto main. Rule concerns non-web creative scope; no corresponding creative supplied; do not transfer values to app. |
| BR-GRID-002 | info | landscape_social_presentation | 37: 1200 x 630 px; 36 px column gutters; 18 px grid space | template_geometry_check | App.tsx:51 p-6/max-w-7xl/mx-auto main. Rule concerns non-web creative scope; no corresponding creative supplied; do not transfer values to app. |
| BR-GRID-003 | warning | social_media | 39: Limit header to 3 lines | visual_review | App.tsx:51 p-6/max-w-7xl/mx-auto main. Rule concerns non-web creative scope; no corresponding creative supplied; do not transfer values to app. |
| BR-GRID-004 | warning | social_media | 55: Logo Size: 140 px | template_geometry_check | App.tsx:51 p-6/max-w-7xl/mx-auto main. Rule concerns non-web creative scope; no corresponding creative supplied; do not transfer values to app. |
| BR-PHOTO-001 | warning | web_app | 42: All images should reflect inclusion and diversity | manual_review | No photo assets or provenance/license records in the four-file upload; missing directory/view components cannot be reviewed. |
| BR-PHOTO-002 | warning | web_app | 45: Do not use overcomplicated imagery. Use images that have a clear subject. | manual_review | No photo assets or provenance/license records in the four-file upload; missing directory/view components cannot be reviewed. |
| BR-PHOTO-003 | warning | web_app | 46: Don’t use unrealistic technology | manual_review | No photo assets or provenance/license records in the four-file upload; missing directory/view components cannot be reviewed. |
| BR-PHOTO-004 | warning | web_app | 47: Avoid compositions that feel artificial or unreal. | manual_review | No photo assets or provenance/license records in the four-file upload; missing directory/view components cannot be reviewed. |
| BR-PHOTO-005 | warning | web_app | 49: Avoid subjects like: Crowded Offices; Super-Imposed Tech; Graphic Technology; Crowded Conference Rooms; Cheesy Stock Photos; Crowded Scenes In Public | manual_review | No photo assets or provenance/license records in the four-file upload; missing directory/view components cannot be reviewed. |
| BR-PHOTO-006 | error | web_app | 50: Images on stock libraries that have been marked for editorial use are not to be used in any Wipro communications. | license_metadata_review | No photo assets or provenance/license records in the four-file upload; missing directory/view components cannot be reviewed. |
| BR-PHOTO-007 | warning | web_app | 50: Images found on search engines (such as Google) should also be avoided due to licensing restrictions. | asset_provenance_review | No photo assets or provenance/license records in the four-file upload; missing directory/view components cannot be reviewed. |
| BR-ICON-001 | warning | web_app | 58: Keep the icons in a disc. | component_visual_review | package.json declares lucide-react; missing components/SVGs prevent disc, fill, palette, complexity or social-icon review. |
| BR-ICON-002 | warning | web_app | 58: Avoid filled-in shapes. | svg_review | package.json declares lucide-react; missing components/SVGs prevent disc, fill, palette, complexity or social-icon review. |
| BR-ICON-003 | warning | web_app | 58: Stick to the brand colors. | svg_palette_lint | package.json declares lucide-react; missing components/SVGs prevent disc, fill, palette, complexity or social-icon review. |
| BR-ICON-004 | warning | web_app | 58: Avoid overly intricate shapes. | manual_review | package.json declares lucide-react; missing components/SVGs prevent disc, fill, palette, complexity or social-icon review. |
| BR-ICON-005 | warning | web_app | 59: Social Media Icons are to be used either in their original formats, but only in discs. | visual_review | package.json declares lucide-react; missing components/SVGs prevent disc, fill, palette, complexity or social-icon review. |
| BR-CHART-001 | warning | web_app | 61: our primary colors are used as the predominant palette. | chart_palette_review | App.tsx imports missing OverviewView/PerformanceView; no chart/infographic implementation or evidence. |
| BR-CHART-002 | info | web_app | 61: Choose a rounded graph over a square graph. | visual_review | App.tsx imports missing OverviewView/PerformanceView; no chart/infographic implementation or evidence. |
| BR-INFO-001 | info | web_app | 62: We recommend creating infographics on a white background. | visual_review | App.tsx imports missing OverviewView/PerformanceView; no chart/infographic implementation or evidence. |
| BR-INFO-002 | warning | web_app | 62: All primary brand colors should be used first, followed by the support colors. | palette_order_review | App.tsx imports missing OverviewView/PerformanceView; no chart/infographic implementation or evidence. |
| BR-INFO-003 | warning | web_app | 62: Any style of font from the Wipro Akkurat family - Bold, Regular or Italic - can be used for the text. | font_review | App.tsx imports missing OverviewView/PerformanceView; no chart/infographic implementation or evidence. |
| BR-INFO-004 | error | web_app | 62: The text must always be in sentence case and left-aligned. | text_case_and_alignment_lint | App.tsx imports missing OverviewView/PerformanceView; no chart/infographic implementation or evidence. |

## Unresolved guidelines

All existing entries remain open / pending_review. Proposals are not approved decisions. Preserve conflicting values exactly.

| ID | Source pages | Unresolved guideline |
| --- | --- | --- |
| UN-001 | 17, 19 | Primary strong pink #BE1D6A differs from ADA strong pink #BE266A; ADA RGB printed 190,29,106 matches #BE1D6A, not #BE266A. |
| UN-002 | 17, 19 | Primary Blue #355493 and WIPRO LOGO Blue #351a55 share Blue naming; ADA Wipro Blue #351a55. Define semantic role. |
| UN-003 | 19 | PDF claims ADA colors at least WCAG AA but provides no foreground/background pairs, text sizes, states, or tested contrast. Individual colors cannot independently be WCAG AA. |
| UN-004 | 24 | A4 sizes on page 24 have no explicit unit in extracted table and are not web responsive font sizes. |
| UN-005 | 22, 23 | No font files, web licensing, fallback stacks, or exact available weights provided. |
| UN-006 | 3, 4, 5, 6 | PDF shows logos but provides no production SVG files or geometry to measure letter-o clear space programmatically. |
| UN-007 | 6, 39, 54, 55, 56 | Social media example page 39 says logo 100px, pages 54-56 say 140px; primary digital minimum 140px. |
| UN-008 | 35, 36, 37 | 36px/18px grids are specified for A4/1200x630 creative, not responsive web app layouts. |
| UN-009 | 1–64 | No explicit specs for buttons, forms, cards, tables, app navigation, modals, states or spacing. |
| UN-010 | 19 | No keyboard navigation, focus indicators, touch targets, semantic labels, error messaging or reduced motion specifications. |
| UN-011 | 16, 17 | PDF says palette made up of five colors but primary page includes more named swatches and additional logo/solution groupings. |
| UN-012 | 14 | Page 14 prohibited examples are image-led; individual captions require manual visual verification before encoding granular rules. |
| UN-013 | 4, 6, 7, 16, 17, 18 | Print-only coated paper, CMYK/PMS, minimum mm, and co-branding dimensions should not automatically apply to web. |
| UN-014 | 1 | Guide dated 2022; no confirmation this is the current approved Wipro brand standard. |
| UN-015 | 58, 59 | Disc size, icon stroke width, disc padding and icon sizes are not given. |
| UN-016 | 19 | ADA Strong Pink hex/RGB mismatch and minor transcription/typographical inconsistencies; preserve rather than silently normalize. |

## Separate engineering evidence limitation

Missing local imports and the HTML entry are repository-completeness observations, independent of Wipro brand requirements. They prevent executing the declared application setup. They are not brand violations; no repair, configuration, dependency, or application changes were made. Restore the complete source in a separate change before runtime auditing.

## Next decisions and validation

1. Supply the complete source/assets and a runnable setup, then inspect all five tabs and overlays at recorded desktop/mobile viewports and implemented interaction states.
2. Confirm whether any Wipro adaptation is wanted and authorize its scope separately, retaining Krona identity until then. Confirm the current authoritative guide (UN-014), asset provenance, and relevant image-led examples.
3. Resolve all relevant UN entries, especially conflicting palettes, web fonts/licensing, responsive layout, component states, and accessible foreground/background pairs. Keep print/social guidance outside app scope.
4. Record authorized approver, date, scope and evidence per rule/token/asset; explicitly enable only individually approved, verified records with resolved dependencies. No activation is part of this PR.

Validation performed: GitHub recursive target tree inspection (not truncated); all four uploaded source files read at the pinned revision; all four bundled JSON references parsed; 45 unique rule IDs and component rule links checked; all rule/token/component approval gates remain pending and disabled; 16 issue records preserved. Installation copies the five upstream skill files unchanged. PR scope is limited to those files, root AGENTS.md and this report; existing source blobs must remain identical. No build, lint, browser test, or full compliance result is claimed.

## Concurrent upload at PR creation

Main advanced to 5150595e817d04d400a93d05e6755ac1f4e40826 after the source audit, adding krona-hr---enterprise-people-&-attendance-hub.zip and three avatar JPGs at repository root. The four audited source blobs are unchanged. The PR branch preserves these uploads unchanged, and its documentation is based on the latest main tree. The ZIP contents and JPG visuals/provenance were not inspected; statements about absent assets above describe only the pinned e5bbf395 snapshot. These uploads may supply additional evidence for a subsequent expanded audit, but do not establish a runnable extracted checkout, approved assets, or brand compliance. The original source-only audit remains limited to the stated revision.
