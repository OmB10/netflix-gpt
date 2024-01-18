import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Browse from './Browse';
import PrivateRoute from './PrivateRoute';
import Error from './Error'

const Body = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/browse" element={<PrivateRoute />}>
                        <Route path="" element={<Browse />} />
                    </Route>
                    <Route path="/error" element={<Error />} />

                </Routes>
            </Router>
        </div>
    );
};

export default Body;
