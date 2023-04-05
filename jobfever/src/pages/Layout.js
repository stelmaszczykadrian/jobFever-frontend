import React from "react";
import Footer from "../components/molecules/footer";

function Layout(props) {
    return (
        <div>
            <main>{props.children}</main>
            {/*<Footer/>*/}
        </div>
    )}

export default Layout;