import './App.css';
import useId from "./hooks/useId";
import { UserContext } from './contexts/userContext';
import { ImageContext } from './contexts/imageContext';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import PublicRoute from './utils/PublicRoute';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import HikeUpload from './components/HikeUpload';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [ localId, setLocalId, isLoggedIn, setIsLoggedIn ] = useLocalStorage(false, false);
  const [ images, setImages ] = useState([]);
  const [ token, setToken ] = useState([]);
  const [userName, setUserName] = useState("")

  return (
    <div className="App">
      <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, localId, setLocalId, token, setToken, userName, setUserName }}>
        <ImageContext.Provider value={{ images, setImages }} >
          <Nav />
          <Switch>
            <Route path="/hikeUpload" component={HikeUpload}/>
            <PublicRoute path="/signup" restricted={true} component={CreateUser} />
            <PublicRoute path="/login" restricted={true} component={Login} />
            <Route exact path="/" component={ Home } />
          </Switch>
        </ImageContext.Provider>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;