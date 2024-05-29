
import { useState ,useEffect} from "react";
import Lphoto from "../pages/Lphoto";
import service from '../Appwrite/posts'
import Photo from "./Photo";
import {useDispatch, useSelector} from 'react-redux'
import { storepost,rtest } from "../redux/data";


export default function Home(params) {
    const user=useSelector(state=>state.auth);
    const dispatch=useDispatch()
      const posts=user.posts
     useEffect(()=>{
       if (!user.posts){
           service.getPosts()
          .then((posts)=>
            {if(posts)
           {
               let post=posts.documents
               const mypost=post.filter((p)=>'"'+user.userData.$id+'"'==p.userId)
          const my=post.filter((p)=>user.userData.$id==p.userId)
             my.map((m)=>mypost.push(m));
             dispatch(rtest({mypost}))
               dispatch(storepost({post}))// dispatch(login({userData}))
           }})
        }
        
       },[])
 

    return (<>
   <div className="sm:mx-auto  md:w-[470px]  min-h-screen md:border-x-[1px]  md:border-zinc-500">
           
          <div>{posts?posts.map((post,index)=><Lphoto key={post.featuredImage} {...post}/>):null} 
          </div>
          <div className="h-12 md:hidden bg-slate-100">
            
          </div>
   
   </div>
    </>)
    
}//