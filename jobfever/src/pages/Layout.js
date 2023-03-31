import React from "react";
import Footer from "../components/molecules/footer";
import Navbar from "../components/molecules/navbar";
function Layout(props) {
    return (
        <div>
            <Navbar />
            <main>{props.children}</main>
            <Footer/>
        </div>
    )}

export default Layout;