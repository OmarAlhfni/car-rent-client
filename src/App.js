import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
  NavBar,
  CarBook,
  PrivateComponent,
  Login,
  Register,
  ContactUs,
} from "./Components";
import { Home, Vehicles, Offer, Profile } from "./pages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <PrivateComponent path="/profile" component={Profile} exact />

          <Route path="/" component={Home} exact />
          <Route path="/vehicles" component={Vehicles} exact />
          <Route path="/contact" component={ContactUs} exact />
          <Route path="/offer" component={Offer} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/Register" component={Register} exact />
          <Route path="/carBook" component={CarBook} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
