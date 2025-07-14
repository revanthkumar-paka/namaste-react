import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () =>{
    const [listOfRestaurants,setListOfRestaurents] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const[searchKey,setSearchKey] = useState('');
    const onlineStatus = useOnlineStatus();
    const PromotedResturant = withPromotedLabel(RestaurantCard)
    console.log("resList =",listOfRestaurants);
    console.log("onlineStatus == ",onlineStatus);
    useEffect(()=>{
      fetchData();
    },[])
  const fetchData = async()=>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log("Json data from swiggy == ",json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  if(!onlineStatus){
    return <h1>Something went wrong please check your Internet Connection</h1>
  }
  if(listOfRestaurants.length === 0){
    return(<Shimmer/>)
  }  
 return(<div className="body">
      <div className="p-4 m-4 flex">
        <div className="flex">
        <div className="p-1 m-2">  
        <input className="border border-solid border-black" value={searchKey} onChange={(e)=>{setSearchKey(e.target.value)}}/>
        </div>
        <div className="flex items-center">
        <button className="bg-green-400 px-4 py-1 mr-2 rounded-lg" onClick={()=>{
          console.log(listOfRestaurants);
          const filtered = listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes((searchKey.toLowerCase())))
          setFilteredRestaurants(filtered);
        }}>Search</button>
        </div> 
        </div>
        <div className="flex items-center bg-gray-200 rounded-lg px-2">
        <button className="" onClick={()=>{
            console.log("before",listOfRestaurants)
            let filteredList = listOfRestaurants.filter( restaurant=>restaurant.info.avgRating >= 4.0)
            setListOfRestaurents(filteredList);
            console.log("after",filteredList);
            }}>Top Rated Restaurants</button>
         </div>   
      </div>
      <div className="res-container flex flex-wrap ">
       {
         filteredRestaurants.map(restaurant=>(
         <Link key={restaurant.info.id} to={"/restaurents/"+restaurant.info.id}>
          {
            console.log("Promoted",restaurant.info.isNewlyOnboarded)
          }
          {
            restaurant.info.isNewlyOnboarded?<PromotedResturant resData={restaurant}/>:<RestaurantCard resData={restaurant} />
          }
          </Link>
        ))
       }
      </div>
   </div>)
}
export default Body;