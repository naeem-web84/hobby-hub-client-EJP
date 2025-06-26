 # 🎨 HobbyHub – Connect Through Hobbies & Community

> A community platform where individuals can discover, create, and manage local hobby-based groups like book clubs, fitness crews, art circles, and more.

🌐 [Live Website](https://hobby-hub-fortuner.surge.sh/)  
🗂️ [Client Repository](https://github.com/naeem-web84/hobby-hub-client-EJP)  
🗂️ [Server Repository](https://github.com/naeem-web84/hobby-hub-server-EJP)

---

## 📸 Project Preview

![HobbyHub Preview](https://raw.githubusercontent.com/naeem-web84/hobby-hub-client-EJP/refs/heads/main/Screenshot%202025-06-25%20140438.png)

---

## ✨ Key Features

- 🔐 **Authentication**: Email/password login, Google/GitHub OAuth, and secure registration
- 🧑‍🤝‍🧑 **Create & Join Groups**: Organize or participate in your favorite hobbies
- 🔒 **Protected Routes**: Secured by Firebase & JWT; persists even on reload
- 🧾 **My Groups Dashboard**: Update and delete groups you've created
- 🌓 **Dark/Light Mode Toggle** for better accessibility
- 🛑 **Group Expiry Check**: Prevent joining if the group's start date has passed
- 🎬 **Animations**: Smooth transitions using Lottie and React Awesome Reveal
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🔔 **SweetAlert2/Toast**: Friendly success/error feedback

---

## 🧪 Tech Stack

### ⚛️ Client-Side

- React.js (Vite)
- React Router DOM
- Tailwind CSS + DaisyUI
- Firebase Authentication
- Lottie React, React Awesome Reveal
- React Hook Form, SweetAlert2

### 🔗 Server-Side

- Node.js + Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- dotenv, CORS
- Hosted on Vercel

---

## 🗃 Folder Structure

```bash
client/
├── components/
├── pages/
├── hooks/
├── context/
└── routes/

server/
├── index.js
├── routes/
├── controllers/
└── models/
