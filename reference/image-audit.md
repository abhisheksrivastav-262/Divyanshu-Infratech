# Image restoration audit

Date: 2026-11-20

## Summary

- **Image references found:** 147 unique image URL references in the live site's JavaScript/CSS bundles.
- **Valid image downloads:** 130 URL responses contained image data, representing **129 distinct local image files** (two source URLs map to the same destination path).
- **Images wired into the current preview:** 31 distinct originals across the homepage and portfolio (the three-frame hero carousel uses one image slot).
- **Image references unavailable:** 17 files. Those image-looking URLs returned the site's HTML fallback page from both the `www` host and the alternate public host, so they were removed from `public/images` and are not referenced by the preview.
- **Server routing repaired:** `/images/...` now serves files from `public/images`, returns `404` for missing images, and sends the correct image MIME type. Previously it returned `index.html` for image requests.

The reference site's asset bundle can expose more images than the current local app has page slots for. Retrieved but unused assets are preserved in `public/images` and indexed in [image-manifest.json](./image-manifest.json). No unrelated sections, colors, fonts, spacing, or page layout were changed.

## Restored in this preview

- **Home:** three original hero banner frames; five original construction brand logos; six recently delivered project photographs.
- **Portfolio:** 18 original villa, renovation, farmhouse, interior, commercial, and landscape images.

Project images keep the existing card dimensions and use `object-fit: cover`; brand marks use `object-fit: contain`. The home hero uses the original three-frame, four-second rotation described in the live bundle.

## Page review

| Page | Result |
|---|---|
| Home | Restored hero, brand logos, and recently delivered photos |
| About | No image element/asset slot exists in the current local page source; no layout was added |
| Architecture | Current local route renders the generic “Page inventory in progress” view; no architecture page or image slots exist |
| Interior Design | Current local route renders the generic view; no image slots exist |
| Turnkey Construction | Current local route renders the generic view; no image slots exist |
| Vastu Shastra | Current local route renders the generic view; no image slots exist |
| Portfolio | Restored all 18 gallery photos |
| Packages | No image elements/asset slots exist in the current local page source |
| Blogs | No blog page/post implementation or image slots exist in the current local source |
| Contact Us | No image element/asset slot exists in the current local page source |

These pages were not rebuilt because the request said to fix images without changing the site design. The image audit therefore does not claim they have received images.

## Unavailable source files

The following references did not return image data and remain un-restored:

- `/3dfloorplan/3d-floor-plan-07.jpg`
- `/3dfloorplan/3d-floor-plan-08.jpg`
- `/3dfloorplan/3d-floor-plan-09.jpg`
- `/3dfloorplan/3d-floor-plan-10.jpg`
- `/3dfloorplan/3d-floor-plan-11.jpg`
- `/3dfloorplan/3d-floor-plan-12.jpg`
- `/architecture/front-elevation.webp`
- `/images/architecture-noida-hero-mobile.webp`
- `/images/architecture-noida-hero-tablet.webp`
- `/images/architecture-noida-hero.webp`
- `/images/services-hero.jpg`
- `/logo.png`
- `/test.png`
- `/testimonial-1.webp`
- `/testimonial-2.webp`
- `/testimonial-3.webp`
- `/thank-you.webp`

## Verification performed

- Verified downloaded local files have recognized PNG, JPEG, WebP, AVIF, GIF, or SVG signatures; HTML fallbacks are excluded.
- Verified the local server returns the home page as `200`, restored hero image as actual WebP bytes, and a nonexistent image as `404`.
- Browser screenshot inspection, browser console inspection, and visual desktop/mobile checks were unavailable in this run. The report does not mark those checks as passed.
