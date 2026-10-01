# 🏋️ FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse a library of
twelve lifts, build today's workout plan, save exercises for later, and
track your session's total minutes and calories — all in one clean,
distraction-free interface.

> Train with intent. Log every set.

---

## 🛠️ Technologies Used

- **Next.js 15** (App Router) — routing, Server & Client Components, SSR
- **React 19** — UI library
- **TypeScript** — type-safe data models and props
- **Tailwind CSS** — utility-first styling, fully responsive layout
- **React Context API** — global state for Today's Plan and Saved lists
- **react-toastify** — toast notifications for user actions
- **lucide-react** — icon set
- **localStorage** — persists the user's plan/saved data across reloads
- **REST API** (`api.api-store.workers.dev`) — exercise data source

---

## ✨ Key Features

1. **Full Workout Library** — Browse 12 exercises in a responsive grid,
   each card showing muscle group tags, equipment, duration, calories and
   rating. Click any card to view full exercise details and instructions.

2. **Build Your Daily Plan** — Add exercises to "Today's Plan" (capped at 5
   lifts) or save them for later with one click, directly from the details
   page.

3. **Live Progress Tracking** — The My Plan page shows real-time totals for
   exercises, minutes and calories and lets you mark workouts as done or
   remove them, all without a page reload.

4. **Sort & Organize** — Switch between "Today's Plan" and "Saved" tabs
   and sort either list by Duration, Calories or Rating on the fly.

5. **Persistent & Resilient State** — Your plan and saved items survive
   page refreshes via localStorage, with graceful loading states and a
   custom 404 page for any invalid route.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure