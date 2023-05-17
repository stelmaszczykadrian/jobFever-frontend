import {Navigate, useParams} from "react-router-dom";
import React from "react";
import Cookies from "js-cookie";

export const ProtectedRoute = (props) => {
    const params = useParams();
    const jwt = Cookies.get("jwt")
    if (!jwt) {
        return <Navigate to={"/"} replace/>;
    }
    const parsed = JSON.parse(jwt);

    if (parsed.role === "CANDIDATE" && parsed.candidate_id.toString() !== params.id) {
        return <Navigate to={"/"} replace/>;
    }

    return <>{props.children}</>;
};