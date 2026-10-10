# Frontend development instructions

For every frontend development task, read and apply
`.agents/skills/brand-compliance/SKILL.md` before making changes to UI,
components, styles, design tokens, layouts, imagery, or user-facing copy.
Read its reference files and enforce only verified, explicitly approved brand
requirements. Never invent brand specifications or treat pending requirements
as approved. Record missing, ambiguous, conflicting, or unverified guidelines
in `references/unresolved-guidelines.json` within the skill directory.
Continue work that does not depend on unresolved brand decisions; report any
remaining approval dependencies and do not claim full brand compliance while
relevant requirements are unresolved.

## Krona identity and audit safeguards

Preserve Krona’s existing name, logos, fonts, palette, content, and interactions unless an explicit implementation request authorizes a change. Installing the Wipro reference skill does not authorize rebranding. Keep pending rules and tokens disabled; do not export them into application styles or enforce them in CI. The current adaptation review is audit-only and makes no application code changes.
