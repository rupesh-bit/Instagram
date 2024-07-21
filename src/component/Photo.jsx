import { Link } from "react-router-dom"
import service from "../Appwrite/posts"


export default function Photo({featuredImage,title,$id}) {



return (<>
<div className={`w-full h-40 md:h-60 lg:h-80  overflow-hidden`} >
    <Link  to={`/post/${$id}`} >
    <img className="object-center object-cover h-full w-full"
     src={service.getFilePreview(featuredImage)} alt={title}/>
     </Link>
    <label>{title}
    </label>
</div>
</>)
}

//








