import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./modules/Home/Home.module";
import EngineersPage from "./modules/Engineers/Engineers.module";
import AddEngineerPage from "./modules/Add/Add.module";
import BauPage from "./modules/Bau/Bau.module";

import Navigation from "./components/Navigation/Navigation.component";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/add-engineer">
          <AddEngineerPage />
        </Route>
        <Route path="/engineers">
          <EngineersPage />
        </Route>
        <Route path="/bau">
          <BauPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}