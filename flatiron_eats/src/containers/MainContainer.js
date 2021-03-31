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

    const userId = JSON.parse(localStorage.getItem('user_id'))
    const [restaurants, setRestaurants] = useState([])
    const [favRestaurants, setFavRestaurants] = useState([])
    const [detailRest, setDetailRest] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(async() => {
        
        const fetchRes = await fetch(RES_URL)
        const restRes = await fetchRes.json()

        const fetchUser = await fetch(USER_URL+'/'+userId)
        const userRes = await fetchUser.json()

        setUser(userRes)
        setRestaurants(restRes)
        setFavRestaurants(user.likes)
    }, [user, restaurants, favRestaurants])

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

    const showDetail = (restaurant) => {
        setDetailRest(restaurant)
    }

    const hideDetail = () => {
        setDetailRest(null)
    }

    return(
        <div>
            <Header />
            <div className='container-fluid'>
                <div className='row row-height justify-content-around'>
                    <div className='col-3 scrollable scroll-hide'>
                        <UserContainer restaurants={restaurants.filter(res => favRestaurants.some(favRes => favRes.restaurant_id === res.id) )} user={user} unlikeRestaurant={(restaurantId) => unlikeRestaurant(restaurantId)} showDetail={(rest) => showDetail(rest)} />  
                    </div>
                    <div className='col-9 scrollable scroll-hide'>
                        {detailRest ? <DetailsContainer restaurant={detailRest} hideDetail={hideDetail} /> : <RestaurantsContainer restaurants={restaurants} likeRestaurant={(restaurantId) => likeRestaurant(restaurantId)} showDetail={(rest) => showDetail(rest)} /> }
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default MainContainer