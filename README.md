# VitalCare Clinic

VitalCare Clinic is a full-stack MERN clinic website for presenting medical services, doctor information, testimonials, contact details, and appointment booking flows.

The project is currently split into a Vite React frontend and an Express/MongoDB backend. The frontend is mostly built out, and the appointment form now submits booking requests to the backend API.

## Current Status

- React frontend pages are available for Home, Services, About Doctor, and Contact.
- Responsive navigation, footer, scroll-to-top behavior, and floating WhatsApp action are implemented.
- Home page sections include hero, services, doctor profile, testimonials, CTA, and contact.
- Contact page includes clinic details, map embed, and an appointment request form UI.
- Express backend is set up with MongoDB connection support through Mongoose.
- Appointment model and API routes are implemented for creating and listing appointments.
- The frontend API helper uses `VITE_API_URL` when provided and falls back to `http://localhost:5000/api`.
- The contact form sends appointment requests to the backend and shows inline success or error messages.

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS 4
- shadcn-style UI components
- Lucide React icons
- Motion animations

### Backend

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- CORS
- dotenv

## Project Structure

```text
vitalcare-clinic/
  client/
    src/
      components/
        layout/
        sections/
        ui/
      pages/
      lib/
    services/
      api.ts
    package.json

  server/
    src/
      config/
      controllers/
      models/
      routes/
      app.ts
      server.ts
    package.json

  README.md
```

## Features

- Responsive clinic landing page
- Services listing
- Doctor profile section
- Testimonials section
- Contact page with Google Maps embed
- Appointment request form with backend submission
- Floating WhatsApp booking shortcut
- Phone call CTA links
- Appointment API with MongoDB persistence

## API Endpoints

Base URL:

```text
http://localhost:5000/api
```

Appointment routes:

```text
POST /appointments
GET  /appointments
```

Appointment fields:

```ts
{
  fullName: string;
  phone: string;
  email?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  status?: "pending" | "confirmed" | "completed" | "cancelled";
}
```

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB connection string

### 1. Install Frontend Dependencies

```bash
cd client
npm install
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Configure Backend Environment

Create a `.env` file inside `server/`. You can copy the existing example:

```bash
cd server
Copy-Item .env.example .env
```

Then update it with your MongoDB connection string:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

`PORT` is optional and defaults to `5000`. The backend also checks `server/src/.env`, but `server/.env` is the preferred location.

### 4. Configure Frontend Environment

Create a `.env` file inside `client/` when you need to point the frontend at a different API URL:

```bash
cd client
Copy-Item .env.example .env
```

The default local value is:

```env
VITE_API_URL=http://localhost:5000/api
```

### 5. Run Backend

```bash
cd server
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

### 6. Run Frontend

```bash
cd client
npm run dev
```

The frontend runs on:

```text
http://localhost:3000
```

## Available Scripts

### Frontend

```bash
npm run dev       # Start Vite dev server on port 3000
npm run build     # Build frontend for production
npm run preview   # Preview production build
npm run lint      # Run TypeScript checks
```

### Backend

```bash
npm run dev       # Start backend with tsx
npm run build     # Compile TypeScript
npm start         # Run compiled backend from dist/
```

## Notes

- Clinic phone number, WhatsApp number, email, location, doctor profile, and images are still placeholder/demo content.
- The client `.env.example` documents the appointment API URL used by the Vite app.

## Next Steps

- Replace placeholder clinic details, WhatsApp number, map location, and images with real clinic data.
- Add validation on both frontend and backend.
- Add an admin view or dashboard for managing appointment requests.
