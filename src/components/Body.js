import { useState,useEffect} from "react";
import ResturantList from "./ResturantList"

const Body=()=>{
    const [restlist,setrestlist]=useState([]);
    const [filrestlist,setfilrestlist]=useState([]);
    const [searchtxt,setsearchtxt]=useState("search");

    const fetchmenu=async()=>{
        const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=22.576257&lng=88.28566529999999");
        const jsondata = await data.json(); 
        console.log("json",jsondata)
        const resturantlistdata = jsondata?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setrestlist(resturantlistdata);
        setfilrestlist(resturantlistdata)

    }
    useEffect(()=>{
       fetchmenu();
       //console.log
    },[])
    const handlesearch=()=>{
        const searchresult = restlist.filter((e)=>e.info.name.toLowerCase().includes(searchtxt));
        console.log("src",searchresult);
        setfilrestlist(searchresult)
     }
     
     const handlefilter=(filkey)=>{
        switch(filkey){
            case "toprated":
                const searchratedresult = restlist.filter(e=>parseFloat(e.info.avgRating)>4.5);
                console.log("test",searchratedresult)
                setfilrestlist(searchratedresult)
                break;
            default :
            setfilrestlist(restlist)


        }
     }


    

    return (<div className="w-auto m-2 p-2 bg-slate-100 shadow-lg">
        <h1 className="m-2 p-2 font-bold text-xl">Resturant List</h1>
        <div>
        <input type="textbox" className=" bg-slate-200 p-2 border-l-pink-200" value={searchtxt} onChange={(e)=>
            {
                setsearchtxt(e.target.value)
                handlesearch()
        }}/>
        <button className="p-2 m-2 bg-red-500 rounded-lg text-white" onClick={handlesearch}>Search</button>  
        <button className="p-2 m-2 bg-red-500 rounded-lg text-white" onClick={()=>{handlefilter("toprated")}}>Top Rated Restaurant</button>
        <button className="p-2 m-2 bg-red-500 rounded-lg text-white" onClick={()=>{handlefilter("top")}}>Reset</button>
        </div>
        <ResturantList data={filrestlist}/>
    </div>)
}

export default Body;