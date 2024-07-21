import React from 'react'
import { IoHome } from "react-icons/io5"
import { CgProfile } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Downnav() {
  return (
    <div className='z-40 bottom-0 fixed bg-black w-full h-12 md:hidden border-t-[1px] border-zinc-400'>
        <div className='flex justify-evenly items-center h-full'>
           <Link to="/">
            <div className="flex gap-3 items-center"><IoHome className="text-2xl" />
              </div>
           </Link>

           <Link to="/profile">
            <div className="flex gap-3 items-center"><CgProfile className="text-2xl"/>
             </div></Link>

           <Link to="/explor">
            <div className="flex gap-3 items-center"><MdOutlineExplore className="text-2xl"/>
            </div></Link>

           <Link to="/addpost">
            <div className="flex gap-3 items-center"><MdAddToPhotos className="text-2xl"/>
            </div></Link>

        </div>
       


    </div>
  )
}

export default Downnav