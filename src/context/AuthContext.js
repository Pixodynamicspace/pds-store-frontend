import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export function AuthContextProvider ({ children }){
    const [token, updateToken] = useState();
    const [otpExpiration, setOtpExpiration] = useState();
    useEffect(() => {
        const tokenCookie = Cookies.get("tokenData");
        if (tokenCookie) { // Check if the cookie exists
            try {
                const parsedToken = JSON.parse(tokenCookie);
                updateToken(parsedToken);
            } catch (error) {
              console.error("Error parsing token cookie:", error);
              // Handle the error as needed
            }
          }
      }, [])

    const setToken = (newData) => {
        if (newData) {
            const tokenData = JSON.stringify(newData);
            updateToken(newData);
            Cookies.set('tokenData', tokenData, { expires: 1})
        } else {
            Cookies.remove('tokenData');
            updateToken(newData);
        }
      }
      
      return (
        <AuthContext.Provider value={{ token, setToken, otpExpiration, setOtpExpiration }}>
            {children}
        </AuthContext.Provider>
      )
    
}

export function useAuthContext() {
    return useContext(AuthContext);
  }