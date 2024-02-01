import React, { useEffect } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";


const Applayout=()=>{
    const fetchmenu=async()=>{
        const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=22.576257&lng=88.28566529999999");
        const jsondata = await data.json(); 
        console.log("json",jsondata);
    }
    useEffect(()=>{
       fetchmenu();
       //console.log
    },[])
    return (
        <div className=" container w-auto">
            <Header/>
            <Body/>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>)
