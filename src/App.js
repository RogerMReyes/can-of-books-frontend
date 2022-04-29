import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './About.js';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    console.log(this.props.auth0.isAuthenticated);
    return (
      <>

        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated
                ?
                <BestBooks />
                : <><h2>Welcome! Please login.</h2></>
              }
            </Route>
            <Route exact path="/About.js">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>

      </>
    )
  }
}

export default withAuth0(App);
