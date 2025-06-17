# InventoryManagement
      A simple backend API for managing inventory products and user authentication for a small business. Built with Node.js, Express, PostgreSQL (via Supabase), Sequelize ORM, and JWT for secure login.

Database Schema : 

  User Table : 
  | Column Name | Data Type | Constraints       | Description           |
  | ----------- | --------- | ----------------- | --------------------- |
  | `id`        | `SERIAL`  | `PRIMARY KEY`     | Unique user ID        |
  | `username`  | `TEXT`    | `UNIQUE NOT NULL` | Username for the user |
  | `password`  | `TEXT`    | `NOT NULL`        | Hashed user password  |

  Products Table : 
  | Column Name   | Data Type       | Constraints       | Description                            |
  | ------------- | --------------- | ----------------- | -------------------------------------- |
  | `id`          | `SERIAL`        | `PRIMARY KEY`     | Unique product ID                      |
  | `name`        | `TEXT`          | `NOT NULL`        | Name of the product                    |
  | `type`        | `TEXT`          |                   | Category/type of the product           |
  | `sku`         | `TEXT`          | `UNIQUE NOT NULL` | Stock Keeping Unit (unique code)       |
  | `image_url`   | `TEXT`          |                   | URL of the product image               |
  | `description` | `TEXT`          |                   | Brief product description              |
  | `quantity`    | `INTEGER`       | `DEFAULT 0`       | Current stock quantity                 |
  | `price`       | `NUMERIC(10,2)` | `NOT NULL`        | Product price                          |
  
* Features
    -> User Sign Up & Login (JWT-based Auth)
    -> Add New Products
    -> Update Product Quantity
    -> Get All Products (with pagination)
    -> Swagger API Documentation
    -> PostgreSQL + Sequelize ORM
    -> Postman Collection for testing
    -> .env for configuration

* Tech Stack
    Backend	      Node.js, Express.js
    Database	    PostgreSQL (Supabase)
    ORM	          Sequelize
    Auth	        JWT, bcrypt
    Docs	        Swagger (OpenAPI)
    Testing	      Postman


* Folder Structure

    inventoryproject/
        ├── config/            # DB config
        ├── controllers/       # Route handlers
        ├── middleware/        # Auth middleware
        ├── models/            # Sequelize models
        ├── routes/            # Express routes
        ├── .env               # Environment variables
        ├── .gitignore 
        ├── index.js           # App entry point  
        ├── package.json
        ├── postmanCollection
        ├── README.md 
        └── swagger.js         # Swagger setup                

* Deployment & API Documentation :
      -> The backend of this project is deployed using Render, a cloud platform that allows easy and free deployment for web services with automated builds           from GitHub.
      -> The API documentation is generated using Swagger.
      You can access the live Swagger documentation here:
          http://localhost:5000/api-docs
          https://inventorymanagement-eeqg.onrender.com/api-docs/#/
  
      
* Setup Instructions
1. Clone the Repository
      git clone https://github.com/Pavan-000/InventoryManagementBackend.git
      cd inventorybackend

2. Install Dependencies
     npm install

3. Configure Environment Variables
     Create a .env file in the root directory:
     DATABASE_URL= postgres_supabase_url
     JWT_SECRET= jwt_secret_key
     PORT=5000

4. Run the App
    npm run dev or node index,js
    The server will start on:
    http://localhost:5000

* Testing the API
    Postman Collection
    Import the postman_collection.json provided in the project into Postman to test endpoints like:

    POST /signup
    POST /login
    POST /products
    GET /products?page=1&limit=10
    PUT /products/:id/quantity

    When making a request set header ->  key : content-type, Value:  application/json

* Authentication
    This project uses JWT-based authentication.

    Send the token in Authorization header:
    Authorization: Bearer <your_token>
    
Protected routes:
    POST /products
    GET /products
    PUT /products/:id/quantity

* API Endpoints Overview
        Method	                    Description

        POST/signup    	            Register new user	
        POST/login	                Login & get JWT token	
        POST/products	              Add a product	
        GET/products?page=1        	List products (paginated)	
        PUT/products/:id/quantity	  Update product quantity	

* Example Product Payload
      {
          "name": "Wireless Mouse",
          "type": "Electronics",
          "sku": "WM-1234",
          "image_url": "https://example.com/mouse.jpg",
          "description": "A smooth, ergonomic wireless mouse.",
          "quantity": 100,
          "price": 29.99
      }


  


  
