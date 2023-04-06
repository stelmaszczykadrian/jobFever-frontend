import React from "react";
import Footer from "../components/molecules/Footer";

function Layout(props) {
    return (
        <div>
            <main>{props.children}</main>
            {/*<Footer/>*/}
        </div>
    )}

export default Layout;