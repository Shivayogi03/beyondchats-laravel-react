# 🚀 BeyondChats Assignment Submission

## 📝 Overview

This repository contains a small project demonstrating:

- **💻 Laravel backend**: CRUD API for articles (Phase 1 & 3)
  
- **⚛️ React frontend**: Fetches articles and displays Original + Updated/AI versions (Phase 3)
  
- **🤖 NodeJS LLM script**: Optional Phase 2 AI updater (simulated if not implemented)

> Phase 2 AI logic is simulated in frontend to complete Phase 3 UI demonstration.

---

## 📁 Project Structure

backend-laravel/ # 💻 Laravel API for articles

frontend-react/ # ⚛️ ReactJS frontend

nodejs-llm/ # 🤖 Optional NodeJS AI updater

yaml
---

## ⚙️ Local Setup Instructions

### 1️⃣ Backend (Laravel)

```bash
cd backend-laravel
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
Laravel runs at: http://127.0.0.1:8000

Available API endpoints:

GET /api/articles → List all articles

POST /api/articles → Create article

GET /api/articles/ai → Articles with AI analysis

GET /api/articles/high-relevance → High-relevance articles

2️⃣ Frontend (React)
bash
cd frontend-react
npm install
npm run dev
React frontend runs at: http://localhost:5173

Displays:

📰 Original Articles

✨ Updated / AI Articles (simulated if Phase 2 not implemented)

Make sure Laravel backend is running before starting frontend.

3️⃣ NodeJS (Optional Phase 2 AI)
bash
cd nodejs-llm
npm install
node index.js
Fetches latest articles from backend

Generates updated AI content

Frontend can display this updated content if available

🗂 Data Flow / Architecture
scss
[⚛️ Frontend React] <--fetch--> [💻 Laravel API] <--CRUD--> [🗄 Database]
                                \
                                 --> [🤖 NodeJS LLM] (Optional AI updates)
📝 Notes
Partial work is acceptable: Phase 2 AI logic is simulated in frontend

Phase 1 CRUD APIs + Phase 3 React UI fully implemented

Code follows Laravel + React best practices

This project demonstrates end-to-end flow from backend → frontend → optional AI updates

✅ Submission Checklist

 Monolithic GitHub repo with backend, frontend, NodeJS (optional)

 Fully working Laravel backend (Phase 1 + 3)

 Fully working React frontend (Phase 3)

 README.md with setup, architecture diagram, live link

 Optional Phase 2 AI simulation
