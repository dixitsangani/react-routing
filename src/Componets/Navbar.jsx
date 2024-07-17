

import React from "react"
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <div style={{display:"flex" , justifyContent: "space-evenly" , width:"100%", marginBottom:"100px"}}>
            <Link to='/'>home</Link>
            <Link to='/abouts'>abouts</Link>
            <Link to='/contact'>countact</Link>
            <Link to='/singin'>singin</Link>
            <Link to='/login'>login</Link>
        </div>
    )
}

export default Navbar