# Contributing to the Nivo Design System

The design system should change deliberately. A good contribution keeps design intent, exact values, written guidance, and implementation aligned.

## Before proposing a change

- Identify the user or product problem, not only the visual preference.
- Check whether an existing token or component already covers the need.
- Prefer extending a shared pattern over adding a one-off exception.
- Never edit or regenerate the official logo geometry.

## Change requirements

### Foundation changes

Update both `tokens/design-tokens.json` and `tokens/tokens.css`. Then update every affected example, component, and written rule.

### Component changes

Update the reusable component files, the interactive catalog, and `components/COMPONENTS.md`. Document all relevant states: default, hover, focus, pressed or selected, disabled, loading, empty, and error.

### Brand changes

Treat files under `brand/` as controlled assets. Changes require explicit brand-owner approval. The master logo must retain the SHA-256 digest documented in the README and asset manifest.

## Required verification

- Test at desktop and at a 320px-wide viewport.
- Confirm keyboard operation and visible focus states.
- Check text and interactive-control contrast.
- Confirm status is communicated with text or iconography, not color alone.
- Respect reduced-motion preferences.
- Check internal links and asset paths.
- Confirm the master-logo checksum has not changed.

Run this checksum command from the repository root:

```sh
shasum -a 256 brand/logo/nivo-mark-master.svg
```

The expected value is:

```text
8bad8637598c026a68a3ac3701c2376215882693dd22858a1745609d03e97247
```

## Pull requests

Keep pull requests focused. Include:

- The problem and intended outcome
- Screenshots for visual changes at desktop and mobile sizes
- Accessibility and responsive checks performed
- Any token, component, or migration impact
- A changelog entry for user-facing changes

Use semantic versioning:

- **Patch** for documentation corrections and compatible fixes
- **Minor** for new compatible tokens, components, or variants
- **Major** for removals or changes that require product migration

## Definition of done

A change is complete only when the exact source values, visual documentation, component behavior, accessibility guidance, and changelog agree.
