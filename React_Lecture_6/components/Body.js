import RestaurantCard from "./RestaurantCard"
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer";
// import {list} from "../utils/mockdata"


const Body = ()=>{

    console.log("render");
    const [restaurantList, setrestaurantList] =useState([]);

    const [searchTxt, setSearch] = useState("");
  

    useEffect(()=>{
       fetchData();
       
    }, [])

   

    const fetchData =async ()=>{
       
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
      
        const json = await data.json()
        console.log(json);
        setrestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        
    }
//Conditional rendering
    // if( restaurantList.length=== 0){
    //     return <Shimmer/>
    // }


    return  restaurantList.length===0? (<Shimmer/>) :
    (
        <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value= {searchTxt} onChange={(e)=>{
                     setSearch(e.target.value)
                    }}
                />
                <button onClick={()=>{
                    
                 const filterRes= restaurantList.filter(
                    (res)=>res.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name.includes(searchTxt)
                  )

                  setrestaurantList(filterRes)

                }}>Search</button>
            </div>

            <button className="filter-btn" onClick={()=>{
          
                const filterList = restaurantList.filter((res)=> res.info.avgRating>4.2 )
                setrestaurantList(filterList)
           
            }}
          
            >
                Top Rated Restaurants
            </button>
        </div>
        <div className="restaurant-container">
          
           { restaurantList.map(
                    (restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} //NOTE:- NEVER USE INDEX AS KEY!!! Used Index Here because we have duplicated the data in api which will return in lot of warnings, 
                    />)
           }
            
        </div>

    </div>
    )
}

export default Body;