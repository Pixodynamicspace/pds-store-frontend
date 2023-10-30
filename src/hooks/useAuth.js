
import Cookies from 'js-cookie';

export default function useAuth() {
    const tokenCookie = Cookies.get("tokenData");
        if (tokenCookie){
            const token = JSON.parse(tokenCookie);
            const expirationDate = new Date(token.expiresIn);
            const currentDate = new Date();
            return currentDate < expirationDate? true : false;
        };
    
    return false;
}