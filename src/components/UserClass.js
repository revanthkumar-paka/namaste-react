import React from "react";
class UserClass extends React.Component{
    constructor(props){
     super(props);
     console.log(this.props.name+"From Child constructor");
     this.state={
        userInfo:{
            name:"",
            location:""
        }
     }
    }
    async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7")
    const json = await data.json();
    this.setState({
        userInfo:json
    })    
    console.log(this.props.name+"ComponentDidMount of child")
    }
    render(){
        console.log(this.props.name+"From child render");
        const {name,location,avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @revanthpaka16</h4>
            </div>
        )
    }
}
export default UserClass;


/***
 * 
 * 
 * --- MOUNTING ---
 * 
 * Constructor (dummy)
 * Render(dummy)
 *  <HTML Dummy>
 * Componenet Did Mount
 *    <API Call>
 *    <this.setState -> State variable is updated
 * 
 * -----UPDATE
 * 
 *      render(API data) 
 */