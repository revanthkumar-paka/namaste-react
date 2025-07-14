const User = (props)=>{
    const{name,Location} = props;
    return(
       <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {Location}</h3>
        <h4>Contact: @revanthpaka16</h4>
       </div> 
    );
}
export default User;