# fullstack-learning-and-docs

### Setup & Learning Tasks
Getting started with project setup And Covered some tailwind basics and leant and implemented them.

## Tasks Completed Today

### 1. Repository Setup
- Created a new GitHub repository named **`fullstack-learning-and-docs`**.
- Added the required folder structure:
/tailwind-practice
/nextjs-typescript
/react-native-notes
/accrefin-frontend-docs
/accrefin-backend-docs

### 2. TailwindCSS Practice
**Folder:** `/tailwind-practice`

- Installed and configured **TailwindCSS** manually.
- Built a **simple dashboard layout** containing:
- Sidebar
- Top header
- Two central cards (content section)
- No external CSS used — styled completely with Tailwind utility classes.
- Verified working layout locally.

### 3. Next.js + TypeScript Project
**Folder:** `/nextjs-typescript`

- Created a **Next.js + TypeScript** app using the App Router.
- Integrated **TailwindCSS** for styling.
- Created a **typed component** `UserCard.tsx` demonstrating the use of typed props.


### Next Steps
Document Accrefin frontend and backend structure.

---

# Day 2:

Today's focus was on frontend component design with TailwindCSS and core Next.js (App Router) features.

# 1: TailwindCSS – Component Build

* under `/tailwind-practice` Built a reusable, modular component library using React, TypeScript, and TailwindCSS.
* Components Created:
    * `Button.tsx`: A flexible button with `primary` (solid) and `secondary` (outline) variants.
    * `Card.tsx`: A content card with a clean design, soft shadows, and support for an `imageUrl` prop and `children` (allowing nested components like buttons).
    * `Navbar.tsx`: A fully responsive navigation bar that collapses into a hamburger menu on mobile, managed with React's `useState` hook.
* Key Skills: Styled all components to match a specific UI design, configured `tailwind.config.js` to watch all source files, and set up a preview page (`main.jsx`) using Vite.

* Documentation: Wrote `notes.md` detailing the approach and reusability.


# 2: Next.js + TypeScript – Routing and API

* `/nextjs-typescript`: 
* API Route (App Router):
    * Created a mock API endpoint at `app/api/hello/route.ts`.
    * Used the new `NextResponse.json()` method to return a `GET` response, following the project's existing App Router conventions.
* Dynamic Routing (App Router):
    * Created two dynamic pages: `app/users/[id]/page.tsx` and `app/posts/[slug]/page.tsx`.
    * Used the `useParams` hook from `next/navigation` to read the dynamic `id` and `slug` parameters from the URL and display them on the page.
* Data Fetching:
    * Demonstrated client-side data fetching on the `[id]` page using `useEffect` and `fetch` to call the `/api/hello` endpoint and display its data.
* Documentation: Wrote `notes.md` explaining the new App Router concepts that were implemented.


### Next Steps
Accrefin Documentation – Deep Dive