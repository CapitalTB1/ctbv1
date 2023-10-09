import React from "react";
import './Nav.css';
import Dashboard from "./pages/Dashboard";



function Nav () {
    return<div className="Nav1">
        <a href="" className="Logbtn">
            <label typeof="text">Login</label>
        </a>

        <a href='Dashboard' type="button" className="Dashboardbtn">
            <label typeof="text">Dashboard</label>
            </a>
        




    </div>
}
export default Nav;