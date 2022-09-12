import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "../utils/axios";

const IdentityContext = createContext();

export const useIdentity = () => {
    const identityContext = useContext(IdentityContext);
    if (!identityContext) {
        throw new Error(
            "useIdentity() can only be used inside of <IdentityProvider />, " + "please declare it at a higher level.",
        );
    }
    return identityContext;
}


export const IdentityProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [access_token, setAccessToken] = useState(null);
    const [refresh_token, setRefreshToken] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {

        //when app loads for the first time
        //It will look for access and refresh token in localstorage and will set it 
        //to state
        const token = localStorage.getItem("access_token");
        const refresh = localStorage.getItem("refresh_token");
        if(token && refresh){
            setIsLoggedIn(true);
            setAccessToken(token);
            setRefreshToken(refresh);
        }
    }, []);

    useEffect(() => {
        //updating axios header for future requests
        axios.defaults.headers['Authorization'] = "Bearer " + access_token;

        if(!user){
            //fetch and update user
            axios.get("/users/")
            .then(resp => {
                setUser(resp.data)
            })
            .catch(err => {
                setError(err?.response?.message || "Unable to get user details");
            })
        }
    }, [access_token, refresh_token])

    const login = (access_token, refresh_token) => {
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        setAccessToken(access_token);
        setRefreshToken(refresh_token);
        setIsLoggedIn(true);
    }

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setAccessToken(null);
        setRefreshToken(null);
        setIsLoggedIn(false);
    }


    return <IdentityContext.Provider 
                value={{
                    user, 
                    login, 
                    logout,
                    isLoggedIn,
                    error
                }}>
                    {children}
                </IdentityContext.Provider>
}

export const ProtectedRoutes = ({children}) => {
    const { isLoggedIn } = useIdentity();
    if(!isLoggedIn){
        return <Navigate to={"/login"} />
    }

    return children;
}

export const PublicRoutes = ({children}) => {
    const { isLoggedIn } = useIdentity();
    if(isLoggedIn){
        return <Navigate to={"/"} />
    }

    return children;
}