import { useState,useEffect } from "react"
import { Outlet,Link } from "react-router-dom"
import Signin from "./component/Signin"
import { useDispatch,useSelector } from "react-redux"
import authService from "./Appwrite/Auth"

import { logout } from "./redux/data"
import Downnav from "./pages/Downnav"
import Sidenav from "./component/Sidenav"


export default  function App (params) {
  

  const user=useSelector(state=>state.auth)
  

 
 
  
if(!user.status){return <><Signin /></>}

return <>
<div className="min-h-screen relative   bg-black  text-white ">

      <Downnav/>
      
       <Sidenav/>

     <div className=" absolute left-0 md:left-20 xl:left-60 min-h-screen right-0 overflow-x-hidden bg-black ">

     <Outlet/>
     </div>
</div>

</>

}