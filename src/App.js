import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./components/context/github/GithubState";
import AlertState from "./components/context/alert/AlertState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import "./App.css";

const App = () => {
  // here we are using useState hook,
  // here we define state as const [state_name, name_of_the_method_that_will_change_or_set_state] = useState(default_value_of_the_state);
  // and then whenever we want to use the state value we just use the state_name, like any other variable
  // and when we want to change the state we use the function to change it .

  // This is another lifecycle method which is fired as soon as the component is mounted.
  /* async componentDidMount() {
    // so lets say we want to set the loading to true while the data is being fetched, so we set state data as this(A bit like flutter):
    this.setState({ loading : true, });
    // We cannot use this.state.loading = true, atleast not in a CLASS BASED COMPONENT.
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // and this is how we use env variables.
    this.setState({ loading : false, users : res.data,});
    console.log(res.data);
  } */

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fa fa-github" />
          <AlertState>
            <Alert />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  render={(props) => <User {...props} />}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </AlertState>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
