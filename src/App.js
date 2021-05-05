import { useState } from "react";
import Card from "./components/Card";
import Quiz from "./components/Quiz";
import Answer from "./components/Answers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Quiz/:categoryID/:difficulty/:number">
            <Quiz
              setCorrectValue={setCorrectAnswers}
              setNumberOfValue={setNumberOfQuestions}
            />
          </Route>
          <Route path="/Answer">
            <Answer count={correctAnswers} sum={numberOfQuestions} />
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
