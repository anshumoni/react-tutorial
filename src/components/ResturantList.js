import RestCard from "./Restcard";
import Shimmer from "./Shimmer";
import { SpecRestCard } from "./Restcard";

const ResturantList=(props)=>{
    const Special = SpecRestCard(RestCard)
    console.log("data",Special)
    return props.data.length?(<div className=" flex flex-wrap">
       {props.data.map((res)=>res.info.avgRating>=4.5?<Special key={res.info.id} card={res.info}/>:<RestCard key={res.info.id} card={res.info}/> )}
    </div>):<Shimmer/>
}

export default ResturantList;