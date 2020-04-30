import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const Login = (props) => {
    const [creds,setCreds] = useState({
        username: "",
        password: ""
    });

    // const [loading,setLoading] =useState(false);


const handleChange = e => {
    setCreds({
...creds,
[e.target.name]: e.target.value
    });
}

const handleSubmit = e => {
    e.preventDefault();
    // setLoading(true);
    axiosWithAuth().post("/login",creds)
    .then(res=> {
        console.log("RES", res);
        localStorage.setItem("token",res.data.payload);
        props.history.push(`/friendsList`);
    })
    .catch(err => {
        console.log(err);
    })
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleChange}
            value={creds.username}
            />
            <br/>

            <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            value={creds.password}
            />
            <br/>

            <button type="submit">Login</button>


        </form>
    </div>
)
}

export default Login