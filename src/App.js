import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/shop.component";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/test" component={() => <p>this is a test</p>} />
    </Switch>
  );
}

export default App;
