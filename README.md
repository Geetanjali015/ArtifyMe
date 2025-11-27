# 🎨 ArtifyME — AI-Powered Image Cartoonization

ArtifyME is a full-stack AI application that transforms user images into various artistic styles such as **cartoon**, **oil painting**, **sketch**, **B&W**, and more.  
The project uses a **Next.js frontend** and a **Python FastAPI backend** powered by the **White-box Cartoonization model** ,**OpenCV and PyTorch**.

---

## 🚀 Tech Stack

### **Frontend**
- **Next.js 14 (App Router)**
- **React**
- **TailwindCSS**
- **TypeScript**
- **ShadCN Components**
- **Vercel Deployment**

### **Backend**
- **Python 3**
- **FastAPI**
- **Uvicorn**
- **PyTorch**
- **White-box Cartoonization Model**
- **Image processing: OpenCV, Pillow**
- **ONNX / Torch Model Weights**
- **Render Deployment**

---

## ✨ Features

- **Upload any image** (JPG/PNG)
- **AI-powered cartoonization** using a pre-trained neural network
- Multiple style options:
  - Cartoon  
  - Oil Paint  
  - Pencil Sketch  
  - B&W  
  - Sepia  
  - Smooth Cartoon  
- **Fast real-time inference**
- **Download the output image**
- **Backend–Frontend REST API communication**
- **Responsive UI**

---

## 📁 Project Structure

```bash
ArtifyME/
│
├── backend/
│   ├── inference.py        # Main FastAPI app + model inference
│   ├── weight.pth          # Cartoonization model weights
│   └── README.md
│
├── frontend/
│   ├── app/                # Next.js app router structure
│   ├── components/         # UI components
│   ├── public/             # Static assets
│   ├── package.json
│   └── README.md
│
├── requirements.txt        # Backend dependencies
└── README.md               # Main documentation
```
## Local Development Setup

### 1. Clone Repository
```bash
git clone https://github.com/Geetanjali015/ArtifyMe
cd ArtifyMe
```
## 2. Backend Setup
```
cd backend
pip install -r ../requirements.txt
uvicorn inference:app --reload
```
Backend runs at: 👉 http://127.0.0.1:8000
## 3. Frontend Setup
```
cd frontend
npm install
npm run dev
```
Frontend runs at: 👉 http://localhost:3000
## ☁️ Deployment
### 🚀 Frontend Deployment — Vercel
1. Push the `frontend/` folder to GitHub
2. Import repo into Vercel
3. Deploy → Vercel auto-detects Next.js
4. Automatic redeploys on every push
### 🛰️ Backend Deployment — Render
1. Create a New Web Service
2. Choose your repository
3. Set:
Root Directory
```
backend
```

Build Command
```
pip install -r ../requirements.txt
```

Start Command
```
uvicorn inference:app --host 0.0.0.0 --port 10000
```

Render will auto-assign a public backend URL like:
```
https://your-backend.onrender.com
```

---
## Screenshots
![image](https://github.com/user-attachments/assets/d31f61c8-cfcb-4d65-bb80-856fd9c1f2dd)
<br/>
![image](https://github.com/user-attachments/assets/9adde7e8-fc4c-49a7-916f-5dfe2bcb3ac0)

