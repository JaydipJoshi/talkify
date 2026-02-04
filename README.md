 💬 Talkify – Real-Time Chat Application

🚀 **Talkify** is a full-stack, real-time chat application built from scratch using modern web technologies.  
It does **NOT** rely on Firebase or other BaaS platforms for core logic — authentication, sockets, and APIs are fully custom-built.

---

 🌐 Live Demo
⚠️ Currently unavailable (free hosting credits expired)

---

 🧠 Key Highlights
- 🔐 Custom authentication system (JWT + HTTP-only cookies)
- ⚡ Real-time messaging using Socket.io
- 🟢 Live online/offline user status
- ✍️ Typing indicators
- 🖼 Profile & chat image uploads
- 🚀 Optimistic UI for instant feedback
- 🔊 Chat & notification sounds (toggleable)
- 🌙 Modern dark-mode UI
- 🛡 Rate limiting & bot protection

---

 🛠 Tech Stack

 🎨 Frontend
- ⚛️ React + Vite  
- 🎨 Tailwind CSS + DaisyUI  
- 🐻 Zustand (state management)  
- 🧭 React Router  
- 🔔 React Hot Toast  
- 🌐 Axios  
- 🖼 Lucide Icons  

---

 ⚙️ Backend
- 🟢 Node.js + Express  
- 🔌 Socket.io  
- 🍃 MongoDB + Mongoose  
- 🔑 JWT Authentication  
- 🔐 bcryptjs (password hashing)  
- 🍪 cookie-parser  

---

 ☁️ External Services
- 📦 Cloudinary – Image storage  
- 📧 Resend – Welcome emails  
- 🛡 Arcjet – Rate limiting & bot protection  
- 🚀 Savala – Deployment  
- 🧪 Postman – API testing  

---

 ✨ Features Breakdown

 🔐 Authentication & Security
- Signup / Login / Logout
- Encrypted passwords
- Protected routes
- Secure HTTP-only cookies
- Rate limiting (Sliding Window)

---

 ⚡ Real-Time Capabilities
- Instant messaging
- Live user presence
- Typing indicators
- Auto sync across clients

---

 🎨 User Experience
- Skeleton loaders
- Sound effects
- Image sharing
- Responsive layout
- Clean & modern UI

---

## 🧪 API Testing
All backend endpoints were tested using **Postman** before frontend integration.

---

## ⚙️ Local Setup

```bash
git clone https://github.com/JaydipJoshi/talkify.git

 Backend
cd server
npm install
npm run dev

# Frontend
cd client
npm install
npm run dev

🔑 Environment Variables
MONGO_URI=
JWT_SECRET=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET=
RESEND_API_KEY=
ARCJET_KEY=


