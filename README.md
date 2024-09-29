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

