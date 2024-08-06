import User from "./User"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
const About = () => {
     const [user, setUser] = useState([])
     async function apidata() {
        const data = await fetch('https://randomuser.me/api/?results=24')
        const res = await data.json()
        // console.log(res);
        
        const userdata = res.results
        
        setUser( userdata )
        // Accessing results key
    }
    console.log(user);
    
    useEffect(() => {
        apidata()
    }, []) 

    
    return user===null? (<Shimmer/>) : (
        
        <div>
            <h1>This is Our team who work behind the scenese to provide you services </h1>

            <div className="team-members">
               {user.map((profile, index) => (
                   <User key={index} peopleData={profile} />
               ))}
            </div>
        </div>
    )
}

export default About
