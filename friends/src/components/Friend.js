import React from "react";


const Friend = (props) => {
    return (
        <div className="friendCard" >
            <h2>{props.name}</h2>
            <p>age: {props.age}</p>
            <p>email: {props.email}</p>
        </div>
    )
}

export default Friend;