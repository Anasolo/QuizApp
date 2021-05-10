import { useState } from "react";
import Card from "./components/Card";
import Quiz from "./components/Quiz";
import Answer from "./components/Answers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//ერთ დონეზე მყოფმა კომპონონტებმა ინფორმაცია რომ გაცვალონ, უნდა გამოვიყენოთ მშობელი კომპონენტი და ის გადასცემს ამ ინფორმაციას შვილს.
function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Quiz/:categoryID/:difficulty/:number">
            <Quiz
              setCorrectValue={setCorrectAnswers} // აქ გადავეცით შეცვლის ფუნქცია , რომელიც ცვლის correct answer-ის მნიშვნელობას
              setNumberOfValue={setNumberOfQuestions}
            />
          </Route>
          <Route path="/Answer">
            <Answer
              count={correctAnswers} //და აქ აჩენს count-ში იმ შეცვლილ მნიშვნელობას
              sum={numberOfQuestions}
            />
          </Route>
          <Route
            path="/" //ეს დახრილი ხაზი უნდა იყოს ბოლოში, იმიტომ რომ პირველივე რაც ემთხვევა იქ გადადის, ეს ყველას ემთხვევა. ან პირველი უნდა დავწეროთ და მივაწეროთ exact.
          >
            <Card />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
