import { Res_Logo_Url } from "../utils/constants";
const RestaurantCard = (props) =>{
   const {resData} = props
   const {name, costForTwo, cuisines, cloudinaryImageId, sla, avgRating, id} = resData.info;
   return(
      <div className="w-[220px] bg-gray-300 m-4 rounded-lg p-2">
         <img className="" src={Res_Logo_Url+cloudinaryImageId}/>
         <h3 className="font-bold py-4">{name}</h3>
         <h4 className="whitespace-normal break-words">{cuisines.join(",")}</h4>
         <h4>{avgRating} stars</h4>
         <h4>{sla.deliveryTime} minutes</h4>
         <h4>{costForTwo} for two</h4>
      </div>
   )
}

export const withPromotedLabel =(RestaurantCard) =>{
  return((props)=>{
    return(
      <>
      <label className="absolute px-1 mx-1 bg-black text-white rounded-sm">Promoted</label>
      <RestaurantCard {...props}/>
      </>
    )
  })
}

export default RestaurantCard;