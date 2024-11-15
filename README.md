
# 🚗 Car Management Application

This project is a full-stack web application that allows users to manage their car listings. Each user can add, view, edit, and delete their own cars, with support for image uploads and a global search feature to filter cars by title, description, or tags.

- **Client URL**: [https://your-client-domain.com](https://your-client-domain.com)
- **Server URL**: [https://your-server-url.com](https://your-server-url.com)

## 🌟 Features

### **User Authentication**
- Users can sign up and log in with JSON Web Token (JWT) authentication for secure access.

### **Car Management**
- Users can create, view, update, and delete their car listings.
- Each car entry includes a title, description, up to 10 images, and tags like car type, company, and dealer.

### **Image Uploads**
- Each car entry can hold up to 10 images to showcase different angles and details of the car.

### **Global Search**
- A keyword search allows users to search through all cars based on title, description, or tags, providing easy access to relevant results.

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js
- **Deployment**: Vercel
- **Authentication**: JSON Web Token (JWT)
- **Styling**: Tailwind CSS (optional for styling purposes)

## 🚀 Getting Started

### **Prerequisites**

- **Node.js** (v14 or higher)
- **MongoDB** (local instance or a cloud database like MongoDB Atlas)
- **Vercel** account (optional for deployment)

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/car-management-app.git
   cd car-management-app
   ```

2. **Install dependencies**:
   Run this command in both `backend` and `frontend` directories.
   ```bash
   npm install
   ```

3. **Set up environment variables**:

   In the `backend` directory, create a `.env` file with the following values:

   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

   In the `frontend` directory, create a `.env` file with:
   
   ```plaintext
   REACT_APP_API_BASE_URL=http://localhost:5000
   ```

4. **Run the application**:

   - **Backend**: 
     ```bash
     cd backend
     npm start
     ```
     The backend server should be running on `http://localhost:5000`.

   - **Frontend**: 
     ```bash
     cd frontend
     npm start
     ```
     The frontend client should be accessible at `http://localhost:3000`.


## 📚 API Endpoints

### **Authentication**

- **POST** `/signup`: Creates a new user account.
- **POST** `/login`: Authenticates a user and issues a JWT.

### **Car Management**

- **POST** `/api/cars`: Add a new car (requires authentication).
- **GET** `/api/cars`: Retrieve all cars for the authenticated user.
- **GET** `/api/cars/:id`: Retrieve details of a specific car.
- **PUT** `/api/cars/:id`: Update car details.
- **DELETE** `/api/cars/:id`: Delete a car.

## 📝 License

This project is licensed under the MIT License.

