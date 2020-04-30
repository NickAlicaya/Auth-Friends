import React from 'react';
// import {Redirect} from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <>
     <nav>
        <Link className="link" to ="/login">Login</Link>
        <Link className="link" to ="/friends">Friends List</Link>
        <Link className="link" to ="/AddFriend">Add Friend</Link>
      </nav>
      <Switch>
      <PrivateRoute path="/friends" component={FriendsList} />  
      <PrivateRoute path="/addfriend" component={AddFriend} />  
      <Route path="/login" component={Login} />  
      </Switch>  
    </>
    </div>
    </Router>
  );
}

export default App;
