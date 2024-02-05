const RestCard=(props)=>{
    console.log("props",props.card);
    if(!props?.card){
      return
    }
     
     const {name,areaName,avgRating,cloudinaryImageId,costForTwo,cuisines} = props?.card;

    return (
        <div className="w-[300px]  bg-slate-200 shadow-lg border-solid rounded-lg m-4">
            <div className="w-[250px] rounded-lg p-2 m-2 text-center">
                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}/>
            </div>
            <div className="p-2 m-2 text-xl font-bold">
            <h1 className="font-bold">{name}</h1>
            <h1>Price:{costForTwo}</h1>
            <h1>Location:{areaName}</h1>
            <h2 className=" break-words">{cuisines.join(",")}</h2>
            <h3>Rating: {avgRating}</h3>
            </div>
            
        </div>
    )
}

export const SpecRestCard=(RestCard)=>{
     //console.log("comp",RestCard);
     return (props)=>{
                return <div>
                    <label className=" bg-red-700 text-white my-7 mx-4 absolute p-3">Special</label>
                    <RestCard {...props}/>
                </div>
     }
}
export default RestCard;