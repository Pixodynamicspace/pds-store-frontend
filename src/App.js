import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext';
import { UserContextProvider } from './context/UserContext';
import { IndexRoutes } from './routes/indexRoutes';

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <UserContextProvider>
          <IndexRoutes/>
        </UserContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
