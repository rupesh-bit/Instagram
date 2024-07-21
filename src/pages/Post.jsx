import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import appwriteService from '../Appwrite/posts'
import { useState } from 'react';
import { useSelector } from 'react-redux';



function Post() {
  const mypost=useSelector(state=>state.auth.userpost);
const [post,setPost]=useState('')
const [auther,setauther]=useState('')
const navigate=useNavigate()
 const {slug}=useParams();

  useEffect(() => {
    if (slug) {
        appwriteService.getPost(slug).then((photo) => {
            if (photo) {
               setauther(mypost.filter((my)=>my.$id==photo.$id))
              setPost(photo);}
            else navigate("/");
        });
    } else navigate("/");

}, [slug, navigate]);


const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
        if (status) {
            appwriteService.deleteFile(post.featuredImage);
            navigate("/");
        }
    });
};
 
  return post && (
    <div>
      <h1 className='mx-auto w-20'>{post.title}</h1>
      
       <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl mx-auto my-4 max-h-screen"
                    />

        
           
          {auther[0]&& (<div className='mx-auto w-20' onClick={deletePost}>
            <span className='  px-3 py-1 bg-red-500 rounded-md mb-3'>Delete</span></div>)} 
            <div className="h-12 md:hidden bg-black mt-2"></div> 
        


    </div>
  )
}

export default Post