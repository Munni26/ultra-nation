import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetail from './components/CountryDetail/CountryDetail';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';



function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/country/:countryName" >
           <CountryDetail/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;

