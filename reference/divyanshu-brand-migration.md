# Divyanshu Infratech update

The existing single-file preview was updated in place.

## Brand and contact

- The supplied logo and “Divyanshu Infratech” name appear together in the shared header and footer.
- Home, About, service and blog headings, image alt text, SEO titles/descriptions, Open Graph metadata and local business structured data use the new brand.
- The supplied WhatsApp number `+91 93048 67172` is used for the header, floating/mobile actions, lead forms, package enquiry actions, service enquiry CTAs and Contact page.
- Contact details now show Mohalla Baripahari, Biharsharif, District - Nalanda, Bihar, India - 803101. Previous phone, address and email details were removed from website source.
- No deployment host was configured; canonical host remains unset.

## Image placement

- Home: supplied logo, residential hero photo, five material brand logos, six recent project photographs.
- Architecture: twelve floor plan images displayed with contain sizing.
- Interior Design: six interior images.
- Turnkey Construction: seven construction/work images.
- Vastu: three Vastu images.
- Portfolio: eighteen gallery photographs.
- Blogs: six original thumbnails with their article titles, categories and excerpts.

Images use local files under `public/images`. No reference slides or team photo with the former company mark are used in page markup.

## Checks

- `node --check app.js` passed.
- Eleven local routes returned HTTP 200.
- All 63 image file references parsed from the current app source exist and returned image MIME data from the local server.
- Text search of the rendered website source found no former company/contact strings.
- Browser visual inspection and console testing were unavailable in this run.
- A “Get Free Consultation” dialog now opens on every page load. It uses the unbranded residence photo, shows “Your Dream Home Starts Here with Divyanshu Infratech,” offers Full Name, Mobile Number, City and Purpose fields, and closes with the close button, backdrop or Escape. Submitting opens WhatsApp with the entered enquiry prefilled.
