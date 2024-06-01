import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './component/Home.jsx'
import Profile from './component/Profile.jsx'
import Explor from './component/Explore.jsx'
import Signin from './component/Signin.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './redux/data.js'
import Addpost from './component/Addpost.jsx'
import Post from './pages/Post.jsx'



const router =createBrowserRouter([
  {
  path:'/', element: <App/>,
  children:[
      {path:'/', element:<Home/>},
    
       { path:'/explor', element:<Explor/> },

      {path:'/profile', element:<Profile />},

       { path:'/addpost', element: <Addpost />},

       { path:'/post/:slug', element: <Post />},
 
 

    ]

  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
