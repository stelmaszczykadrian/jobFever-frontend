import { Navigate } from "react-router-dom";
import React from "react";
import Cookies from "js-cookie";
export const ProtectedRoute = (props) => {
    const jwt = Cookies.get("jwt")
    if (!jwt) {
        return <Navigate to={"/"} replace />;
    }
    if (props.role === "CANDIDATE"){
        if(JSON.parse(jwt).role !== "CANDIDATE"){
            return <Navigate to={"/"} replace />;
        }
    }
    if (props.role === "EMPLOYER"){
        if(JSON.parse(jwt).role !== "EMPLOYER"){
            return <Navigate to={"/"} replace />;
        }
    }
    return <>{props.children}</>;
};