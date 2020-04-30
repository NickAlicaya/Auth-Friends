import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";

const FriendsList= () => {
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
       
        axiosWithAuth().get("/friends")
        .then(res => {
            console.log(res.data);
            setFriends(res.data);
           
        })
        .catch(err => 
            console.log(err)
        )
    },[])
   

return (
    <div>

        <h1 className="friends">Friends Cast</h1>
        <div className="friendsCont">
        {friends.map(friend => (
            <Friend 
            key={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
        />
        ))
        }
        </div>
    </div>
    )
}

export default FriendsList;