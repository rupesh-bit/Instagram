import {useForm} from 'react-hook-form'
import { useState } from 'react';
import authService from '../Appwrite/Auth';
import {motion} from 'framer-motion'
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {login,logout} from "../redux/data"
import { useNavigate } from 'react-router-dom';



export default function Signin() {
  
  const navigate= useNavigate()
     const [loding,setloding]=useState(false)
const { register,handleSubmit}=useForm();
 const dispatch=useDispatch()

useEffect(()=>{
     authService.getCurrentUser()
     .then((userData)=>
        {if(userData)
          {
            dispatch(login({userData}))}
           
            else{setloding(true)
               dispatch(logout())}

        })
    

},[])



 const Login= async(data)=> {
     const se=await  authService.login(data);
     if(se){ 
     const userData= await authService.getCurrentUser()
          dispatch(login({userData}));
          navigate('/')
        }
  }

  const Gest= async(data)=> {
    data={email: 'three@gmail.com', password: '12345678'}
 console.log(data)
  const se=await  authService.login(data);
  if(se){ 
  const userData= await authService.getCurrentUser()
       dispatch(login({userData}));
       navigate('/')
     }
}



if(!loding){return (
 <div className="min-h-screen bg-gray-950 flex justify-center items-center flex-col text-white">
    <div className='text-9xl'>loading</div>
</div>)}


return (
<div className="w-full flex items-center  justify-between h-screen bg-zinc-400">
 <div className="w-1/2 h-full bg-zinc-800 overflow-hidden whitespace-nowrap hidden lg:block ">
     <div className='w-screen h-full flex  justify-start items-center relative'> 
          <div className='absolute z-10 top-48 left-80 '> <img src='ss.png'/></div>
            <motion.div initial={{x:'-100%'}} animate={{x:"0"}} transition={{repeat:Infinity, ease:"linear", duration:20}} 
            className='h-1/2 w-1/2 bg-black border-orange-600 border-y-2 overflow-hidden pl-11' >
             <div className='h-4/5 mt-20 flex w-full justify-between '>
               <img className='object-cover  h-64' src='s.jpg'/>
             <img  className='object-cover h-64' src='s2.jpg'/>
             <img  className='object-cover h-64' src='s3.jpg'/> 
             </div>
              </motion.div>

              <motion.div initial={{x:'-100%'}} animate={{x:"0"}} transition={{repeat:Infinity, ease:"linear", duration:20}}
               className='h-1/2 border-orange-600 border-y-2 w-1/2 bg-black overflow-hidden  ' >
             <div className='h-4/5 mt-20 flex w-full justify-between pl-11 '>
               <img className='object-cover  h-64' src='s.jpg'/>
             <img  className='object-cover h-64' src='s2.jpg'/>
             <img  className='object-cover h-64' src='s3.jpg'/> </div>
              </motion.div>
          
      </div>
 
 
 </div>


 <div className="lg:w-1/2 w-full h-full bg-zinc-800 lg:ml-[1px] flex items-center justify-center ">

  <div className="sm:w-4/5 w-full border-orange-600 border-2 bg-zinc-400 lg:h-2/3 rounded-lg flex items-center justify-center"> 

    <div className='w-2/3 justify-center flex items-center flex-col '>

      <h1 className="text-4xl mb-8 mt-2" >Log in</h1>
  
      <form  className='mx-auto py-3' onSubmit={handleSubmit(async(da) => {
                 try {
                  const userData = await authService.createAccount({...da})
                  if (userData) {
                      const userDat = await authService.getCurrentUser()
                       dispatch(login(userDat));
                       alert('Account created and logged in successfully!')  
                  }
              } catch (error) {
                  setError(error.message)
              }})}>
           <div className=" border-zinc-700 py-2 lg:py-3 px-5  border-[1px] rounded-full mb-1"> 
              <label className='ml-4' htmlFor='email'>Email:</label>
             <input type="email" id='email' placeholder="Email" {...register("email")} />
          </div> 
          <div className="mb-1 border-zinc-700 py-2 lg:py-3 px-5  border-[1px] rounded-full"> 
              <label className='mb-3'htmlFor='password'>password:</label>
               <input id='password' type="password" placeholder="Password"  {...register("password")} />
           </div>
          <div className="mb-6 border-zinc-700 py-2 lg:py-3 px-5  border-[1px] rounded-full">
               <label className='mb-3' htmlFor='name'>name:</label>
              <input id='name' type="text" placeholder="Name"  {...register("name")}/> 
           </div>
          <div className=''>
           <div className='w-full  flex justify-center sm:inline'><button className=' border-orange-600 border-2 rounded-full px-5 py-4  sm:mx-6 m-2 text-xl' 
           type="button" onClick={handleSubmit(Login)}>
             Login

           </button></div>
           <div className='w-full  flex justify-center sm:inline'><button className='mx-auto border-orange-600 border-2 rounded-full px-5 py-4 text-xl'
                        type="submit">
                         Register
                       </button></div>
          </div>

           <div className='w-full  flex justify-center sm:inline ml-6'><button className=' border-orange-600 border-2 rounded-full px-5 py-4  sm:mx-6 m-2 text-xl' 
             type="button" onClick={handleSubmit(Gest)}>
                Login as a Gest
           </button></div>

           
      </form>
    </div>
  </div>
 </div>
 
 </div>
)


}

