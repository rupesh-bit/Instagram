import { useState } from "react"

  

 export default  function Color(params) {
  const [c,setc]=useState("bg-slate-900")

  function color(p) {
   setc(p)
    
  }
     //
    //absolute top-1/2
    return(
 <><div className={`${c} text-center flex justify-center flex-col   min-h-screen `}>
 <div className=" bg-slate-300  max-w-md  mx-auto px-5 py-1 rounded-md ">
 <button onMouseEnter={()=>color("bg-red-600")} className="rounded-md p-1 bg-red-600 shadow-2xl ml-2 px-2">red</button>
 <button onClick={()=>color("bg-green-600")} className="rounded-md p-1 ml-2 px-2 bg-green-600 shadow-2xl">green</button>
 <button onClick={()=>color("bg-blue-600")} className="rounded-md p-1 ml-2 px-2 bg-blue-600 shadow-2xl">blue</button>
 <button onClick={()=>color("bg-yellow-600")} className="rounded-md p-1 ml-2 px-2 bg-yellow-600 shadow-2xl">yellow</button>
   <button onClick={()=>color("bg-violet-600")} className="rounded-md p-1 ml-2 px-2 bg-violet-600 shadow-2xl">violet</button>
 </div>
 </div>
 </>

    )
    
  }