import Card from "./components/Card";
import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Quiz/:categoryID/:difficulty/:number">
            <Quiz />
          </Route>
          <Route path="/">
            <Card />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
