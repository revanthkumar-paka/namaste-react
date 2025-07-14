import { useContext, useState } from "react";
import { Logo_Url, UserContext } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
const [btnName,setBtnName] = useState('Login')
const onlineStatus = useOnlineStatus();
const {userName} = useContext(UserContext);
  return(
 <div className="flex justify-between bg-pink-100 shadow-lg">
    <div className="logo-container">
      <img className="w-42" src={Logo_Url}/>
    </div>
    <div className="flex items-center">
      <ul className="flex p-4 m-4">
        <li className="px-4">OnlineStatus:{onlineStatus?"🟢":"🔴"}</li>
         <li className="px-4"><Link to={"/"}>Home</Link></li>
         <li className="px-4"><Link to={"/about"}>About Us</Link></li>
         <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
         <li className="px-4">Cart</li>
         <li className="font-bold">{userName}</li>
         {/* <button className="login" onClick={()=>{btnName === 'Login'?setBtnName('Logout'):setBtnName('Login')}}>{userName}</button> */}
      </ul>
    </div>
 </div>)
 }

export default Header;