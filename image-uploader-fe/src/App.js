import logo from './logo.svg';
import './App.css';
import useId from "./hooks/useId";
import { UserContext } from './contexts/userContext';
import { Switch } from '@mui/material';
import { Route } from 'react-router';

import Nav from './components/Nav';
import Home from './components/Home';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

function App() {
  const [localId, setLocalId, isLoggedIn, setIsLoggedIn] = useId(false, false);

  return (
    <div className="App">
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, localId, setLocalId }}>
        <Nav />
        <Switch>
          
          <Route path="/" component={ Home } />
        </Switch>

      </UserContext.Provider>
      
    </div>
  );
}

export default App;