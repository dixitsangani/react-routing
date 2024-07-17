
import { Routes, Route } from "react-router-dom"

import Home from "./Home"
import Abouts from "./Abouts"
import Contact from "./contact"
import Singin from "./singin"
import Login from "./login"
import PrivateRoute from "./PtivetRoutes"

function AllRoutes() {
    return (
        <div>

            <Routes>
                <Route path='/' element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />
                <Route path='/abouts' element={
                    <PrivateRoute>
                        <Abouts />
                    </PrivateRoute>
                } />
                <Route path='/contact' element={
                    <PrivateRoute>
                        <Contact />
                    </PrivateRoute>
                } />
                <Route path='/singin' element={<Singin />} />
                
                <Route path='/login' element={<Login />} />
            </Routes>

        </div>
    )
}
export default AllRoutes