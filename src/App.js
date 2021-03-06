import { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import UserColleagues from './pages/UserColleagues';
import UserProfile from './pages/UserProfile'


function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/profile' component={UserProfile} />
        <Route exact path='/user/colleagues' component={UserColleagues} />
      </Switch>
    </Fragment>
  );
}

export default App;
