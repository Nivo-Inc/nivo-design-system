# Nivo icon system

Nivo uses [Lucide](https://lucide.dev/) as its base product icon library. Lucide provides a broad, consistent set while allowing Nivo to control size, stroke, color, meaning, and accessibility.

This system standardizes visual and semantic usage. It does not restrict which product workflows developers or AI collaborators may create.

## 1. Approved source

- **Base library:** Lucide
- **License:** ISC, with MIT terms for Feather-derived portions
- **Official source:** https://lucide.dev/
- **Nivo semantic map:** `icons/icon-map.json`
- **License notice:** `THIRD_PARTY_NOTICES.md`

Use an official Lucide package for the product framework. Pin the installed version in the product lockfile. Update Lucide independently from Nivo only when icon-name changes have been reviewed against the semantic map.

Do not use Lucide for the Nivo logo or other brand marks. The official assets under `brand/` remain the only source for Nivo identity artwork.

## 2. Visual specification

| Property | Nivo value |
|---|---|
| Grid | 24 × 24 |
| Control size | 20px |
| Standard size | 24px |
| Large informational size | 32px, rarely |
| Stroke width | 1.75px |
| Line cap | Round |
| Line join | Round |
| Fill | None by default |
| Color | `currentColor` |

Icons inherit the text or semantic color of their container. Do not assign independent decorative colors inside an icon.

Use filled icons only when a selected state or established convention requires a stronger distinction. Do not mix unrelated outline, filled, duotone, and illustrative families in one interface.

## 3. Size and placement

### 20px

Use inside buttons, fields, compact menus, table actions, badges, and other controls.

### 24px

Use for standalone actions, navigation, alerts, and ordinary content support.

### 32px

Use sparingly in empty states or informational panels. Large icons remain supporting elements; they do not become illustrations.

Icons do not determine the interaction target. Icon-only controls must preserve at least a 40px visual control height and adequate target spacing.

Align icons optically with adjacent text. Use the spacing scale rather than manually nudging individual icons unless a documented optical correction is required.

## 4. Semantic selection

Choose an icon for its meaning, not because its silhouette is attractive.

1. Check `icons/icon-map.json` for an established meaning.
2. Reuse the mapped icon when that meaning matches.
3. If no mapping exists, select the clearest Lucide icon and document the new mapping with the feature change.
4. If Lucide lacks the concept, first combine an icon with a specific text label.
5. Create a custom product icon only when the concept is recurring, important, and genuinely absent from Lucide.

Do not silently substitute another icon for an established action. For example, `Trash2` always means delete; it should not also mean archive or remove from a view.

## 5. Common distinctions

- **Add** uses `Plus`; **create a specific object** may use `Plus` with a text label naming that object.
- **Delete** uses `Trash2`; **remove from a collection** may use `X` only when the object itself is not deleted.
- **Close** uses `X`; **back** uses `ArrowLeft`; **collapse** uses `ChevronUp` or `ChevronDown`.
- **Settings** uses `Settings`; contextual adjustment or filtering uses `SlidersHorizontal` or `ListFilter` as mapped.
- **Warning** uses `TriangleAlert`; **error** uses `CircleAlert`; **information** uses `Info`; **success** uses `CircleCheck`.
- **Service provider** uses `Briefcase` when the role itself matters and `UserRound` when only a person is being represented.
- **School team** uses `UsersRound`; a specific student uses `GraduationCap` only when the education context needs to be explicit.
- **AI-assisted action** uses `Sparkles` only when the feature is genuinely AI-assisted. It is not a general decoration or Nivo brand symbol.

## 6. Color and status

Icons support status; they never carry it alone.

- Neutral action: current text color
- Information: `--nivo-info`
- Success: `--nivo-success`
- Warning: `--nivo-warning`
- Danger: `--nivo-danger`
- Disabled: `--nivo-text-disabled`

Pair status icons with a visible text label or message. Do not rely on green checks, yellow triangles, or red circles without words.

## 7. Accessibility

### Decorative icons

Hide icons from assistive technology when visible text already provides the meaning.

```html
<button type="button">
  <svg aria-hidden="true"><!-- icon --></svg>
  Save changes
</button>
```

### Icon-only controls

The control—not the SVG—gets an accessible name.

```html
<button type="button" aria-label="Close dialog">
  <svg aria-hidden="true"><!-- X icon --></svg>
</button>
```

### Informational icons

When an icon adds meaning not expressed elsewhere, provide visible text whenever possible. Use hidden text only when a visible label would be redundant or disrupt a well-established control pattern.

Never place interactive behavior on a bare SVG. Use a semantic button or link with focus, keyboard, hover, pressed, and disabled states.

## 8. Motion

Most icons remain static.

- A loading indicator may rotate when no truthful determinate state is available.
- A disclosure chevron may rotate or switch direction over the standard 180ms duration.
- Success or error icons may enter with a subtle opacity transition.
- Respect `prefers-reduced-motion`.

Avoid bouncing, pulsing, drawing-on effects, decorative perpetual motion, and animation that delays an action.

## 9. Custom icons

A custom product icon must:

- Represent a recurring Nivo-specific concept unavailable in Lucide
- Use the same 24 × 24 grid and approximately 1.75px optical stroke
- Use round caps and joins
- Remain legible at 20px
- Work in one color with `currentColor`
- Include usage meaning and accessibility guidance
- Be reviewed as a design-system addition

Do not create custom icons to depict individual product features before those features exist. Do not turn sections of the Nivo logo into ordinary UI icons.

## 10. Framework guidance

Import icons by name rather than loading the entire library. Keep the semantic mapping in application wrappers where a framework benefits from it.

Example React usage:

```jsx
import { Save } from "lucide-react";

<button className="nivo-button" type="button">
  <Save aria-hidden="true" size={20} strokeWidth={1.75} />
  Save changes
</button>
```

Equivalent implementations in other frameworks must preserve the icon name, visual tokens, semantic control, and accessibility behavior.

## 11. Review checklist

- The icon meaning matches the semantic map
- The icon comes from Lucide or has approved custom status
- Size, stroke, cap, join, fill, and color follow Nivo tokens
- Visible text carries important status and consequences
- Decorative icons are hidden from assistive technology
- Icon-only controls have an accessible name and adequate target size
- The icon does not replace the Nivo logo or become unapproved brand artwork
- A new semantic meaning is added to `icon-map.json`

## 12. Instruction for AI collaborators

When generating Nivo UI:

1. Read `icons/icon-map.json` before choosing icons.
2. Import the mapped Lucide name when the established meaning fits.
3. Apply 20px or 24px sizing and a 1.75px stroke.
4. Use `currentColor` and Nivo semantic tokens.
5. Include visible text for unfamiliar, consequential, or status-bearing actions.
6. Do not invent custom icons unless explicitly asked to extend the design system.
