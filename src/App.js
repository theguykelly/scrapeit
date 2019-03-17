import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Titlebar from "./components/Titlebar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <Navbar {...props} />} />
        <Titlebar title="Static Title Bar Component" />
        <Route path="/About" render={props => <About {...props} />} />
        <Route path="/Home" render={props => <Home {...props} />} />
        <Route path="/Login" render={props => <Login {...props} />} />
        <Route path="/Logout" render={props => <Logout {...props} />} />
        <Route path="/Register" render={props => <Register {...props} />} />
      </div>
    );
  }
}

export default App;
