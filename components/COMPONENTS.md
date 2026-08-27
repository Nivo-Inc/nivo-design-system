# Nivo UI component specifications

## Shared contract

Every interactive component must support the states relevant to its behavior:

- Default
- Hover
- Focus-visible
- Active or pressed
- Disabled
- Loading when an action may take time
- Selected, invalid, expanded, or current when applicable

Use semantic HTML first. Add ARIA only when native semantics are insufficient. All controls must have an accessible name, a visible focus indicator, and a keyboard path that does not trap the user.

## Buttons

### Classes

| Class | Purpose |
|---|---|
| `.nivo-button` | Primary button |
| `.nivo-button--secondary` | Secondary action |
| `.nivo-button--ghost` | Low-emphasis contextual action |
| `.nivo-button--danger` | Destructive action |
| `.nivo-button--sm` | Compact 32px action |
| `.nivo-button--lg` | Prominent 48px action |
| `.nivo-button--icon` | Square icon-only button; requires an accessible name |

Use a native `button` for in-page actions and an anchor for navigation. Do not make a `div` clickable. A region should normally contain one primary action.

Loading buttons use `aria-busy="true"`, retain their action name, and prevent duplicate submission. Prefer native `disabled`; when `aria-disabled` is required, prevent activation in application logic.

## Links

Use `.nivo-link` for navigation embedded in text or supporting actions. Link text should describe the destination. Avoid `click here`.

## Form fields

### Classes

| Class | Purpose |
|---|---|
| `.nivo-field` | Label, control, and message layout |
| `.nivo-field__label` | Persistent visible label |
| `.nivo-field__help` | Supporting instructions |
| `.nivo-field__error` | Corrective validation message |
| `.nivo-input` | Text-like inputs |
| `.nivo-select` | Native select |
| `.nivo-textarea` | Multi-line input |
| `.nivo-input-group` | Closely connected input and action |

Placeholders provide examples, not labels. Connect help and error messages with `aria-describedby`. Set `aria-invalid="true"` only when a field has been evaluated and is invalid. Error messages should explain how to correct the value.

Preserve native autofill, input types, and keyboard behavior. Do not block copy, paste, password managers, or browser validation without a concrete product reason.

## Checkboxes

Use `.nivo-check` for zero or more selections. The label must toggle the native checkbox. Group related controls in a `fieldset` with a `legend`.

## Radio buttons

Use `.nivo-radio` for exactly one choice from a small visible set. All options in a group share the same `name`. Default selection is appropriate only when the product can make a safe assumption.

## Switches

Use `.nivo-switch` for a binary setting that takes effect immediately. Use a checkbox when the value is submitted as part of a form or requires an explicit Save action.

## Badges

### Classes

| Class | Meaning |
|---|---|
| `.nivo-badge` | Neutral or draft |
| `.nivo-badge--lavender` | Review or collaboration category |
| `.nivo-badge--blue` | In progress or informational category |
| `.nivo-badge--mint` | Complete or positive category |
| `.nivo-badge--yellow` | Due soon or attention category |
| `.nivo-badge--danger` | Overdue or blocked category |

Badge text carries the meaning; color is supporting information. Do not use a color-only dot as the sole status indicator.

## Alerts

Use `.nivo-alert` for information, `.nivo-alert--success` for confirmed success, `.nivo-alert--warning` for attention, and `.nivo-alert--danger` for failure or destructive risk.

Use `role="alert"` only when an urgent message is inserted dynamically and must interrupt assistive technology. Static page alerts do not need an alert role. Dismiss buttons require an accessible name.

## Progress and skeletons

Determinate progress uses native `progress` or `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`. Use skeletons only when the layout is known and content is actively loading. The containing region exposes `aria-busy="true"`.

Respect reduced-motion preferences and avoid indefinite animation when a truthful static state is possible.

## Cards

Use `.nivo-card` to group one coherent topic. `.nivo-card--interactive` must be a real link or button, not a focusable non-semantic container. `.nivo-card--selected` indicates a selected card within a selection model; it should not be used merely for decoration.

Avoid nesting multiple unrelated actions inside a fully clickable card. When multiple actions are necessary, make the card static and expose explicit controls.

## Breadcrumbs

Wrap `.nivo-breadcrumb` in a navigation landmark named `Breadcrumb`. The current page is not a link and uses `aria-current="page"`.

## Tabs

The tablist uses `role="tablist"`; each tab owns a panel through `aria-controls`; each panel references its tab with `aria-labelledby`.

Keyboard behavior:

- Left and Right move between tabs
- Home moves to the first tab
- End moves to the last tab
- The active tab has `aria-selected="true"` and `tabindex="0"`
- Inactive tabs have `tabindex="-1"`

Use tabs for peer views of the same context. Do not use tabs as a multi-step form.

## Pagination

Wrap pagination in a navigation landmark with a specific accessible name. The current page uses `aria-current="page"`. Previous and Next buttons have explicit accessible names and become disabled at the range boundaries.

## Menus

Menu triggers expose `aria-haspopup="menu"` and `aria-expanded`. Menus support Arrow Up, Arrow Down, Home, End, Escape, and click-outside dismissal. Restore focus to the trigger after Escape or action selection.

Use a menu for a short list of contextual commands. Use a select for choosing a value and ordinary links for site navigation.

## Tables

Data tables include a descriptive caption, column or row headers with correct `scope`, and `aria-sort` on sortable headers. Sorting is activated by a real button inside the header.

Keep data aligned, avoid excessive cell decoration, and preserve horizontal scrolling on narrow screens. If a table becomes primarily a list of cards on mobile, maintain equivalent reading order and accessible labels.

## Avatars

Use an image with meaningful alt text when identity depends on the photograph. Initial-only avatars use a text equivalent through nearby visible content or an accessible label. Do not rely on avatar color to identify a person.

## Tooltips

Tooltips clarify an unfamiliar control; they do not contain interactive content. They appear on hover and keyboard focus and should be connected to the trigger with `aria-describedby` in the production framework.

Do not use tooltips to hide essential instructions, validation, or required context.

## Dialogs

Prefer the native `dialog` element when browser support meets product requirements. Dialogs have a visible title, close control, logical initial focus, trapped focus while modal, and Escape dismissal unless the action is an irreversible critical flow.

Restore focus to the trigger after close. Destructive confirmation identifies the object and consequence explicitly.

## Toasts

Place notifications in a persistent live region. Use `role="status"` for non-urgent confirmation and `role="alert"` sparingly for urgent failure. Toasts do not contain information that is unavailable elsewhere, and they remain long enough to read.

## Empty states

An empty state includes:

1. A plain explanation of why the area is empty
2. One useful next step when available
3. Optional restrained brand artwork

Avoid celebration, mascots, or decorative complexity. A successful zero state may need no action.

## Responsive behavior

- Controls preserve a minimum 40px visual height and adequate target spacing
- Tables scroll horizontally before columns become unreadable
- Menus and dialogs remain within a 16px mobile viewport gutter
- Actions may wrap but retain their hierarchy
- Text does not require horizontal scrolling at 320px viewport width

## Production test checklist

- Keyboard-only navigation reaches and operates every control
- Focus is always visible
- Screen-reader names and relationships are correct
- Color is never the only carrier of meaning
- Normal text meets WCAG AA contrast
- Disabled and loading states prevent duplicate activation
- Reduced-motion preference is honored
- 200% browser zoom remains usable
- 320px responsive layout has no page-level horizontal overflow
- Automated unit, accessibility, and visual-regression tests cover every component state
