import { useState } from 'react';
import ItemList from "./ItemList";

const RestaurentCategory = ({data, showItems, setShowItemIndex, PIndex})=>{
//    const[showItems,setShowItems] = useState(false); 

   const handleClick = ()=>{
     setShowItemIndex(PIndex);
    }

 return(
    <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-6" onClick={handleClick}>
     <div className="flex justify-between cursor-pointer" >   
     <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
     <span>⬇️</span>
     </div>
     {showItems && <ItemList items={data.itemCards}/>}
     {/* <ItemList items={data.itemCards}/> */}
    </div>
 )
}
export default RestaurentCategory;