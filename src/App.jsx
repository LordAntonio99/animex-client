import './App.css';
import Home from './pages/home/Home';
import Info from './pages/info/Info';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {
            user ? 
              <Home />
            :
              <Redirect to="/login" />
          }
        </Route>
        <Route path="/login">
          {
            !user ?
              <Login />
            :
              <Redirect to="/" />
          }
        </Route>
        <Route path="/register">
          <Login />
        </Route>
        {
          user ? 
            <>
              <Route path="/info">
                <Info />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </>
          :
            <Redirect to="/login" />
        }
      </Switch>
    </Router>

  );
}

export default App;
