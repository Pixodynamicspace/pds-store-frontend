
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useUserContext } from '../context/UserContext';

export default function useLogOut() {
    const { setToken } = useAuthContext()
    const { setUser } = useUserContext();
    const navigate = useNavigate();
    
    const logOut = () => {
        setUser();
        setToken();
        navigate('/');
      };
    return logOut;
}
