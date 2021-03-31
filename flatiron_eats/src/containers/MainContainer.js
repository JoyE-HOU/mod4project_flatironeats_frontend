import React, { useEffect, useState } from 'react'

// containers
import Header from './Header'
import UserContainer from './UserContainer'
import RestaurantsContainer from './RestaurantsContainer'
import DetailsContainer from './DetailsContainer'

// endpoints
const RES_URL = 'http://localhost:3000/restaurants'
const LIKE_URL = 'http://localhost:3000/likes'
const USER_URL = 'http://localhost:3000/users'

const MainContainer = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const [restaurants, setRestaurants] = useState([])
    const [favRestaurants, setFavRestaurants] = useState([])
    const [detailRest, setDetailRest] = useState(null)
    const [filterRestaurants, setFilterRestaurants] = useState([])

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

        const oldUser = JSON.parse(localStorage.getItem('user'))
        oldUser.likes = [...oldUser.likes, {id: likeRes.id, user_id: likeRes.user_id, restaurant_id: likeRes.restaurant_id}]
        oldUser.restaurants = [...oldUser.restaurants, restaurants.find(res => res.id === likeRes.restaurant_id)]

        localStorage.setItem('user', JSON.stringify(oldUser))
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
        const restRes = await delLike.json()
        
        const newFavs = favRestaurants.filter(res => res.restaurant_id !== restRes.restaurant_id)

        setFavRestaurants(newFavs)

        const oldUser = JSON.parse(localStorage.getItem('user'))
        
        oldUser.likes = [...oldUser.likes.filter(like => like.restaurant_id !== restaurantId)]
        oldUser.restaurants = [...oldUser.restaurants.filter(res => res.id !== restaurantId)]

        localStorage.setItem('user', JSON.stringify(oldUser))
    }

    const showDetail = (restaurant) => {
        setDetailRest(restaurant)
    }

    const hideDetail = () => {
        setDetailRest(null)
    }

    const updateInput = (input) => {
        let filtered 
        if (input === "") {
            filtered = restaurants
        } else 
        {filtered = restaurants.filter(restaurant => {
            return restaurant.location.toLowerCase() === input.toLowerCase()
        })} 

        setFilterRestaurants(filtered)
    }

    return(
        <div>
            <Header restaurants={restaurants} updateInput={(input) => updateInput(input)}/>
            <div className='container-fluid'>
                <div className='row row-height justify-content-around'>
                    <div className='col-3 scrollable scroll-hide'>
                        <UserContainer restaurants={restaurants.filter(res => favRestaurants.some(favRes => favRes.restaurant_id === res.id) )} user={user} unlikeRestaurant={(restaurantId) => unlikeRestaurant(restaurantId)} showDetail={(rest) => showDetail(rest)} />  
                    </div>
                    <div className='col-9 scrollable scroll-hide'>
                        {detailRest ? <DetailsContainer restaurant={detailRest} hideDetail={hideDetail} /> : <RestaurantsContainer restaurants={filterRestaurants} likeRestaurant={(restaurantId) => likeRestaurant(restaurantId)} showDetail={(rest) => showDetail(rest)} /> }
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default MainContainer