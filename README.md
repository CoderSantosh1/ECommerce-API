# Ecom-APi
Step 1: Connecting to MongoDB Atlas.
Step 2: Adding REST API CRUD Routes.
Step 3: Setting Up the Front-End.
Step 4: Testing the Application.

\Node. js supports asynchronous, event-driven programming, which enables more efficient development of web applications. Node. js is commonly used to build eCommerce applications and develop functionality for eCommerce platforms.
Which language is good for eCommerce?
JavaScript is the most popular and leading programming language worldwide for e-commerce websites. It is a simple programming language that's highly versatile and scalable. It is a leading programming language because it can extend web pages beyond static capabilities
APIs are a very common thing nowadays. They are used everywhere on the website. APIs serve as the connection between the database, which stores all the data, and the frontend with which the user interacts to get access to the data.

API mean Application Programming Interface, which is a set of clearly defined methods of communication between the frontend and the database.

REST which stands for Representational State Transfer is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

REST APIs mostly use JSON as the preferred choice for transferring data as they are easy to understand and is readable.

In this tutorial, we will use Node, Express and MongoDB to create a REST API that would support the four operations — GET, POST, PUT and DELETE.

So, let’s first discuss these four operations and try to understand what they mean in the context of API development.

GET — GET means to read the data. The function of this operation is to retrieve the data from the database and present it to the user.
POST — POST, as the name suggests, is used to post/add new data to the database. It allows users to add new data to the database.
PUT — PUT means to update the data already present in the database.
DELETE — It is used to delete any existing data from the database.
So, our REST API will perform all these four operations. We will use the Express package to make our work easier. We will use MongoDB as the NoSQL database to store all our data. MongoDB stores data in JSON format.

So, we will do it step by step. First, we would build the API endpoints and then we would connect to the database to perform actual operations. We would use Postman software for API testing.

Setting up the Project
First of all, we need to download Node on our system. Then we can start creating our project.

So, first of all, we need to create a folder in our system where we would love to build our project. I kept the name of the folder as rest-API.

Then we need to move into the rest-API folder we created just now. Now to start a new project, we would run the following command within the folder:-

npm init
It will ask various questions regarding the project, like name, description and other things. We want to keep everything in the default mode except the name and description, which we can add at our convenience.

After completion, we will see a package.json file in the folder. It contains all the data we just gave to create this file. You can see the entry point is the index.js file.

After creating the package.json file, we need to download Express on our machine. To install Express, we can:-

npm install express --save
This will download and save express in our system and also will add express as a dependency in our package.json file.

We will also like to download a development dependency named nodemon which will allow us to develop faster. It will help us to avoid restarting the server each time we make a change and will automatically refresh, which would save us a lot of time.

So, to install nodemon, we would do:

npm install --save-dev nodemon
Notice that we have used save-dev to install and add it in the package.json file as a dev dependency, as we are using it to speed up our development process.

Now, we need to download MongoDB in our system and then create the cluster and connect it with your local computer.

Next, we must download mongoose to interact with the MongoDB database from our express application.
hello my name is narendra singh