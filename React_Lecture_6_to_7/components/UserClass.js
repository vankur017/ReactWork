import React from "react";

class UserClass extends React.Component{
    render(){
        return (
        <div className = "user-card">
            <img src="https://randomuser.me/api/portraits/men/3.jpg"/>
            <h2>Name</h2>
            <h3>Location</h3>
            <h4>Contact</h4>
        </div>
        )  
    }
}

export default UserClass;