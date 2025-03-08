# 📝 Backend_nest_API
 

Backend_nest
 is a **cloud-based notebook application**, allowing users to create, edit, and manage notes securely. This repository contains the **backend code**, built with **Node.js, Express, and MongoDB**.  

> **⚡ Developed by:** AhsanLaeeq 🚀  

---

## 📌 Features  

✅ **User Authentication** – Register, login, and manage users securely.  
✅ **JWT Authentication** – Secure access using JSON Web Tokens.  
✅ **CRUD Operations** – Create, read, update, and delete notes.  
✅ **Input Validation** – Prevent bad data input using `express-validator`.  
✅ **CORS Enabled** – Allows seamless integration with the frontend.  

---

## 📂 Tech Stack  

| Technology  | Purpose |  
|-------------|---------------------------------|  
| **Node.js** | Backend runtime environment |  
| **Express.js** | Web framework for API development |  
| **MongoDB (Atlas)** | Database for storing user data & notes |  
| **JWT (JSON Web Tokens)** | Authentication mechanism |  
| **Express Validator** | Middleware for input validation |  
| **dotenv** | Loads environment variables |  
| **Cors** | Enables cross-origin requests |  

---

## ⚙️ Prerequisites  

Before running this project, ensure you have:  
✔️ **Node.js** installed – [Download Here](https://nodejs.org/)  
✔️ **MongoDB Atlas** account – [Sign Up](https://www.mongodb.com/cloud/atlas)  
✔️ **Git** installed – [Download Here](https://git-scm.com/)  

---

## 🛠 Installation & Setup  

### **Step 1: Clone the Repository**  
```bash
git clone https://github.com/yourusername/Backend_nest.git
cd Backend_nest
Step 2: Install Dependencies
bash
Copy
Edit
npm install
Step 3: Create a .env File
In the root directory, create a .env file and add:

env
Copy
Edit
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
⚠️ DO NOT PUSH .env FILE TO GITHUB! Add .env to .gitignore to keep it private.

Step 4: Run the Application
Development Mode
Run the backend using nodemon for live updates:

bash
Copy
Edit
npm run dev
Production Mode
Run the backend normally:

bash
Copy
Edit
npm start
🚀 API Endpoints
🔐 Authentication
📌 Register a New User
http
Copy
Edit
POST /api/auth/createuser
Body:

json
Copy
Edit
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
📌 Login a User
http
Copy
Edit
POST /api/auth/login
Body:

json
Copy
Edit
{
  "email": "john@example.com",
  "password": "password123"
}
📌 Get Logged-in User Details
http
Copy
Edit
POST /api/auth/getuser
Headers:

json
Copy
Edit
{
  "auth-token": "<your_jwt_token>"
}
🗒 Notes
📌 Fetch All Notes
http
Copy
Edit
GET /api/notes/fetchallnotes
Headers:

json
Copy
Edit
{
  "auth-token": "<your_jwt_token>"
}
📌 Add a New Note
http
Copy
Edit
POST /api/notes/addnote
Headers:

json
Copy
Edit
{
  "auth-token": "<your_jwt_token>"
}
Body:

json
Copy
Edit
{
  "title": "Note Title",
  "description": "Note Description",
  "tag": "optional tag"
}
📌 Update an Existing Note
http
Copy
Edit
PUT /api/notes/updatenote/:id
Headers:

json
Copy
Edit
{
  "auth-token": "<your_jwt_token>"
}
Body:

json
Copy
Edit
{
  "title": "Updated Title",
  "description": "Updated Description",
  "tag": "Updated Tag"
}
📌 Delete a Note
http
Copy
Edit
DELETE /api/notes/deletenote/:id
Headers:

json
Copy
Edit
{
  "auth-token": "<your_jwt_token>"
}
☁️ Deploying to Railway
Step 1: Create a Railway Account
Sign up at Railway.app.

Step 2: Create a New Project
Click on New Project → Deploy from GitHub.
Connect your GitHub repository (Notenest-backend).
Step 3: Add Environment Variables
Go to Project Settings → Variables and add:

env
Copy
Edit
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
Step 4: Define Start Command
In Railway Dashboard, go to Settings and set:

bash
Copy
Edit
npm start
Step 5: Deploy the Backend
Click Deploy
Railway will build and deploy your backend automatically.
Step 6: Get the Live Backend URL
Copy the generated API URL from Railway.
Update your frontend with this URL.
🔥 Important Notes
⚠️ DO NOT PUSH .env FILE TO GITHUB!

Add .env to .gitignore to prevent accidental commits.
Use Railway Environment Variables instead.
⚠️ Use MongoDB Atlas Instead of Local DB

MongoDB Atlas is a cloud database, so your data remains accessible online.
📜 License
This project is open-source and available under the MIT License.

🤝 Contributing
Fork the Repository
Create a New Branch
bash
Copy
Edit
git checkout -b feature-new-feature
Commit Your Changes
bash
Copy
Edit
git commit -m "Added a new feature"
Push to GitHub
bash
Copy
Edit
git push origin feature-new-feature
Open a Pull Request
🌟 Support
If you found this project useful, please star the repository ⭐ to show your support!

🔗 Connect with Me
Developer: AhsanLaeeq
GitHub: https://github.com/AhsanLaeeq
LinkedIn: 
yaml
Copy
Edit

---

### **📌 Changes & Improvements:**  
✅ **Railway Deployment Steps Added**  
✅ **Security Best Practices (Do Not Push `.env` to GitHub)**  
✅ **More Detailed API Documentation**  
✅ **Enhanced Formatting & Readability**  
✅ **Credit AhsanLaeeq Included**  

Now your **backend README is fully detailed and professional** 🚀. Let me know if you need more modifications! 🎯







