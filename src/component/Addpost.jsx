
import {useForm} from 'react-hook-form'
import service from '../Appwrite/posts';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';


export default function Addpost(params) {
    const userData=useSelector(state=>state.auth.userData);
    const {register, handleSubmit}=useForm()
       const navigate=useNavigate()
    const submit = async (data) => {
               console.log(data)
            const file = await service.uploadFile(data.image[0]);

            if (file) {
                console.log(file)
                
                const fileId = file.$id;
                data.featuredImage = fileId;
                
                const dbPost = await service.createPost({ ...data, userId: userData.$id });//createPost({ ...data, userId: userData.$id }); 
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }             
            }
        
    };
    

return (<>

<div className='text-black w-full  flex items-center justify-center'>
    <div className=' h-full w-9/12 bg-zinc-500 flex items-center min-h-screen justify-center flex-col border-red-700 border-2'>
          <h1 className='text-4xl mb-16' >
            Addpost</h1>

            <form className='mx-auto ' onSubmit={handleSubmit(submit)}>
               <div className=" border-zinc-700 py-3 px-5 w-10/12 md:w-full  border-[1px] rounded-full mb-1"> 
                   <label htmlFor='title'>
                    Title  </label>
                    <input id='title' placeholder='Title' 
                    {...register('title',{required:true})}/>
               </div>

               <div className=" border-zinc-700 py-3 px-5 w-10/12 md:w-full border-[1px] rounded-full mb-1"> 
                   <label htmlFor='content'>
                    content  </label>
                   <input id='content' placeholder='content' 
                   {...register('content')}/>
               </div>

               <div className=" border-zinc-700 py-3 px-5 w-10/12 md:w-full border-[1px] rounded-full mb-1"> 
                    <label htmlFor='image'>
                        Image</label>
                    <input id='image' type='file' 
                    accept="image/png, image/jpg, image/jpeg, image/gif" 
                    placeholder='Title' {...register('image',{required:true})}/>
               </div>

                 <div className=" border-zinc-700 py-3 px-5 w-10/12 md:w-full border-[1px] rounded-full mb-6"> 
                     <label htmlFor='st'>
                        status</label>
                     <select id='st'  {...register('status',{required:true})} >
                         <option value='active'>active</option>
                         <option value='inactive'>inactive</option>
    
                     </select>
                 </div>

                  <button className=' border-orange-600 border-2 rounded-full px-5 py-1 ml-32 text-xl' 
                  type='submit'>
                    submit
                    </button>
                    
             </form>
             <div className="h-12 md:hidden bg-slate-100">               
             </div>
     </div>
</div>

</>)
}