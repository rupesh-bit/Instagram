import { useState ,useEffect} from "react";

import service from '../Appwrite/posts'
import Photo from "./Photo";
import {useDispatch, useSelector} from 'react-redux'
import { storepost,rtest} from "../redux/data";


export default function Explor(params) {
    
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
   <div className="w-full px-1 pt-2 min-h-screen bg-black ">
          
   
        <div className="w-full lg:w-11/12 xl:w-9/12  grid grid-cols-3 gap-1 mx-auto ">
            {posts? posts.map((post)=>
             {return(<Photo key={post.featuredImage} {...post}/>
             )})
             :null} 
         </div>
         <div className="h-12 md:hidden bg-slate-100"></div>
   </div>
    </>)
    
}//


