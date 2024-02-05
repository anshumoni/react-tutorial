import React, { useEffect } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Grocery from "./src/components/Grocery";


const Applayout=()=>{
    
    
    return (
        <div className=" container w-auto">
            <Header/>
            <Outlet/>
            <Body/>
        </div>
    )

}
const appRoute = createBrowserRouter([
    { 
     path:"/",
     element:<Applayout/>,
     children:[
        {
         path:"/home",
         element:<Body/>
     },
     {
         path:"/about",
         element:<About/>
     },
     {
         path:"/contact",
         element:<Contact/>
     },
     {
         path:"/grocery",
         element:<Grocery/>
     },
 ] 
 },])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute}/>)
