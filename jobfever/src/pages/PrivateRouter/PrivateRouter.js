import { Navigate } from "react-router-dom";
import {useState, useEffect, createContext, useContext} from "react";
import {useUser} from "../../userProvider/UserProvider";
import Cookies from "js-cookie"
import axios from "axios";

// const PrivateRoute = (props) => {
//     const user = useUser();
//     const [isLoading, setIsLoading] = useState(true);
//     const [isValid, setIsValid] = useState(null);
//     const { children } = props;
//
//     if (user && user.jwt) {
//         ajax(`/api/auth/validate`, "get", user.jwt).then((isValid) => {
//             setIsValid(isValid);
//             setIsLoading(false);
//         });
//     } else {
//         return <Navigate to="/login" />;
//     }
//
//     return isLoading ? (
//         <div>Loading...</div>
//     ) : isValid === true ? (
//         children
//     ) : (
//         <Navigate to="/login" />
//     );
// };
export const getUser = async () => {

    const jwt = Cookies.get('jwt');
    const response = await axios.post(`http://localhost:8080/api/refresh-token`,
        JSON.parse(jwt).access_token);
    console.log(response)
    // try {
    //     return await data.json();
    // } catch (e) {
    //     console.log(e.message);
    //     return data;
    // }
};
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState(null);
    const [role, setRole] = useState(null);
    const jwt = Cookies.get('jwt');
    useEffect(() => {
        // getUser().then((user) => {
        //     if (user?.id) {
        //         setEmail(user.email);
        //         setRole(user.role);
        //     }
        // });
        console.log("jestem tu")

        setEmail(jwt.name)
        setRole(jwt.role)
        console.log(email)
    }, [email, role]);
    const login = (email, role) => {
        setEmail(email);
        setRole(role);
    };
    const logout = () => {
        setEmail(null);
        setRole(null);
    };
    // const login = (email, role) => {
    //     setEmail(email);
    //     setRole(role);
    // };
    // const logout = () => {
    //     setEmail(null);
    //     setRole(null);
    // };
    return (
        <AuthContext.Provider value={{email, role, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => {
    return useContext(AuthContext);
};