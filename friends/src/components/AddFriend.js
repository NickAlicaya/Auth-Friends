import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";




const AddFriend = (props) => {
    const [ newFriend, setNewFriend ] = useState({
        name: "",
        age: "",
        email: ""
    })

const handleChange = e => {

    setNewFriend({
        ...newFriend,
        [e.target.name]: e.target.value
    });
}

const handleSubmit = e => {
    e.preventDefault();
   axiosWithAuth().post("/friends",newFriend)
   .then((res) => {
       console.log(res)
       setNewFriend({
           name: "",
           age: "",
           email: ""
       })
   })
   .catch((err) => {
       console.log(err)
   })
   setTimeout(() => {
       props.history.push("/friends");
   },2000);
}

return (
    <div>
<form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            value={newFriend.name}
            />
            <br/>

            <input
            type="num"
            name="age"
            placeholder="Enter Age"
            onChange={handleChange}
            value={newFriend.age}
            />
            <br/>

            <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={newFriend.email}
            />
            <br/>


            <button type="submit">Add Friend</button>

</form>
    </div>
)

}

export default AddFriend;

