import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import { ROUTE } from "./../constants/index";
import HomeScreen from "./../components/Dashboard"



function RouteComponent() {
    return (
        <Routes>
            <Route
                path={ROUTE.HOME.path}
                element={<HomeScreen />}
                ex
            />
        </Routes>
    )
}

export default RouteComponent;