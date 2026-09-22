# 📝 Post Project — Full Stack

A simple full-stack post management application where users can create posts with an image and caption. Images are uploaded to **ImageKit**, while post data is stored in **MongoDB**.

The project contains a **React frontend** and an **Express.js backend**.

## 🚀 Features

* Create a new post with an image and caption
* Upload images using Multer
* Store images on ImageKit
* Store post data in MongoDB
* Fetch and display all posts
* React Router navigation
* REST API using Express.js
* CORS enabled for frontend-backend communication

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Axios
* Vite
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* ImageKit
* CORS
* Dotenv

## 📂 Project Structure

```text
Backend_2/
│
├── Backend/
│   ├── server.js
│   ├── package.json
│   │
│   └── src/
│       ├── app.js
│       │
│       ├── db/
│       │   └── db.js
│       │
│       ├── model/
│       │   └── post.model.js
│       │
│       └── services/
│           └── imagekit.service.js
│
└── Frontend/
    └── post-project/
        ├── src/
        │   ├── components/
        │   │   ├── Button.jsx
        │   │   └── Post.jsx
        │   │
        │   ├── pages/
        │   │   ├── CreatePost.jsx
        │   │   └── Feed.jsx
        │   │
        │   └── App.jsx
        │
        └── package.json
```

## 🔄 How It Works

```text
React Frontend
      │
      │ Axios
      ▼
Express.js API
      │
      ├── Multer
      │      │
      │      ▼
      │   ImageKit
      │
      └── Mongoose
             │
             ▼
          MongoDB
```

### Creating a Post

1. User selects an image and enters a caption.
2. React creates a `FormData` request.
3. Axios sends the request to the Express backend.
4. Multer receives the uploaded image.
5. The image is uploaded to ImageKit.
6. The ImageKit URL and caption are stored in MongoDB.
7. The newly created post is returned to the frontend.

### Fetching Posts

1. React requests `GET /posts`.
2. Express fetches posts from MongoDB.
3. MongoDB returns the post data.
4. React displays the posts in the feed.

## 🔌 API Endpoints

### Create Post

```http
POST /create-post
```

**Form Data:**

| Field   | Type   |
| ------- | ------ |
| image   | File   |
| caption | String |

### Get Posts

```http
GET /posts
```

Returns all posts stored in the database.

## ⚙️ Environment Variables

Create a `.env` file inside the `Backend` directory:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

> ⚠️ Never upload your `.env` file or private API keys to GitHub.

## ▶️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/sydabdulbasit123/Backend_2.git
cd Backend_2
```

### 2. Start the Backend

```bash
cd Backend
npm install
npm start
```

The backend will run on:

```text
http://localhost:3000
```

### 3. Start the Frontend

Open another terminal:

```bash
cd Frontend/post-project
npm install
npm run dev
```

Vite will provide the local frontend URL in the terminal.

## 📌 Current API Routes

| Method | Route          | Purpose         |
| ------ | -------------- | --------------- |
| POST   | `/create-post` | Create a post   |
| GET    | `/posts`       | Fetch all posts |

## 🎯 Learning Goals

This project was built to practice:

* Express.js backend development
* REST APIs
* MongoDB and Mongoose
* File uploads with Multer
* Third-party cloud image storage
* React API integration
* Axios
* React Router
* Frontend-backend communication
* Basic full-stack project structure

## 🔮 Future Improvements

Some planned improvements
