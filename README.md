# Hiveron Web Application

An industry-grade, full-stack application for **Hiveron**—a premium natural athletic energy gel brand. The application consists of a high-performance, responsive React frontend powered by **TanStack Start** and **Vite**, and a secure, light-weight database-connected REST API backend powered by **Express.js** and **Mongoose**.

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Key Features](#key-features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Backend Environment Setup](#backend-environment-setup)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
6. [API Specification](#api-specification)
   - [POST `/api/waitlist`](#post-apiwaitlist)
   - [POST `/api/contact`](#post-apicontact)
   - [GET `/health`](#get-health)
7. [Production Deployment](#production-deployment)
8. [Code Quality & Linting](#code-quality--linting)

---

## System Architecture

```mermaid
graph TD
    Client[Client Browser / Frontend: Port 8080] -->|HTTP POST Request| API[Express API Gateway / Backend: Port 3001]
    Client -->|Static Assets / SSR| ViteServer[Vite Dev Server / Nitro Engine]
    API -->|CORS Protection Check| AllowedOrigins{Origin Allowed?}
    AllowedOrigins -->|Yes| RouteHandler[Route Controllers]
    AllowedOrigins -->|No| CORSBlock[403 CORS Blocked]
    RouteHandler -->|Mongoose ODM| MongoDB[(MongoDB Atlas Cluster)]
```

---

## Key Features

- **Responsive Landing Page**: Sleek, honey/amber themed glassmorphic UI showcasing product value, raw honey formula, and comparison metrics.
- **Waitlist Form System**: Allows potential customers to register, performing automatic duplicates checks on email entries.
- **Contact Desk**: A feedback/support system enabling direct messaging into the administration pipeline.
- **Database Integration**: Dynamic schemas and persistence using MongoDB Atlas.
- **SEO & Performance Optimized**: Utilizes semantic HTML, optimized image sizes, and fast server-side rendering (SSR) capabilities.

---

## Technology Stack

### Frontend

- **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack React Framework)
- **Routing**: [TanStack Router](https://tanstack.com/router) (Typesafe file-based routing)
- **State Management**: [TanStack Query](https://tanstack.com/query) (React Query)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Engine**: [Vite](https://vitejs.dev/)

### Backend

- **Server Platform**: Node.js & [Express.js](https://expressjs.com/)
- **Database ODM**: [Mongoose](https://mongoosejs.com/) (MongoDB Integration)
- **Utilities**: CORS protection, Dotenv environmental isolation

---

## Project Structure

```
├── src/
│   ├── assets/              # Optimized static image assets and icons
│   ├── components/          # Reusable UI components
│   │   └── ui/              # Radix UI + Tailwind design tokens
│   ├── hooks/               # Custom React hooks (e.g. useInView)
│   ├── lib/                 # Utility files, db connections & API clients
│   ├── routes/              # TanStack Router folder-structure routes
│   │   ├── api/             # Serverless API routes (waitlist, contact)
│   │   ├── __root.tsx       # Main page layout structure
│   │   └── index.tsx        # Hiveron Home landing page layout
│   ├── router.tsx           # Router configuration
│   ├── server.ts            # Client-side SSR entry
│   ├── start.ts             # Main bundle entry
│   └── styles.css           # Global Tailwind & Custom UI styles
├── package.json             # Root-level configuration & dev dependencies
├── tsconfig.json            # Strict TypeScript configuration
└── vite.config.ts           # Vite + TanStack compilation pipeline
```

---

## Getting Started

### Prerequisites

Ensure you have the following software installed:

- **Node.js**: v18.0.0 or higher
- **NPM** or **Bun** package manager
- **MongoDB Atlas Account** (or a local MongoDB instance running)

### Local Environment Setup

Create an active configuration file in the root directory:

1. Create a `.env` file in the root workspace directory:
   ```env
   MONGODB_URI=mongodb+srv://<db_user>:<db_password>@<your_cluster_address>.mongodb.net/hiveron
   ```

> [!WARNING]
> Keep your `.env` credentials secure. This file is excluded from repository commits by `.gitignore`.

### Installation

Install packages for the project workspace:

```bash
npm install
```

### Running the Application

For development, start the dev server:

```bash
npm run dev
```

The application and its serverless API endpoints will be available at **`http://localhost:8080`**.

---

## API Specification

All payloads are exchanged in **JSON** format.

### POST `/api/waitlist`

Registers a user onto the Hiveron Waitlist.

- **Request Body**:
  ```json
  {
    "name": "Alex Mercer",
    "email": "alex.mercer@example.com",
    "phone": "+15550199"
  }
  ```
- **Responses**:
  - **`201 Created`**:
    ```json
    {
      "message": "You have been added to the waitlist.",
      "id": "64b0b14c351f0402b9f3a9e3"
    }
    ```
  - **`400 Bad Request`**: Missing required fields or malformed email.
  - **`409 Conflict`**: Email address already registered.

### POST `/api/contact`

Submits a message through the customer service contact form.

- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Product Inquiry",
    "message": "Are Hiveron gels vegan-friendly?"
  }
  ```
- **Responses**:
  - **`201 Created`**:
    ```json
    {
      "message": "Your message has been sent.",
      "id": "64b0b18f351f0402b9f3a9e5"
    }
    ```
  - **`400 Bad Request`**: Missing field constraints or invalid email.

---

## Production Deployment

### Deployment (Vercel)

The project is optimized for deployment on Vercel as a unified single-deployment application:

1. Configure your build command:
   ```bash
   npm run build
   ```
2. In your Vercel Project Dashboard, navigate to **Settings** > **Environment Variables** and add:
   - `MONGODB_URI`: Your MongoDB connection string.

---

## Code Quality & Linting

Keep the project formatted and compliant with rules before creating commits:

- **Lint checks**:
  ```bash
  npm run lint
  ```
- **Auto-formatting (Prettier)**:
  ```bash
  npm run format
  ```
