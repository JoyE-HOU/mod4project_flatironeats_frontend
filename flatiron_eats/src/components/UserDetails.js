import React from 'react'

// containers

const UserDetails = ({user}) => {
    return(
        <div>
            <h1>{user.name}'s Profile</h1>
            <div>
                <div>Email: {user.email}</div>
                <div>Current City: {user.city}</div>
            </div>
        </div>
    )
}

export default UserDetails