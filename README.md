# Instagram

This project is an Instagram clone built using the react.js,javascript,vite and Appwrite . It allows users to sign up, log in, create posts, like and comment on posts.

## Features
- User Authentication
- Image Posts with Captions
- veiw your post 
- explor others post

## Tech Stack
- React
- tailwind
- Appwrite


## how to run this instagram app?
1. ```bash
     git clone <--project link--> 
    npm install
    npm run dev
    ```        
Now you will see the login page, but it will not register until you have an Appwrite(open source) account 
If you don't have an appwrite account then

2. create an Appwrite account 
3. go to instagram-->src-->conf-->conf.js   look at VITE_APPWRITE_URL and other three option
4. make a project , database , collection ,bucket in Appwrite website
5. create a .emv file in instagram folder and copy this and paste it there

```bash
VITE_APPWRITE_URL='https://cloud.appwrite.io/v1'
VITE_APPWRITE_PROJECT_ID='<--your project ID-->'
VITE_APPWRITE_DATABASE_ID='<--your DATABASE ID-->'
VITE_APPWRITE_COLLECTION_ID= '<--your collection ID-->'
VITE_APPWRITE_BUCKET_ID='<--your BUCKET ID-->'
```

## if everything done well ,you able to register and able uplode photo into your account .
## and in this process you can learn a lot about Appwrite which is backend as a service(Baas) app .

## Prerequisites
- Node.js installed on your machine

  -----<>------<>------<>-------