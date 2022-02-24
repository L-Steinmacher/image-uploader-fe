import './App.css';
import useId from "./hooks/useId";
import { UserContext } from './contexts/userContext';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import UploadImage from './components/UploadImage';
import CreateUser from './components/CreateUser';
import Login from './components/Login';

function App() {
  const [localId, setLocalId, isLoggedIn, setIsLoggedIn] = useId([], []);

  return (
    <div className="App">
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, localId, setLocalId }}>
        <Nav />
        <Switch>
          <Route path="/uploadimage" component={UploadImage}/>
          <PublicRoute path="/signup" restricted={true} component={CreateUser} />
          <PublicRoute path="/login" restricted={true} component={Login} />
          <Route path="/" component={ Home } />
        </Switch>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;