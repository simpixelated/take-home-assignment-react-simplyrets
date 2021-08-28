import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import PropertyListings from './PropertyListings';

const Header = () => (
  <header>
    {/* if building out more pages, this would need to be dynamic based on the matched route */}
    <h1>Property Listings</h1>
  </header>
)

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path='/'>
        <PropertyListings />
      </Route>
      {/* if there were multiple pages, they would each be listed here
      <Route path="/listings">
        <PropertyListings />
      </Route> */}
    </Switch>
  </Router>
)

export default App;
