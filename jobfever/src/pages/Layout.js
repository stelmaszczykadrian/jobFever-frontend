import React from "react";
import Navbar from "../components/NavBarForNotLoggedUsers";
import Footer from "../components/footer";
function Layout(props) {
    return (
        <div>
            <Navbar/>
                <main>{props.children}</main>
            <Footer/>
        </div>



    )}

export default Layout;