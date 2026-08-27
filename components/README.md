# Nivo UI Component Library v1

Open `index.html` in a browser to view and interact with the complete component catalog.

## Files

- `index.html` - interactive component catalog
- `nivo-components.css` - framework-neutral production styles
- `nivo-components.js` - accessible example behavior for tabs, menus, dialogs, sorting, pagination, loading, and notifications
- `catalog.css` - documentation layout only; product applications do not need it
- `COMPONENTS.md` - usage, API, state, and accessibility specifications

The library consumes `../tokens/tokens.css`. Load tokens before component styles:

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/nivo-components.css">
```

## Framework integration

The semantic markup and CSS are intentionally framework-neutral. In a production React, Vue, Svelte, or server-rendered application:

1. Preserve the documented HTML semantics and ARIA relationships.
2. Wrap each component in the application's component system.
3. Reimplement interaction behavior with the framework's state model.
4. Keep the official class names or map them without changing token values.
5. Add automated keyboard, accessibility, and visual-regression tests.

Do not ship the catalog layout styles as part of the application bundle.
