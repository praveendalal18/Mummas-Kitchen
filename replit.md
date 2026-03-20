# Mumma's Kitchen - Authentic Homemade Goan Pickles

## Overview
A full-stack landing page website for "Mumma's Kitchen", a homemade Goan pickles business based in Panaji, Goa. The site showcases products, tells the brand story, and allows customers to place orders via WhatsApp.

## Architecture
- **Frontend**: React + Vite + TailwindCSS + shadcn/ui
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Auth**: Replit Auth (OpenID Connect)

## Key Features
- Product catalog (spicy, sweet, other categories) loaded from database
- Stock management per product (In Stock / Limited / Out of Stock)
- Promotional offers system (create, toggle, delete from admin)
- SEO optimized (meta tags, Open Graph, Twitter Cards, JSON-LD structured data, robots.txt, sitemap.xml)
- Blog section with 3 SEO-optimized articles (static content, internal linking to products)
- Customer login/signup via Replit Auth (supports Google/Gmail sign-in)
- Admin dashboard at /admin (restricted to ADMIN_EMAIL only)
- Admin email check with isAdmin middleware (case-insensitive)
- WhatsApp ordering integration
- UPI payment information with QR code
- Traditional Goan design aesthetic with dark backgrounds and white headings

## Project Structure
- `client/src/pages/Home.tsx` - Main landing page
- `client/src/pages/Admin.tsx` - Admin dashboard (stock + offers management)
- `client/src/pages/Blog.tsx` - Blog listing page
- `client/src/pages/BlogPost.tsx` - Individual blog post page (dynamic by slug)
- `client/src/lib/blogData.ts` - Static blog content data (3 SEO-optimized articles)
- `client/src/components/` - All UI sections (Navigation, Hero, Story, Products, Benefits, Testimonials, Directions, Contact, Footer, WhatsAppFloat, OffersBanner)
- `client/src/hooks/` - Custom hooks (use-auth, use-products, use-messages)
- `server/routes.ts` - API endpoints (public + admin)
- `server/storage.ts` - Database operations (CRUD for products, messages, offers)
- `server/replit_integrations/auth/` - Replit Auth integration
- `shared/schema.ts` - Database schema (products, messages, offers, users, sessions)
- `shared/routes.ts` - API contract definitions

## API Routes
- `GET /api/products` - List all products (public)
- `POST /api/messages` - Submit contact form (public)
- `GET /api/offers` - List active offers (public)
- `GET /api/auth/is-admin` - Check if current user is admin (auth required)
- `PATCH /api/admin/products/:id/stock` - Update product stock (admin only)
- `GET /api/admin/offers` - List all offers (admin only)
- `POST /api/admin/offers` - Create offer (admin only)
- `PATCH /api/admin/offers/:id` - Update offer (admin only)
- `DELETE /api/admin/offers/:id` - Delete offer (admin only)

## Brand Assets
- Logo: `attached_assets/Without_BG_1772531259275.png`
- Product photos in `attached_assets/` (imported via @assets alias)
- Spices background: `attached_assets/generated_images/goan_spices_bg.png`
- UPI QR: `attached_assets/WhatsApp_Image_2026-03-03_at_2.23.56_PM_1772532302662.jpeg`

## Database Tables
- `products` - Pickle menu items with name, price, description, category, stock
- `messages` - Contact form submissions
- `offers` - Promotional offers with title, description, isActive flag
- `users` - Customer accounts (Replit Auth)
- `sessions` - Auth sessions

## SEO
- Meta tags: title, description, keywords, geo tags, theme-color, canonical URL
- Open Graph: title, description, type, site_name, url, locale
- Twitter Cards: summary_large_image card with title and description
- JSON-LD structured data: LocalBusiness, WebSite, BreadcrumbList, Product ItemList
- robots.txt: allows all crawlers, disallows /admin and /api/
- sitemap.xml: homepage listed with weekly changefreq
- All sections have aria-label attributes for accessibility
- Below-fold images use loading="lazy" for Core Web Vitals
- Proper heading hierarchy: single h1 in hero, h2 for sections

## Design
- Color palette: Deep browns (#3D2B1F, #5C3A1E, #2D1F15, #1A1A18), amber accents, white headings
- Fonts: Playfair Display (headings), DM Sans (body)
- All section headings use white text on dark backgrounds
- Mobile-first responsive design with sm/md/lg breakpoints
- Goan spices background image behind hero heading
