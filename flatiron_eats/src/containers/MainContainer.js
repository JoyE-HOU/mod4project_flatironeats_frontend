import React, { useEffect, useState } from 'react'

// containers
import Header from './Header'
import UserContainer from './UserContainer'
import RestaurantsContainer from './RestaurantsContainer'

// endpoints
const RES_URL = 'http://localhost:3000/restaurants'
const LIKE_URL = 'http://localhost:3000/likes'

const MainContainer = ({user}) => {

    const [restaurants, setRestaurants] = useState([])
    const [favRestaurants, setFavRestaurants] = useState([])
    const [filterRestaurants, setFilterRestaurants] = useState([])
    // const [input, setInput] = useState("")

    useEffect(async() => {
        
        const fetchRes = await fetch(RES_URL)
        const restRes = await fetchRes.json()
        
        setRestaurants(restRes)
        setFavRestaurants(user.likes)
        setFilterRestaurants(restRes)
    }, [setRestaurants, setFavRestaurants])

    const likeRestaurant = async (restaurantId) => {
        
        if (favRestaurants.find(res => res.restaurant_id === restaurantId)) {return}

        const newLike = {
            user_id: user.id,
            restaurant_id: restaurantId
        }
        
        const likeObj ={
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(newLike)
        }
        
        const postLike = await fetch(LIKE_URL, likeObj)
        const likeRes = await postLike.json()

        setFavRestaurants([...favRestaurants, likeRes])
    }

    const unlikeRestaurant = async (restaurantId) => {
        const delLikeId = favRestaurants.find(like => like.restaurant_id === restaurantId).id

        const delObj = {
            headers: {
                "Content-Type": "application/json"
            },
            method: "DELETE"
        }

        const delLike = await fetch(LIKE_URL+'/'+delLikeId, delObj)
        const res = await delLike.json()

        const newFavs = favRestaurants.filter(res => res.id !== delLikeId)

        setFavRestaurants(newFavs)
    }

    const updateInput = (input) => {
        let filtered 
        if (input === "") {
            filtered = restaurants
        } else 
        {filtered = restaurants.filter(restaurant => {
            return restaurant.location.toLowerCase() == input
        })} 
        console.log(filtered)
        setFilterRestaurants(filtered)
    }

    return(
        <div>
        hello
            <Header restaurants={restaurants} updateInput={(input) => updateInput(input)}/>
            <div className='container-fluid'>
                <div className='row row-height justify-content-around'>
                    <div className='col-3 scrollable scroll-hide'>
                        <UserContainer restaurants={restaurants.filter(res => favRestaurants.some(favRes => favRes.restaurant_id === res.id) )} user={user} unlikeRestaurant={(restaurantId) => unlikeRestaurant(restaurantId)} />  
                    </div>
                    <div className='col-9 scrollable scroll-hide'>
                        <RestaurantsContainer restaurants={filterRestaurants} likeRestaurant={(restaurantId) => likeRestaurant(restaurantId)}/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default MainContainer