import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import ProjectsPage from "./ProjectsPage";
import AboutMePage from "./AboutMePage";
import ResumePage from "./ResumePage";
import { BrowserRouter as 
            Router, 
            Switch, 
            Route, 
            Link, 
            Redirect, 
        } 
        from "react-router-dom";


export default class HomePage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <p>This is the home page</p>
                    </Route>  
                    <Route path='/join' component={RoomJoinPage} />
                    <Route path='/create' component={CreateRoomPage} />
                    <Route path='/room/:roomCode' component={Room} />
                    <Route path='/projects' component={ProjectsPage} />
                    <Route path='/about_me' component={AboutMePage} />
                    <Route path='/resume' component={ResumePage} />
                </Switch>
            </Router>
        );
    }
}