import { Res_Logo_Url } from "../utils/constants";

const ItemList = ({items})=>{
    console.log("Item =" ,items)
    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
                    <div className="w-9/12" key={item.card.info.id}>
                    <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>- ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="mx-1 w-3/12">
                    <div className="absolute">
                        <button className="bg-black text-white mx-4 p-2 rounded-lg">Add +</button>
                    </div>
                    <img src={Res_Logo_Url+item.card.info.imageId}/>
                    </div>  
                </div>
            ))}
        </div>
    )
}
export default ItemList;