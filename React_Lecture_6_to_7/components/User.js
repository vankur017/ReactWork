import lazy from "react"
const User = (props)=>{

    const {peopleData} = props;
    // peopleData.reduce((acc,curr, index)=>{
    //     acc[user]
    // })
  
    
    
    return (
        <div className = "user-card">

            <img src={peopleData.picture.medium} loading={lazy}/><br/>
           
            <h3>Name:- {peopleData.name.first}{peopleData.name.last}</h3>
            <h4>Mail:-{peopleData.email}</h4>
        </div>
    )
}
export default User