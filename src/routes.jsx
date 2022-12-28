import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

import Home from './views/Home';
import RegisterPayment from './views/RegisterPayment';
import RegisterUser from './views/RegisterUser';
import User from './views/Users';
import Payments from './views/Payments';
function RoutesAPP(){
    return(
        <BrowserRouter>
            <div className="flex">

            
            <Header/>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/RegisterPayment" element={<RegisterPayment/>}/>
                <Route path="/RegisterUser" element={<RegisterUser/>}/>
                <Route path="/User" element={<User/>}/>
                <Route path="/Payments" element={<Payments/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    )}

export default RoutesAPP;