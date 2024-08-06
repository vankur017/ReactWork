import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants"
import Header from "./Header";



 const RestaurantMenu = ()=>{

     const [resInfo, setResInfo] = useState(null);

     const {resId} = useParams()
   

    useEffect(()=>{
        fetchMenu()
    }, [])
    
const fetchMenu = async () => {
    try {
        const response = await fetch(
            MENU_API_URL+
            resId
            );
          
            
        const json = await response.json();
        setResInfo(json.data);
        
    } catch (error) {
        console.error("Error fetching menu:", error);
    };
    }
  
    if(resInfo===null) return <Shimmer/>

    const { id,name, cuisines,costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info 
  
    
    const {itemCards} =resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card

   

    return(
        <div className="menu">
            <h2>{name}</h2>
         
            <h3>{cuisines.join(', ')}</h3>

            <h4>{costForTwoMessage}</h4>

            <ul className="Menu">
               {itemCards.map((item)=> (
                 <div >
                     <li className="menu-item" key={item.card.info.id}> 
                        {item.card.info.name } {'  '} -
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}{' Rs'}
                      
                    </li>
                    <button id="addToCart" data-item-id={item.card.info.id}>
                            Add
                    </button>
                  
                 </div>
                 
               
                ))}
                

            </ul>

        </div>
    )
}

export default  RestaurantMenu