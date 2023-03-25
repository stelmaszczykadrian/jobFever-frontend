import React from "react";
import Navbar from "../components/navbar/NavBarForNotLoggedUsers";
import Footer from "../components/footer/footer";
function Layout(props) {
    return (
        <div>
            <Navbar/>
                <main>{props.children}</main>
            <Footer/>
        </div>



    )}

export default Layout;