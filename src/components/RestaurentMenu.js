import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = ()=>{
    const[showItemIndex,setShowItemIndex] = useState(0)  
    const {resId} = useParams();
    const resInfo = useRestaurentMenu(resId)    
if(resInfo === null){
    return(<Shimmer/>)
}
const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card;
const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>
  c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)
console.log("Menu ==",categories);
console.log("parent ==",showItemIndex)
return(
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
      {
        categories.map((res,index)=>(
          <RestaurentCategory key={res.card.card.title} 
          data={res?.card?.card} 
          showItems={showItemIndex === index ? true : false} 
          setShowItemIndex={setShowItemIndex} 
          PIndex={index} />)
        )
      }
    </div>
)
}

export default RestaurentMenu;