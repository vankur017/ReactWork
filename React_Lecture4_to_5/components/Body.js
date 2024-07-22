import RestaurantCard from "./RestaurantCard"
import {useState} from "react"
import {list} from "../utils/mockdata"


const Body = ()=>{

//Local State Varaiable - useState

//    const [restaurantList, setrestaurantList] = useState([
//     {
//         data: {"id": "611690",
//             "name": "Haji's",
//             "cloudinaryImageId": "eadd92e5cf369d56eeaf3062622c3c71",
//             "costForTwo": "₹400 for two",
//             "cuisines": ["Biryani","North Indian","Tandoor","Chinese","Kebabs"],
//             "avgRating": 3.9,
//             "deliveryTime": 43,} 
//   },
//   {
//       data: {"id": "6141690",
//             "name": "Dominos",
//             "cloudinaryImageId": "eadd92e5cf369d56eeaf3062622c3c71",
//             "costForTwo": "₹400 for two",
//             "cuisines": ["Biryani","North Indian","Tandoor","Chinese","Kebabs"],
//             "avgRating": 4.5,
//             "deliveryTime": 43,} 
//   },
//   {
//       data: {"id": "61211690",
//             "name": "Mc'D",
//             "cloudinaryImageId": "eadd92e5cf369d56eeaf3062622c3c71",
//             "costForTwo": "₹400 for two",
//             "cuisines": ["Biryani","North Indian","Tandoor","Chinese","Kebabs"],
//             "avgRating": 4.1,
//             "deliveryTime": 43,} 
//   }
//    ])

    // const [restaurantList, setrestaurantList] =useState(list);

    const arr = useState(list);

    const restaurantList = arr[0];
    const setrestaurantList= arr[1];


    // Normal Js variable:-   let listOfRestaurants
  //NOrmal Javascript Variable
    //  let listOfRestaurantsJS =  [{
    //         data: {"id": "611690",
    //             "name": "Haji's",
    //             "cloudinaryImageId": "eadd92e5cf369d56eeaf3062622c3c71",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": ["Biryani","North Indian","Tandoor","Chinese","Kebabs"],
    //             "avgRating": 3.9,
    //             "deliveryTime": 43,} 
    //   },
    //   {
    //       data: {"id": "6141690",
    //             "name": "Dominos",
    //             "cloudinaryImageId": "eadd92e5cf369d56eeaf3062622c3c71",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": ["Biryani","North Indian","Tandoor","Chinese","Kebabs"],
    //             "avgRating": 4.5,
    //             "deliveryTime": 43,} 
    //   },
    //   {
    //       data: {"id": "61211690",
    //             "name": "Mc'D",
    //             "cloudinaryImageId": "eadd92e5cf369d56eeaf3062622c3c71",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": ["Biryani","North Indian","Tandoor","Chinese","Kebabs"],
    //             "avgRating": 4.1,
    //             "deliveryTime": 43,} 
    //   }
    // ]
    return (
        <div className="body">

        <div className="filter">
            <button className="filter-btn" onClick={()=>{
             
               //Filter logic for top restautrants
            //    const filteredList= listOfRestaurants.filter(
            //     (res)=>(res.data.avgRating > 4)
            //    )

            //    setListOfRestaurant(filteredList)
                const filterList = restaurantList.filter((res)=> res.info.avgRating< 4 )
                setrestaurantList(filterList)
            }}
          
            >
                Top Rated Restaurants
            </button>
        </div>
        <div className="restaurant-container">
            {/* <RestaurantCard resData={resList[3]}/>
            <RestaurantCard resData={resList[0]}/>
            <RestaurantCard resData={resList[1]}/>
            <RestaurantCard resData={resList[2]}/>
            */
            restaurantList.map(
                    (restaurant, index) => <RestaurantCard key={restaurant.info.id} resData={restaurant} //NOTE:- NEVER USE INDEX AS KEY!!! Used Index Here because we have duplicated the data in api which will return in lot of warnings, 
                    />)
            }
            
        </div>

    </div>
    )
}

export default Body;