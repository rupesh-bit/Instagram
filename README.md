# Instagram

how to run this instagram app?
1--git clone <--project link-->   (run)
2--npm i (run)
3--npm run dev (run)
            
Now you will see the login page, but it will not register until you have an Appwrite(open source) account 
If you don't have an appwrite account then
4--create an Appwrite account 
5--go to instagram-->src-->conf-->conf.js   look at VITE_APPWRITE_URL and other three option
6--make a project , database , collection ,bucket in Appwrite webstie
7--create a .emv file in instagram folder and copy this paste it there

VITE_APPWRITE_URL='https://cloud.appwrite.io/v1'
VITE_APPWRITE_PROJECT_ID='<--your project ID-->'
VITE_APPWRITE_DATABASE_ID='<--your DATABASE ID-->'
VITE_APPWRITE_COLLECTION_ID= '<--your collection ID-->'
VITE_APPWRITE_BUCKET_ID='<--your BUCKET ID-->'

if everything done well ,you able to register and able uplode photo into your account .
and in this process you can learn a lot about Appwrite which is backend as a service(Baas) app .

  -----<>------<>------<>-------

# Instagram Clone - MERN Stack

This project is an Instagram clone built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to sign up, log in, create posts, like and comment on posts, and follow other users.

## Features
- User Authentication
- Image Posts with Captions
- Like and Comment on Posts
- Follow and Unfollow Users

## Tech Stack
- React
- Node.js
- Express
- MongoDB

## Prerequisites
- Node.js installed on your machine
- MongoDB set up locally or using MongoDB Atlas

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/instagram-clone.git
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```

4. Start the application:
    ```bash
    npm run dev
    ```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
