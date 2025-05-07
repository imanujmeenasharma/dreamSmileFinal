import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserRoutes from './UserRoutes'
import AdminRoutes from './AdminRoutes'
import ScrollToTop from '../Components/ScrollToTop'
const Mainroutes = () => {
    return (
        <div>
            <ScrollToTop />
            <Routes>
                <Route path="/*" element={<UserRoutes />} />
                <Route path="/admin/*" element={<AdminRoutes />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default Mainroutes
