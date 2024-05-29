import {useForm} from 'react-hook-form'
import { useState } from 'react';
import authService from '../Appwrite/Auth';
import {motion} from 'framer-motion'
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {login,logout} from "../redux/data"



export default function Signin({setc}) {
     const [loding,setloding]=useState(false)
const { register,handleSubmit}=useForm();
 const dispatch=useDispatch()

useEffect(()=>{
     authService.getCurrentUser()
     .then((userData)=>
        {if(userData)
          {setc(userData)
            dispatch(login({userData}))}
           
            else{setloding(true)
               dispatch(logout())}

        })
    

},[])



 const Login= async(da)=> {
    
    
     const se=await  authService.login(da);
     if(se){ ;
     const userData= await authService.getCurrentUser()
          setc(userData);dispatch(login({userData}))}
  }

if(!loding){return (
 <div className="min-h-screen bg-gray-950 flex justify-center items-center flex-col text-white">
    <div className='text-9xl'>loading</div>
</div>)}


return (
<div className="w-full flex items-center  justify-between h-screen bg-zinc-400">
 <div className="w-1/2 h-full bg-zinc-800 overflow-hidden whitespace-nowrap hidden lg:block ">
     <div className='w-screen h-full flex  justify-start items-center'>
            <motion.div initial={{x:'-100%'}} animate={{x:"0"}} transition={{repeat:Infinity, ease:"linear", duration:20}} 
            className='h-1/3 w-1/2 bg-slate-300  border-orange-600 border-2' >
             <div className=' '> me ho masiha ha ha ha ha ha ha ah aha ah ah aha ahha hha hahaha ha h </div>
              </motion.div>

              <motion.div initial={{x:'-100%'}} animate={{x:"0"}} transition={{repeat:Infinity, ease:"linear", duration:20}}
               className='h-1/3 w-1/2 bg-slate-300  border-orange-600 border-2 ' >
             <div className=' '>me ho masiha ha ha ha ha ha ha ah aha ah ah aha ahha hha hahaha ha h </div>
              </motion.div>
      </div>
 
 
 </div>


 <div className="lg:w-1/2 w-full h-full bg-zinc-800 lg:ml-[1px] flex items-center justify-center ">

  <div className="w-4/5 border-orange-600 border-2 bg-zinc-400 lg:h-1/2 rounded-lg flex items-center justify-center"> 

    <div className='w-2/3 justify-center flex items-center flex-col '>

      <h1 className="text-4xl mb-8 mt-2" >Log in</h1>
  
      <form  className='mx-auto py-3'>
           <div className=" border-zinc-700 py-2 lg:py-3 px-5  border-[1px] rounded-full mb-1"> 
              <label className='ml-4' htmlFor='email'>Email:</label>
             <input type="email" id='email' placeholder="Email" {...register("email",{required:true})} />
          </div> 
          <div className="mb-1 border-zinc-700 py-2 lg:py-3 px-5  border-[1px] rounded-full"> 
              <label className='mb-3'htmlFor='password'>password:</label>
               <input id='password' type="password" placeholder="Password"  {...register("password",{required:true})} />
           </div>
          <div className="mb-6 border-zinc-700 py-2 lg:py-3 px-5  border-[1px] rounded-full">
               <label className='mb-3' htmlFor='name'>name:</label>
              <input id='name' type="text" placeholder="Name"  {...register("name",{required:true})}/> 
           </div>

           <div className='w-full flex justify-center sm:inline'><button className=' border-orange-600 border-2 rounded-full px-5 py-4  sm:mx-6 m-2 text-xl' 
           type="button" onClick={handleSubmit(Login)}>
             login
           </button></div>

           <div className='w-full flex justify-center sm:inline'><button className='mx-auto border-orange-600 border-2 rounded-full px-5 py-4 text-xl'
             type="button"
             onClick={handleSubmit(async(da) => {
                 await authService.createAccount({...da});
                login(da);})
             }
           >
             Register
           </button></div>
      </form>
    </div>
  </div>
 </div>
 
 </div>
)


}