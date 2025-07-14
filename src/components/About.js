import UserClass from "../components/UserClass"
import { UserContext } from "../utils/constants";
import React from "react";

class About extends React.Component{

 constructor(props){
   super(props);
   console.log("This is from Parent Constructor")
 }
 componentDidMount(){
   console.log("ComponentDidMount of parent")
 }
 render(){
   console.log("This is from Parent Render");
   return(
    <div>
     <h1>About</h1>
     <UserContext.Consumer>
      {({userName})=>(<h1 className="font-bold">{userName}</h1>)}
     </UserContext.Consumer>
     <h2>This is Namaste React Course 🏫</h2>
     {/* <User name={"RevanthKumar P."} Location={"Hyderabad,Amberpet"}/> */}
     <UserClass name={"First"} Location={"Hyderabad,Amberpet"}/>
     <UserClass name={"Second"} Location={"Hyderabad,Amberpet"}/>
    </div>)
   }
}
export default About;