import React from 'react'
import { IoHome } from "react-icons/io5"
import { CgProfile } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux"
import authService from "../Appwrite/Auth"
import { logout } from "../redux/data"


function Sidenav() {
    
    const dispatch =useDispatch()
    function handellogout() {
    
        authService.logout();
        
          dispatch(logout()); 
      }
    
  return (
    <div className=" xl:w-60 hidden md:w-20 border-r-[1px] fixed h-screen border-zinc-600   md:flex flex-col justify-between bg-black pl-6">

      <div className="flex flex-col gap-9 mt-7 ">

          <div className="relative mb-7 xl:mb-14 ">
            <svg aria-label="Instagram" class="x1lliihq x1n2onr6 x5n08af" className="xl:hidden mt-3" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Instagram</title>
            <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path></svg>
           
             <img className="h-11 absolute left-[-13px] hidden xl:inline " src="ss.png"/>
          </div>

           <Link to="/Instagram/">
            <div className="flex gap-3 items-center"><IoHome className="text-2xl" />
              <span className="hidden xl:inline">Home</span></div>
           </Link>

           <Link to="/Instagram/profile">
            <div className="flex gap-3 items-center"><CgProfile className="text-2xl"/>
            <span className="hidden xl:inline">Profile</span></div></Link>
            
           <Link to="/Instagram/explor">
            <div className="flex gap-3 items-center"><MdOutlineExplore className="text-2xl"/>
            <span className="hidden xl:inline">Explor</span></div></Link>

           <Link to="/Instagram/addpost">
            <div className="flex gap-3 items-center"><MdAddToPhotos className="text-2xl"/>
            <span className="hidden xl:inline">Addpost</span></div></Link>

           <div onClick={()=>console.log(user)} >
           </div>

      </div>

       <div className="mb-7">
          <div className="flex gap-3 items-center" onClick={handellogout}><IoLogOutOutline className="text-2xl"/> 
          <span className="hidden xl:inline">logout</span></div>
      </div>
    </div >

  )
}

export default Sidenav