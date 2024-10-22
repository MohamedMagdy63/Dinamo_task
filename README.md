# AN ERD for the project
https://www.figma.com/board/jUEqeFgbZV9Op1K1AmVdJv/Dinamo?node-id=0-1&t=bcR4Py40vcmNCcxi-1  
# Approach for End-Points APIs
# Products
- GET /products - List all products
- GET /products/:id - Get a specific product
- POST /products - Create a new product
- PUT /products/:id - Update a product
- DELETE /products/:id - Delete a product

# Vendors
- GET /vendors - List all vendors
- GET /vendors/:id - Get a specific vendor
- POST /vendors - Create a new vendor
- PUT /vendors/:id - Update a vendor
- DELETE /vendors/:id - Delete a vendor

# Users
- GET /users - List all users (admin only)
- GET /users/:id - Get a specific user
- POST /users - Create a new user (signup)
- PUT /users/:id - Update a user
- DELETE /users/:id - Delete a user

# Cart
- GET /cart - Get the current user's cart
- POST /cart/items - Add an item to the cart
- PUT /cart/items/:id - Update an item in the cart
- DELETE /cart/items/:id - Remove an item from the cart
- POST /cart/checkout - Process the cart 

# The Authentication Solutions are:
- I will use Authentication Methods such
- JWT (JSON Web Token) for stateless API authentication 
- OAuth2 for Login with third-party applications
    .  passport-google-oauth20
    .  passport-github