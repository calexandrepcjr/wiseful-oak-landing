<div align="center">

# Wiseful Oak Systems

**Engineering Solutions Rooted in Deep Expertise**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carlos-alexandre-pires-de-carvalho-junior-04110033/)
[![Email](https://img.shields.io/badge/Email-Get%20in%20Touch-D4A045?style=for-the-badge&logo=protonmail&logoColor=white)](mailto:wisefuloaksystems@pm.me)

---

*Over 15 years of building sustainable architectures across healthcare, finance, logistics, and eCommerce.*
*We turn complex challenges into elegant, high-impact systems.*

</div>

---

## About the Company

**Wiseful Oak Systems LLC** is a software engineering consultancy based in **Sao Paulo, Brazil**, serving clients worldwide. We specialize in building sustainable, scalable software architectures and delivering high-impact engineering solutions that stand the test of time.

Every engagement is treated as a partnership. We deeply understand our clients' domains before writing a single line of code, ensuring that every solution is purpose-built, maintainable, and aligned with real business goals.

## About the Founder

**Carlos Alexandre** is a seasoned Software Development Engineer with **15+ years** of hands-on experience spanning founding engineering roles through complex enterprise systems. His deep technical expertise is paired with a genuine passion for sustainable architecture, clean code, and mentoring engineering teams.

Carlos brings a rare combination of strategic thinking and execution ability, having delivered solutions across four major industry verticals. Whether it is designing a greenfield system or modernizing a legacy platform, he approaches every challenge with rigor, clarity, and a commitment to quality.

## Services

| Service | Description |
|---|---|
| **Architecture & Design** | Sustainable, scalable system architectures tailored to your business domain. From microservices to event-driven systems, designed for growth. |
| **Full-Stack Development** | End-to-end engineering of robust applications using modern stacks. Clean code, fully tested, and production-ready from day one. |
| **Technical Leadership** | Fractional CTO and tech lead services. We mentor teams, define engineering standards, and accelerate delivery without the overhead of a full-time hire. |
| **Legacy Modernization** | Transform aging systems into modern, maintainable platforms without disrupting ongoing operations. Incremental, safe, and strategic. |

## Industry Domains

- **Healthcare** -- Patient systems, regulatory compliance, and medical data platforms built with security and reliability at their core.
- **Finance** -- Trading systems, payment infrastructure, and fintech solutions engineered for precision and scale.
- **Logistics** -- Supply chain optimization, fleet management, and real-time tracking systems that keep operations moving.
- **eCommerce** -- Marketplaces, checkout flows, and inventory systems designed for high throughput and seamless user experience.

## Tech Stack

This landing page is built with a modern, production-grade frontend stack:

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui (Radix UI) |
| Animation | Framer Motion |
| Routing | React Router |
| Testing | Vitest + Playwright |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run unit tests
npx vitest run

# Run end-to-end tests
npx playwright test

# Build for production
npm run build
```

## Deployment

This site is a fully static SPA hosted on **GitHub Pages**. A GitHub Actions
workflow (`.github/workflows/deploy.yml`) builds the app and publishes it on every
push to `main` — nothing built is committed to the repo.

**One-time setup:** In the repository, go to **Settings → Pages → Build and
deployment** and set **Source = "GitHub Actions"**. The first push to `main` (or a
manual run via the Actions tab) then deploys to:

```
https://calexandrepcjr.github.io/wiseful-oak-landing/
```

The build serves from the apex root (`base` = `/`) and copies `dist/index.html` to
`dist/404.html` so client-side routes (e.g. `/news/<slug>`) survive a direct load or
refresh. `public/CNAME` pins the custom domain on every deploy.

### Custom domain (wisefuloak.com)

The code side is already in place: `public/CNAME` contains `wisefuloak.com`, the build
serves from `/`, and the OG image points at `https://wisefuloak.com/og-image.jpg`.
The remaining steps are the GitHub Pages setting and DNS (the actual cutover from the
old host). GitHub Pages provides free auto-provisioned HTTPS for custom domains.

1. **Settings → Pages → Custom domain:** enter `wisefuloak.com` and save. This starts
   GitHub's DNS check and certificate provisioning.
2. **DNS at your registrar** (this is the cutover — traffic moves off the old host here):
   - Apex `wisefuloak.com` → four `A` records: `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (plus the matching
     `AAAA` records `2606:50c0:8000::153`, `…8001::153`, `…8002::153`, `…8003::153`
     for IPv6).
   - `www.wisefuloak.com` → `CNAME` to `calexandrepcjr.github.io` (GitHub redirects
     www → apex automatically).
3. Wait for DNS to propagate and the cert to provision (minutes to a few hours), then
   enable **"Enforce HTTPS"** under Settings → Pages.

> Until the DNS records above are changed, `wisefuloak.com` keeps resolving to the old
> host — so there is no downtime; the switch happens the moment DNS propagates.

## Project Structure

```
src/
  components/
    Navbar.tsx            # Fixed navigation with smooth scrolling
    HeroSection.tsx       # Full-screen hero with CTAs
    ServicesSection.tsx    # Service offering cards
    AboutSection.tsx      # Company story and key stats
    DomainsSection.tsx    # Industry vertical showcase
    ContactSection.tsx    # Contact CTAs and location info
    Footer.tsx            # Copyright and branding
  pages/
    Index.tsx             # Main landing page composition
```

## Contact

| Channel | Details |
|---|---|
| **Email** | [wisefuloaksystems@pm.me](mailto:wisefuloaksystems@pm.me) |
| **LinkedIn** | [Carlos Alexandre](https://www.linkedin.com/in/carlos-alexandre-pires-de-carvalho-junior-04110033/) |
| **Location** | Sao Paulo, Brazil -- Serving clients worldwide |

---

<div align="center">

**Wiseful Oak Systems LLC**

*Building what matters, with the expertise it deserves.*

</div>

## Engineering culture recommendations

The homepage's engineering culture section is controlled in
`src/data/leadership-recommendations.ts`:

- Set `showEngineeringCulture = false` to hide the whole section.
- Set an individual recommendation's `visible` field to `false` to hide just that quote.
- Restore either value to `true` to display the retained content again.

Commit the change to `main`; the normal GitHub Pages workflow deploys it.
Hidden content is not rendered in the page or accessibility tree. This is a display
control, **not a privacy control**: this repository and its history are public,
and retained text may remain accessible in source code or built JavaScript.
Hiding a quote does not revoke or erase previously published copies.

Keep complete LinkedIn exports and private permission records outside this repository.
The curated excerpts are personal recommendations about Carlos Alexandre and must
retain their original wording, attribution, and professional context. They must
not be relabeled as customer endorsements of Wiseful Oak. The site owner authorized
this publication; that is not a record of the authors' permission for off-platform reuse.
