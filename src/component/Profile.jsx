import Photo from "./Photo";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import service from "../Appwrite/posts";
import { logout, storepost } from "../redux/data";
import { rtest } from "../redux/data";
import  AuthService  from "../Appwrite/Auth";


export default function Profile(params) {
  
    const user=useSelector(state=>state.auth);
   const dispatch=useDispatch()
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
              dispatch(storepost({post})) // dispatch(login({userData}))
          }})
       }
       
      },[])

     function handlelogout(){
       AuthService.logout()
       
        
          dispatch(logout()); 
          alert('logged out successfully !')
     }

      if(user.userpost)
        {
           const mypost=user.userpost

    return (<>
  <div className="w-full pt-4 min-h-screen bg-black">
       
    <div className="w-full lg:w-11/12 xl:w-9/12  overflow-x-hidden  mx-auto">


        <div className="h-[406px]   ">
          <div className="  w-full grid grid-cols-3 h-[188px] mb-11">
          <div className="   md:pr-[28px] px-1 pt-4">
            <div className="bg-red-500 md:h-[150px] md:w-[150px] h-32 mx-auto  rounded-full ">
            {mypost[0]?(<img className="object-center object-cover h-full w-full overflow-hidden rounded-full" 
            src={service.getFilePreview(mypost[0].featuredImage)}  alt={mypost[0].title}/>):null}
            
          </div>
          </div>
      
         <div className="col-span-2   ">
           <div className="flex text-[20px]"> {user.userData.name}
            <span className="bg-gray-700 hidden md:inline rounded-lg px-4 py-1 ml-8 mr-3 text-[14px] font-semibold"> Edit profile</span>
            <span onClick={handlelogout} className="bg-gray-700  md:hidden rounded-lg px-4 py-1 ml-8 mr-3 text-[14px] font-semibold"> Log out</span>
          
            <svg aria-label="Options" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" 
            role="img" viewBox="0 0 24 24" width="24"><title>Options</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
            <path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
               
          </div>
          <div className="flex gap-[40px] my-[20px] leading-[18px]">
           <div>{mypost[0] ? mypost.length:0}   Posts</div>
           <div><button onClick={()=>console.log(mypost,user.posts,user.userpost)}>10 followers</button></div>
           <div>10 following</div>
          </div>

               <div className="text-sm leading-[18px]">
                   <div className="font-semibold">ouf uf dfn df</div>
                   <div>fddfi idfun</div>
                    <div>njf njf</div>
                   <div>gfcfc</div>
                   <div>gfcfc</div>
               </div>
               
         
        </div>
       </div>
        <div className=" h-[174px] flex  py-2 gap-14">
          <div className="ml-10 flex flex-col items-center"><div className=" w-20 h-20 bg-slate-500 rounded-full"></div>
          <span>gv yg</span></div>
          <div className=" flex flex-col items-center"><div className=" w-20 h-20 bg-slate-500 rounded-full"></div>
          <span>gv yg</span></div>
          <div className=" flex flex-col items-center"><div className=" w-20 h-20 bg-slate-500 rounded-full"></div>
          <span>gv yg</span></div>
          
        </div>


      </div>

      <div className="w-full  grid grid-cols-3 gap-1 mx-auto">

        {mypost? mypost.map((post)=>
        {return(<div key={post.featuredImage}><Photo {...post}/>
        </div>)})
        :null}
      </div>
       
       
    </div>
</div>
 <div className="h-12 md:hidden bg-slate-100">
        </div>
    </>)
    
   }
   
   else return<><div className="text-3xl font-medium flex justify-center items-center">reload</div></>
  }

import React from 'react'

