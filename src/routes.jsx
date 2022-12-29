import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import { useEffect, useState} from 'react';
import Home from './views/Home';
import RegisterPayment from './views/RegisterPayment';
import RegisterUser from './views/RegisterUser';
import User from './views/Users';
import Payments from './views/Payments';
import Login from './views/Login';
import PrivateRoute from "./components/PrivateRoute";

function RoutesAPP(){
    const [isAuthenticated, setLoggedin] = useState(null);

    setTimeout(() => {
        setLoggedin(localStorage.getItem('authenticated'));
    }, 1000);
     
    return(
        <BrowserRouter>
            <div className="flex">
            
            <Header/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/RegisterPayment" element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                    <RegisterPayment/>
                </PrivateRoute>}/>
                <Route path="/RegisterUser" element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                        <RegisterUser/>
                    </PrivateRoute>}/>
                <Route path="/RegisterUser/:id" element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                        <RegisterUser/>
                    </PrivateRoute>}/>
                <Route path="/User" element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                        <User/>
                    </PrivateRoute>
                }/>
                <Route path="/Payments" 
                    element={
                    <PrivateRoute isAuthenticated={isAuthenticated}>
                        <Payments/>
                    </PrivateRoute>}/>
                <Route path="/RegisterPayment/:id" 
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <RegisterPayment/>
                        </PrivateRoute>}/>
            </Routes>
            </div>
        </BrowserRouter>
    )}

export default RoutesAPP;