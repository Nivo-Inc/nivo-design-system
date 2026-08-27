# Nivo content and voice

This guide defines how Nivo communicates across product interfaces, websites, support, email, documentation, and AI-assisted experiences. It establishes a shared voice without prescribing product features or workflows.

## 1. Voice promise

Nivo should sound like a mature, brilliant colleague: calm, capable, trustworthy, approachable, and genuinely useful.

**Core principle:** Professional first. Human always. Personality in small, intentional doses.

Nivo helps service providers do consequential, information-rich work. The writing should reduce cognitive load, protect dignity, and make the next useful action clear.

## 2. Voice attributes

### Calm

Use measured language. Explain the situation without amplifying urgency.

- Prefer: “This plan still needs two required fields.”
- Avoid: “Warning! Your plan is incomplete!”

### Direct

Lead with what happened, what matters, or what the reader can do next.

- Prefer: “Add a due date to continue.”
- Avoid: “It appears that a due date may not have been entered.”

### Capable

Be specific enough to be useful. Do not hide uncertainty behind vague reassurance.

- Prefer: “We saved your draft. You can return to it from Plans.”
- Avoid: “Everything should be good to go!”

### Respectful

Assume service providers are skilled professionals working with limited time and complex constraints. Never blame, scold, infantilize, or over-explain.

- Prefer: “Enter the six-digit district ID.”
- Avoid: “You forgot to enter a valid ID.”

### Warm

Use natural language and contractions where they improve flow. Warmth comes from consideration, not jokes, emoji, or excessive enthusiasm.

- Prefer: “You’re all set. We’ll notify the team.”
- Avoid: “Amazing job! 🎉 You crushed it!”

## 3. Audience and terminology

Use the most precise term the context supports.

| Meaning | Preferred term | Guidance |
|---|---|---|
| Broad audience | school teams | Use for mixed roles working together. |
| Specific Nivo user | service provider | Use instead of “user,” “provider,” or “staff member” when referring to the person using Nivo. |
| More than one user | service providers | Keep the full term; “providers” alone can be ambiguous. |
| Person receiving services | student | Use “learner” only when a source or organization explicitly prefers it. |
| Student’s support network | family | Use “parent or guardian” when the legal or account distinction matters. |
| Place or organization | school or district | Use the actual organizational level; do not treat them as interchangeable. |
| Field | special education | Spell out on first reference. Use an abbreviation only when the audience and space clearly require it. |
| Collaborative group | team | Name the specific team when that context matters. |

Use official role, program, disability, and service terminology when it is legally or operationally meaningful. Do not rewrite source-of-record language. When people or organizations express a terminology preference, follow that preference rather than imposing a universal identity convention.

### Avoid by default

- “End user” in reader-facing copy
- “Provider” when “service provider” is intended
- “Kids” when the context calls for “students”
- “Special needs” as a substitute for an accurate program, service, or disability term
- Internal acronyms before they have been explained
- Language that reduces a student or service provider to a status, record, diagnosis, or task

## 4. Voice by context

Nivo has one voice with different levels of compression.

### Product UI

Be brief and operational. State the action or result first.

- Button: “Add service”
- Confirmation: “Service added”
- Help text: “Choose the team members who can edit this plan.”

### Marketing

Allow slightly more warmth and rhythm, but keep claims specific and credible. Do not use fear, inflated transformation language, or vague AI promises.

- Prefer: “Keep plans, progress, and collaboration moving in one clear workspace.”
- Avoid: “Revolutionize special education with magical AI.”

### Support and documentation

Be patient, complete, and sequential. Explain why a step matters when that knowledge helps someone recover or make a decision.

### Email and notifications

Make the subject or opening line useful without requiring the recipient to open the message. Identify the object, change, and necessary action.

- Subject: “Jordan Lee assigned you a plan review”
- Opening: “The review is due September 18.”

### AI-assisted experiences

Be transparent about assistance, uncertainty, and required human review. Never imply that Nivo replaces professional judgment.

- Identify AI-generated or AI-assisted content where that distinction matters.
- Preserve the service provider’s ability to review, edit, reject, and trace important output.
- State when source information is incomplete.
- Do not claim certainty, compliance, or approval that the system cannot verify.
- Use “suggest,” “draft,” or “summarize” when those verbs accurately describe the action.

## 5. Mechanics

### Sentence case

Use sentence case for headings, navigation, buttons, labels, tabs, table headers, and messages.

- Prefer: “Student details”
- Avoid: “Student Details”

Reserve uppercase with increased letter spacing for short eyebrows or metadata labels.

### Pronouns

Address the reader as “you” when it makes an instruction clearer. Avoid repeatedly naming “the service provider” in copy written directly to that person.

Use “Nivo” when naming the product is useful. Use “we” sparingly in support, confirmation, or policy contexts. Product controls should normally name the action rather than the actor.

### Contractions

Use common contractions such as “you’ll,” “we’ll,” “can’t,” and “isn’t” when they sound natural. Avoid slang and highly conversational contractions.

### Punctuation

- Do not end buttons, navigation items, field labels, tabs, or short headings with periods.
- Use periods for complete help text, errors, and notifications.
- Avoid exclamation marks in core product UI. Use at most one in genuinely celebratory marketing copy.
- Do not use ellipses to create suspense. An ellipsis may indicate that an action opens a follow-up step only when that convention is useful and consistently applied.

### Numbers, dates, and time

- Use numerals for counts, measurements, dates, ages, and steps.
- Use an unambiguous month-name format in prose: “September 18, 2026.”
- Use the locale-aware format supplied by the product for dense tables and forms.
- Include the time zone when recipients may be in different zones.
- Do not use relative dates such as “tomorrow” without also making the exact date available when consequences matter.

## 6. Interface patterns

### Buttons

Start with a specific verb and name the object when useful.

- Prefer: “Create plan,” “Invite service provider,” “Save changes”
- Avoid: “Submit,” “Continue” without context, “Yes,” “OK”

Use “Cancel” for a reversible exit that discards no saved work. Name destructive actions explicitly: “Delete draft,” not “Confirm.”

### Links

Describe the destination or information.

- Prefer: “View progress report”
- Avoid: “Click here,” “Learn more” when a more specific label fits

### Labels and help text

Keep labels persistent and concise. Use help text to explain the expected format, consequence, or source—not to repeat the label.

- Label: “District ID”
- Help: “Enter the six-digit ID provided by your district.”

### Validation and errors

An error should answer three questions when relevant:

1. What happened?
2. Where did it happen?
3. What can the service provider do next?

- Prefer: “Enter a date after the plan start date.”
- Avoid: “Invalid date,” “Something went wrong,” “User error”

Do not reveal private or security-sensitive information in errors. Do not promise that data was saved unless the system confirmed it.

### Success

Confirm the result without celebration theater. Include the next step only when it is useful.

- “Changes saved”
- “Invitation sent to Maya Chen”
- “Draft created. Add services when you’re ready.”

### Loading

Name the work in progress. Do not show an indeterminate “Loading…” message when the product can be more specific.

- “Saving changes…”
- “Loading student records…”
- “Preparing the progress summary…”

Never imply completion while work is still running.

### Empty states

Explain why the area is empty and provide one useful next step when available.

- Heading: “No active plans”
- Body: “Plans assigned to you will appear here.”
- Action: “Create plan”

Avoid “Nothing here,” jokes, mascots, or celebratory copy for an empty work area.

### Destructive confirmation

Name the object and consequence. Button labels should remain explicit.

- Title: “Delete progress note?”
- Body: “This removes the note for everyone on the team. This action can’t be undone.”
- Actions: “Cancel” and “Delete note”

### Permissions

Explain the restriction without blaming an administrator or implying a system failure.

- “You can view this plan, but only an owner can edit it.”
- “Ask a school administrator for access.”

## 7. Accessibility and comprehension

- Put the most important information first.
- Prefer familiar words and short sentences without removing necessary precision.
- Use headings and lists to make long instructions scannable.
- Do not communicate status, urgency, or required action through color alone.
- Write link and button labels that make sense out of context.
- Give icons accessible names only when they carry meaning; hide decorative icons from assistive technology.
- Do not rely on placeholder text for instructions or labels.
- Avoid directional language such as “the button on the right” when the layout can change.

## 8. Reusable examples

| Situation | Preferred | Avoid |
|---|---|---|
| Required value | “Enter the student’s start date.” | “This field is required.” |
| Save failure | “We couldn’t save your changes. Check your connection and try again.” | “Error 500.” |
| Search without results | “No students match ‘Rivers.’ Check the spelling or try another search.” | “No data.” |
| Invitation sent | “Invitation sent to Alex Rivera” | “Success!” |
| Permission restriction | “Only plan owners can change this setting.” | “Access denied.” |
| AI draft | “Draft generated from the selected notes. Review it before sharing.” | “Your final report is ready.” |
| Unsaved exit | “Leave without saving?” | “Are you sure?” |

## 9. Review checklist

Before publishing Nivo copy, confirm that it:

- Uses the approved audience and role terms
- Leads with the useful information or action
- Gives enough context to make a safe decision
- Avoids blame, hype, cuteness, and unnecessary urgency
- Names actions and objects specifically
- Communicates truthfully about system and AI states
- Protects student and service-provider dignity and privacy
- Remains understandable without relying on layout, color, or iconography
- Sounds like a calm expert and supportive colleague

## 10. Instruction for AI collaborators

When generating Nivo copy:

1. Read this guide and `NIVO_DESIGN_SYSTEM.md`.
2. Use “service provider” for a specific Nivo user unless a more precise real-world role is known.
3. Use “school teams” for a broad mixed-role audience.
4. Preserve exact legal, organizational, and source-of-record terminology.
5. Prefer a concise useful answer over personality.
6. Do not invent permissions, completion states, deadlines, policy claims, student information, or professional conclusions.
7. Flag missing context instead of filling consequential gaps with assumptions.
