import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import { ROUTE } from "./../constants/index";
import HomeScreen from "./../components/Dashboard"



function RouteComponent() {
    return (
        <Routes basename="https://vivek-itc.github.io/News-web-apps/">
            <Route
                path={ROUTE.HOME.path}
                element={<HomeScreen />}
                exact
            />
        </Routes>
    )
}

export default RouteComponent;