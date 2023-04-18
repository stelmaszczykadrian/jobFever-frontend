import {useState, createContext, useContext} from "react";
import Cookies from "js-cookie"


const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [jwt, setJwt] = useState(JSON.parse(Cookies.get('jwt')));
    return (
        <AuthContext.Provider value={{jwt}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => {
    return useContext(AuthContext);
};