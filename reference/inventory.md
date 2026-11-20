# Phase 0 live-site inventory

Checked in a real browser on 2026-11-20 at `https://www.jayproinfratech.com/`. The current source workspace was empty before this inventory (`rg --files` returned no project files). Findings below describe the live site, not assumptions about an implementation.

## Route map

### Sitemap routes (verified from `/sitemap.xml`)

| URL | Status in sitemap | Page/notes |
|---|---|---|
| `/` | verified | Homepage; content observed below |
| `/services` | verified | Services index; not yet inspected |
| `/services/architecture` | verified | Navigation label is Architect Design; direct route redirected to `/services/architecture/2d-floor-plan` |
| `/services/interior` | verified | Navigation label Interior Design; not yet inspected |
| `/services/turnkey` | verified | Navigation label Turnkey Construction; not yet inspected |
| `/services/vastu` | verified | Navigation label Vastu Shastra; not yet inspected |
| `/naksha` | verified | Linked from mobile bottom nav; not yet inspected |
| `/portfolio` | verified | Inspected; categories and 18 cards listed below |
| `/blogs` | verified | Not yet inspected; blog post routes not listed in sitemap output |
| `/contact` | verified | Inspected; contact form and contact details below |

The live menu also exposes `/about` and `/packages`; both routes were inspected. The user-supplied draft routes such as `/trunkey-construction`, `/architecture`, `/interior-design`, and `/vastu` are not the current route map. Footer links additionally expose `/privacy-policy`, `/terms-and-conditions`, `/refund-policy`, plus service subroutes `/services/architecture/interior-design`, `/services/architecture/structural-design`, and `/services/architecture/3d-exterior-design`. Login items were not present in the current menu/footer snapshot.

## Ordered section inventory

### Home `/`

1. Main navigation with logo/home link and a responsive menu button.
2. Hero: rotating three-image house design gallery; “Talk to Our Experts” lead form with three text fields and purpose select (Architecture, Construction with Material, Interior Design, Others).
3. “Explore Our Services”: Architect Design, Interior Design, Turnkey Construction, Vastu Shastra, Estimate & Cost, Contractors, Engineer Site Visit.
4. Design Packages, with Patna/Noida city controls and Silver/Gold/Platinum tiers (₹6/₹8/₹30 per sqft in observed Patna state). Silver features shown: Floor Plan, Plumbing Design, Electric Design, 3D Front Elevation. Gold/Platinum have “View All Features” controls.
5. “Our Construction Packages”: Patna/Noida city controls and Silver/Gold/Platinum comparison cards. Patna rates observed: ₹1,800/₹2,000/₹2,300 per sqft; cards include design/planning and materials/structure categories plus collapsed “View All Features” controls.
6. “Our Construction Process”: six steps, Consultation, Slot Booking, Design, Material Selection, Construction, Handover.
7. “Our Trusted Brands”: Tata Tiscon, Jindal Steel & Power, JSW Steel, ACC Cement, UltraTech Cement.
8. “Recently Delivered”: portfolio cards (observed entries include Residence Home, Luxury Villa, Farm House, Personal Residence House, Hostel).
9. “Built on trust, tracked in real time”: Live Tracking, Verified Materials, On-Time Delivery, Transparent Pricing.
10. Customer reviews/testimonials (three observed in accessibility tree).
11. “Meet the Team Behind Jaypro Infratech”.
12. “Frequently Asked Questions About Home Construction” (10 Q&As, including Vastu, cost, time, customization, quality, progress tracking, and getting started).
13. Footer: company summary, quick links, services, Patna/Noida contact info, social links, legal pages.
14. Mobile bottom nav: Home, Naksha, Call, Construction Services, Vastu Services. Floating WhatsApp button.

A timed “Get Free Consultation” popup appeared during navigation; it has Full Name, Mobile Number, City, Purpose fields and a submit button. Timing/trigger not yet tested.

### About `/about`

1. Hero “Building Dreams. Creating Spaces.” with CTA links and stats (1000+ projects, 1000+ happy clients, 10+ years, 50+ expert engineers).
2. “Who We Are” / “Turning Your Vision Into Reality” narrative and values.
3. “What We Do” / Complete Solutions Under One Roof: Construction, Architecture & Design, Interior Design.
4. Image-led trust statement.
5. “Why Choose Us For Your Next Project?” with six service/quality claims.
6. “Ready To Build Your Dream Space?” CTA.
7. Shared footer and mobile nav.

### Packages `/packages`

1. Hero “Build Your Dream Home With Confidence” with package-section anchors.
2. “Designed For Every Homeowner” with five benefit points and metrics (500+ clients, 100+ homes, 10+ years, 100% quality focused).
3. “Choose Your Design Package” with city selector and three package cards.
4. Construction package location selector and three full comparison cards.
5. “Ready to Build Your Dream Home?” CTA.
6. Shared footer and mobile nav.

### Portfolio `/portfolio`

1. Intro “Projects we're proud of”.
2. Filters: All, Villa, Renovation, Farm House, Interior, Commercial, Landscape.
3. 18 cards (three per category): Modern/Luxury/Contemporary Villa; Modern/Luxury Home/Complete Home Renovation; Farm House/Modern Farm House/Luxury Farm House; Luxury Interior/Modern Living Room/Modern Bedroom Interior; Commercial Building/Modern Commercial Building/Commercial Office; Luxury Landscape/Modern Garden Landscape/Residential Landscape.
4. Shared footer and mobile nav.

### Contact `/contact`

1. Intro “Let's talk about your build”.
2. “Send us your requirement” with shared “Talk to Our Experts” form and purpose select.
3. Contact blocks: phones +91 9835852462 and +91 6299778784; info@jayproinfratech.com; Patna office at 210, 2nd Floor, Orchid Mall, Opp. A.N. College Main Gate, Boring Road, Patna 800001; Noida office at H-169, H Block, Sector 63, Noida, Uttar Pradesh 201309; hours Monday–Saturday, 10:00 AM–6:30 PM.
4. “Ready to start your project?” CTA.
5. Shared footer and mobile nav.

### Architecture direct route

`/services/architecture` redirected to `/services/architecture/2d-floor-plan`. The rendered page showed a plot width/length search, tabs for 2D Floor Plan, 3D Exterior Design, Interior Design, and Vastu Floor Plan, 13 floor-plan cards with plot size/facing/area/type, and a custom-floor-plan CTA. This route resolution needs reconciliation with the sitemap and navigation before implementing the architecture page hierarchy.

## Verified design/asset facts and open inspection

- Browser-rendered pages are accessible and JavaScript-rendered. This browser pass did not yet extract exact computed font/style tokens, screenshots at four widths, image source URLs, or image files.
- Theme color and meta tags, full DOM text and every image URL have not yet been checked from the live head/DOM.
- The homepage hero image carousel and mobile navigation are present. The site has image-heavy pages; source asset rights/permission are not established by this inspection.
- The prior draft's analytics identifiers and `/logo.png` reference have not been verified during this pass.

## Phase 0 work still outstanding

- Inspect `/services`, each current service route, `/naksha`, `/blogs`, and discovered blog posts.
- Inspect sitemap/robots completely and click all current nav/footer/internal links, including login/legal items.
- Capture screenshots at 1440, 1024, 768, and 390 pixels for each route.
- Extract computed style tokens, image URLs/srcsets/backgrounds, and responsive/sticky/hover states.
- Test form validation/submission outcomes, city switches and package actions, portfolio filters, accordions, carousel, WhatsApp/call links, and mobile menu. Do not submit contact details to the business during inspection.
- Resolve permissions for copying the source photos/logos and whether analytics/tracking should be included in the recreation.
