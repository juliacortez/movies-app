import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import DetailsPage from '../Screens/DetailsPage/DetailsPage';
import ErrorPage from '../Screens/ErrorPage/ErrorPage';
import HomePage from "../Screens/HomePage/HomePage"

const MainRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:id" element={<DetailsPage />}/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
    )
}

export default MainRoutes