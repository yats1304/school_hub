# SchoolHub

SchoolHub is a **full-stack web application** that allows users to browse, add, and manage school information in one place.  It features a responsive frontend built with React and a robust backend powered by NestJS + MySQL. 

## 🚀 Live Demo
[SchoolHub on Vercel](https://school-hub-peach.vercel.app)

---

## ✨ Features
- 📚 Browse a directory of schools with detailed information  
- ➕ Add new schools with images and contact data  
- 📱 Responsive design (mobile & desktop)  
- ⚡ Full-stack app (React + NestJS + MySQL)  
- ☁️ Deployment: Backend on Railway.app, Frontend on Vercel  

---

## 🛠️ Tech Stack
**Frontend**
- React  
- React Router  
- Tailwind CSS  

**Backend**
- NestJS  
- TypeORM  
- MySQL  

**Deployment**
- Railway.app (Backend)  
- Vercel (Frontend)  

---

## 🏗️ Project Structure
```bash
school_hub/
│── frontend/ # React app (UI)
│── backend/ # NestJS app (API + DB integration)

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)  
- pnpm or npm (package manager)  
- MySQL server installed  

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/school_hub.git
   cd school_hub-main
2. Install dependencies:
    ```bash
    cd frontend
    npm install
3. Set up environment variables:
    ```bash
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=schoolhub
4. Run the project:
- Backend
    ```bash
    cd backend
    npm run start:dev
- Frontend
    ```bash
    cd frontend
    npm start

---

### 📸 Screenshots

<img width="1918" height="938" alt="image" src="https://github.com/user-attachments/assets/531d5755-7119-481c-ad92-69aab421afc9" />
<img width="1919" height="934" alt="image" src="https://github.com/user-attachments/assets/7cc5a7ba-ac75-4073-a9c5-d67ad0b87b54" />
<img width="1896" height="932" alt="image" src="https://github.com/user-attachments/assets/488e162d-492f-4e4a-a14b-36d5bc376ee1" />
<img width="1897" height="934" alt="image" src="https://github.com/user-attachments/assets/1e2baf7c-7193-42e7-b495-0ae9fb92c723" />

---

### 📡 API Endpoints

| Method | Endpoint        | Description       |
|--------|-----------------|-------------------|
| GET    | `/schools`      | Get all schools   |
| GET    | `/schools/:id`  | Get school by ID  |
| POST   | `/schools`      | Add a new school  |
| PUT    | `/schools/:id`  | Update a school   |
| DELETE | `/schools/:id`  | Delete a school   |
