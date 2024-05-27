import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import appwriteService from '../Appwrite/posts'
import { useState } from 'react';



function Post() {

const [post,setPost]=useState('')
const navigate=useNavigate()
 const {slug}=useParams();

  useEffect(() => {
    if (slug) {
        appwriteService.getPost(slug).then((photo) => {
            if (photo) setPost(photo);
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
 
  return post&& (
    <div>
      <h1>{post.title}</h1>
       <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl mx-auto my-4 max-h-screen"
                    />

        

          <button onClick={deletePost}>Delete</button>
        


    </div>
  )
}

export default Post