
import { useState ,useEffect} from "react";
import Lphoto from "../pages/Lphoto";
import service from '../Appwrite/posts'
import Photo from "./Photo";
import {useDispatch, useSelector} from 'react-redux'
import { storepost } from "../redux/data";


export default function Home(params) {
     const [cposts,setcposets]=useState(null)
     const dispatch=useDispatch()
    const posts=useSelector(state=>state.auth.posts)

    useEffect(()=>{
    if (!posts){
        service.getPosts()
       .then((posts)=>
         {if(posts)
        {
            let post=posts.documents
            dispatch(storepost({post}))// dispatch(login({userData}))
        }})
     }
    },[])
 

    return (<>
   <div className="mx-auto w-[440px] md:w-[470px]  min-h-screen border-x-[1px]  border-zinc-500">
           <button onClick={()=>console.log(posts)}>home</button>
          <div>{posts?posts.map((post,index)=><Lphoto key={post.featuredImage} {...post}/>):null} 
          </div>
          <div className="h-12 md:hidden bg-slate-100">
            
          </div>
   
   </div>
    </>)
    
}//