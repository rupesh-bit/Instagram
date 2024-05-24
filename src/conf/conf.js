const conf = {
    appwriteUrl: 'https://cloud.appwrite.io/v1',//String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:'662f46f10034e650c270', //String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: '663087fa000a9c83291f',//String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: '6630889600386be80722',//String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: '6630895a002e223d663c'  //String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

export default conf