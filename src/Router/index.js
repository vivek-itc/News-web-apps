import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import { ROUTE } from "./../constants/index";
import HomeScreen from "./../components/Dashboard"



function RouteComponent() {
    return (
        <Routes basename={process.env.PUBLIC_URL}>
            <Route
                path={ROUTE.HOME.path}
                element={<HomeScreen />}
                exact
            />
        </Routes>
    )
}

export default RouteComponent;