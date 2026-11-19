# Maa Gayatri Clothing's — React frontend

A responsive women's fashion e-commerce storefront using React, Vite, React Router and custom CSS. Visual direction: premium burgundy, cream and muted gold.

## Run locally

1. Install Node.js 20.19+ or 22.12+.
2. Extract this folder and open it in VS Code.
3. In the project terminal run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).
5. Create a production build with `npm run build`.

## Included pages and interactions

- Home / editorial landing page
- Shop catalogue with category, search, price and sort filters
- Product details with size selection
- Cart with quantity controls and shipping calculation
- Wishlist
- Checkout form with demo order confirmation
- Account landing page
- Responsive mobile navigation
- Cart and wishlist persistence using localStorage

## Important demo notes

This is a frontend presentation prototype. Product names, descriptions, prices and images are sample content and should be replaced with the client's approved catalogue and licensed product photography. The checkout is a demonstration only: it does not create a real order, charge a payment method, send an email, or connect to inventory. The account page is a placeholder. Connect the React app to the Spring Boot API before production use. Implement authentication, server-side price validation, stock checks, order creation and payment verification on the backend. Do not store secrets in frontend code.

## Suggested API integration

Configure a Vite environment variable such as `VITE_API_BASE_URL` and replace the sample product data/context actions with API calls. Suggested backend resources: `/api/auth`, `/api/products`, `/api/categories`, `/api/cart`, `/api/orders`, `/api/payments`, `/api/wishlist`.

## Branding

Current brand styling uses Playfair Display + DM Sans, burgundy `#641f35`, cream `#f7f0e7` and muted gold `#b58a52`. Update fonts, logo and colours in `index.html` and `src/styles.css` after client approval.
