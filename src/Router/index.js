import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import { ROUTE } from "./../constants/index";
import HomeScreen from "./../components/Dashboard"
import ContactUs from "./../components/ContactUs"
import AboutUs from "./../components/AboutUs"
import Services from "./../components/Services"
import Results from "./../components/Results"
import Details from "./../components/Details"

function RouteComponent() {
    return (
        <Routes basename={process.env.PUBLIC_URL}>
            <Route
                path={ROUTE.HOME.path}
                element={<HomeScreen />}
                exact
            />
            <Route
                path={ROUTE.RESULTS.path}
                element={<Results />}
                exact
            />
            <Route
                path={ROUTE.DETAILS.path}
                element={<Details />}
                exact
            />
            <Route
                path={ROUTE.CONTACT.path}
                element={<AboutUs />}
                exact
            />
            <Route
                path={ROUTE.ABOUTUS.path}
                element={<Services />}
                exact
            />
            <Route
                path={ROUTE.SERVICE.path}
                element={<ContactUs />}
                exact
            />
        </Routes>
    )
}

export default RouteComponent;