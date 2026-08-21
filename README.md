# Naomi Moraa Osoro — Portfolio

A production-ready professional portfolio built from Naomi's CV, positioned as a career-impact brand rather than an online résumé. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

Live sections: Hero → Impact Snapshot → About → Experience → Featured Projects (case studies) → Skills → Why Naomi (differentiators) → How I Work → Education → Contact.

---

## 1. Running it locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run build   # production build
npm run start   # run the production build locally
npx eslint .    # lint
```

---

## 2. Where to edit content

**Almost everything on the site is driven by one file: [`lib/data.ts`](lib/data.ts).** Components render this data — they don't contain content. To update the site, edit this file; you rarely need to touch a component.

| To change...                          | Edit...                                                        |
| -------------------------------------- | --------------------------------------------------------------- |
| Name, positioning statement, email, phone, LinkedIn | `person` in `lib/data.ts` |
| Impact snapshot metrics                | `impactMetrics` in `lib/data.ts` |
| About paragraphs                       | `about` in `lib/data.ts` |
| Work experience & achievements         | `experience` in `lib/data.ts` |
| Featured projects / case studies       | `projects` in `lib/data.ts` (see field notes below) |
| Skills & categories                    | `skillCategories` in `lib/data.ts` |
| Differentiators ("Why Naomi")          | `differentiators` in `lib/data.ts` |
| "How I Work" stages                    | `howIWork` in `lib/data.ts` |
| Education & training note              | `education`, `trainingNote` in `lib/data.ts` |
| Top navigation links                   | `nav` in `lib/data.ts` |

### Adding or editing a project / case study

Each entry in the `projects` array in `lib/data.ts` automatically:

- appears as a card in the Featured Work grid (and in the relevant capability filter, from `categories`)
- gets its own detail page at `/projects/[slug]`
- is added to `sitemap.xml`

To add a new one, copy an existing project object and fill in `slug` (URL-safe, unique), `name`, `organization`, `market`, `dates`, `categories`, `summary`, `context`, `problem`, `role`, `approach`, `solution`, `impact`, `skills`, and `featured`.

**Only add information that is true and verifiable.** Do not add metrics, client names, or outcomes that aren't real — see the "Do not fabricate" note under the hireability audit below.

### Updating your CV file

1. Replace [`public/Naomi-Moraa-Osoro-CV.pdf`](public/Naomi-Moraa-Osoro-CV.pdf) with the new PDF, **keeping the exact same filename**.
2. If you rename the file, also update `person.cvFile` in `lib/data.ts`.

### Updating your profile photo

The site currently ships with a placeholder initials avatar ([`components/Avatar.tsx`](components/Avatar.tsx)) since no photo was provided. To use a real photo:

1. Add your image to `public/` (e.g. `public/avatar.jpg`).
2. Open `components/Avatar.tsx` and replace its contents with a Next.js `<Image />` pointing at `/avatar.jpg`, keeping the same rounded container and `aria-label`.

### Social links

Update `person.linkedin` in `lib/data.ts`. A GitHub link was not included because none was found on the CV — add a `github` field to `person` and wire it into `Hero.tsx`/`Contact.tsx` if you'd like one added later.

---

## 3. Connecting the contact form

The contact form (`components/ContactForm.tsx` → `app/api/contact/route.ts`) works out of the box: it validates input, blocks obvious bots with a honeypot field, and shows clear success/error states. **By default it does not send email anywhere** — submissions are accepted but only logged server-side, so nothing breaks if you don't configure anything.

To make it actually deliver email:

1. Create a free account at [resend.com](https://resend.com) and get an API key.
2. Copy `.env.example` to `.env.local` and fill in:
   ```
   RESEND_API_KEY=your_key_here
   CONTACT_TO_EMAIL=missmoraaosoro@gmail.com
   ```
3. Restart the dev server (or redeploy). Messages will now be emailed to `CONTACT_TO_EMAIL`.

You're not required to use Resend — `app/api/contact/route.ts` is a small, readable file; swap in any email provider's API.

---

## 4. Analytics

[`lib/analytics.ts`](lib/analytics.ts) is a minimal, privacy-conscious event hook. **No analytics provider is connected by default — nothing is tracked and no personal data is collected out of the box.** It already fires anonymous, aggregate events for the moments that matter to a hiring audience: `cv_download`, `project_view`, `contact_click`, `linkedin_click`, `email_click`, `contact_form_submit`.

To connect a provider (e.g. [Plausible](https://plausible.io) or [Umami](https://umami.is)):

- **Plausible**: add its script tag to `app/layout.tsx` — `track()` already auto-detects `window.plausible` and will start sending events immediately.
- **Anything else**: implement the send inside `track()` in `lib/analytics.ts`.

---

## 5. Deployment (Vercel)

This is a standard Next.js App Router project — Vercel detects it automatically.

1. Push this repository to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. No environment variables are required to deploy. Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in the Vercel project's Environment Variables settings if you've set up the contact form.
4. After the first deploy, update `person.siteUrl` in `lib/data.ts` to your real production URL (used for canonical links, sitemap, Open Graph, and JSON-LD) and redeploy.

Any other Node-compatible host (Netlify, Render, etc.) works too — the project has no Vercel-specific code.

---

## 6. Architecture notes

- **`lib/data.ts` / `lib/types.ts`** — all content and its shape, separated from presentation.
- **`components/`** — one component per section, each just rendering `lib/data.ts`.
- **`app/`** — routes: the home page, `/projects/[slug]` case study pages, `sitemap.ts`, `robots.ts`, and the contact API route.
- **SEO**: per-page metadata, Open Graph/Twitter cards, canonical URLs, a Person JSON-LD block in `app/layout.tsx`, generated `sitemap.xml` and `robots.txt`.
- **Accessibility**: semantic landmarks and heading order, skip-to-content link, visible focus states, labeled form fields, `prefers-reduced-motion` respected in both CSS and the JS-driven reveal/counter animations, sufficient color contrast in both themes.
- **Performance**: no client-side UI framework beyond React; scroll-reveal and counters use `IntersectionObserver`/`requestAnimationFrame` directly (no animation library); fonts loaded via `next/font` with `display: swap`; project pages are statically generated at build time.
- **Dark mode**: class-based (`.dark`), toggled via `components/ThemeToggle.tsx`, persisted to `localStorage`, with an inline head script to avoid a flash of the wrong theme.

---

## 7. Hireability audit

A quick audit of the first version against the stated goal — "does this help Naomi get interviews?"

### Portfolio improvements (implemented in this build)

1. **Led with positioning, not job titles.** The hero opens with what Naomi does and where she's created impact, not "IT Intern → Factory Support Developer."
2. **Reorganized CV bullets around impact, not duty.** Every achievement was rewritten in an action → responsibility → impact structure (e.g. "Led the automation of..." rather than "Responsible for...").
3. **Turned six buried CV bullets into full case studies** (OR Optimization Dashboard, EHS platform, defect-tracking automation, the Zimbabwe audit, the mail-order automation, the Quality Control app) — each now shows context, problem, role, approach, solution and impact, which a bullet list can't.
4. **Made the multi-market scope visible early**, since "supported 4 African markets inside a multinational" is a genuine differentiator that was previously buried in bullet text.
5. **Grouped skills by what they're for**, not as arbitrary percentage bars — recruiters can scan for "does she know Power BI/SAP/ServiceNow" in seconds.

### CV / content improvements (for Naomi to consider — not fabricated, so not added automatically)

1. **Quantify more of the case studies.** The EHS platform and defect-tracking automation currently describe outcomes qualitatively ("cost savings," "real-time visibility"). If Naomi has or can get approximate figures (e.g. annual licensing cost avoided, % reduction in defect-reporting time), adding them would strengthen those two case studies significantly.
2. **Add 1–2 concrete numbers to the Zimbabwe audit story** — e.g. how many process areas were reviewed, or the audit scope — to make "played a key role" more specific.
3. **Consider a short list of tools/certifications in progress**, if any (e.g. a PL-900 or similar Power Platform certification) — the CV lists strong applied Power Platform experience but no formal certification, which some ATS/recruiter filters look for explicitly.
4. **A professional photo** would strengthen the hero — the site currently uses an initials placeholder (see §2 above for how to swap it in).
5. **A short list of tools she's used but the CV doesn't elaborate on** (e.g. specific Power BI features, SAP modules) could sharpen the "Technology" skill section further if she wants to target more technical roles.

None of the above were added to the live site, since none are confirmed by the source CV — adding them is a content decision for Naomi, not something to infer.
