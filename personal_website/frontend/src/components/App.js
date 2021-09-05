import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage"
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Navbar from "./Navbar/Navbar"
import './App.css'

export default class App extends Component { //App is the name of the component, which can be re-used
    constructor(props) {
        super(props);
        // this.state = {  //If the state is updated, it re-renders just that component
        // }
    }

    render() { //returns HTML below
        // return <h1>{this.props.name}</h1>  //JS code in HTML text
        return (
            <div>
                <HomePage />
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);  //Props are arguments to the component, which modify it