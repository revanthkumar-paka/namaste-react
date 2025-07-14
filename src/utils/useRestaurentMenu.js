import { use, useEffect, useState } from "react";
import{Menu_Api} from "../utils/constants";
const useRestaurentMenu = (resId)=>{
   const[resInfo,setResInfo] = useState(null);
   useEffect(()=>{
    fetchMenu();   
   },[])
   const fetchMenu = async()=>{
     const data = await fetch(Menu_Api+resId);
     const json = await data.json();
     setResInfo(json.data);
  }
  return resInfo;
}
export default useRestaurentMenu;