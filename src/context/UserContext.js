import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()

export function UserContextProvider ({children}){
    const [user,updateUser] = useState();

    useEffect(() => {
        const userCookie = Cookies.get("userData");
        if (userCookie) {
            updateUser(JSON.parse(userCookie));
        }
    }, [])

    const setUser = (newData) => {
        if (newData) {
            const userData = JSON.stringify(newData);
            updateUser(newData);
            Cookies.set('userData', userData,{ expires: 1});
        }else{
            Cookies.remove('userData');
            updateUser(newData);
        }
        
    }

   

    return(
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext (){
    return useContext(UserContext);
}