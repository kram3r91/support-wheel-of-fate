import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./modules/Home/Home.module";
import EngineersPage from "./modules/Engineers/Engineers.module";

import Navigation from "./components/Navigation/Navigation.component";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/engineers">
          <EngineersPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}