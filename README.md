**Ecommerce-Capstone-backend project**

To start the Node.js backend project, follow these steps:

**1. Clone the Repository**
If you haven’t already cloned the repository:
https://github.com/UroobaEjaz/ECommerce-Capstone-backend

git clone 
Navigate into the project directory: ECommerce-Capstone-backend

cd ECommerce-Capstone-backend


**2. Install Dependencies**
Install all the required packages using npm or yarn:
npm install
or
yarn install

**3. Set Up Environment Variables**
Create a .env file in the root directory and configure the necessary variables, such as:
PORT = 5000
MONGO_DB_URL=mongodb+srv://uroobanumair48:cS5Yhw6os09OSDbw@cluster0.5yd98.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=nLhEY3PKSApfcm9g0DUdocYrH4isgMHzCG02r8JEJ+0=


**4. Run the Database**
Ensure your database (e.g., MongoDB/PostgreSQL) is running. Start it locally or connect to a hosted database using the connection string specified in the .env file.

**5. Start the Server**
Run the application in the desired mode:

Development Mode (with hot-reloading):
npm run dev

**6. Access the Application**
By default, the server will be running at:
http://localhost:3000
or the port specified in the .env file.
