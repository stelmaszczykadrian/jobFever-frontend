import React from "react";
import JobsPageMainComponent from "../components/templates/JobsPageMainComponent";
import Cookies from "js-cookie"
import {getUser, useAuth} from "./PrivateRouter/PrivateRouter";

export default function JobsPage() {
    // console.log(props)
    // console.log(getUser())

    // console.log(JSON.parse(localStorage.getItem("user")));
    // const jwt = Cookies.get('jwt');
    // console.log(jwt)


    return (
        <JobsPageMainComponent />
    )
}