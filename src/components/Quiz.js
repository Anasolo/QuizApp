import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 700,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
var correctAnswers = [];
var selectedAnswers = {};

export default function Quiz({ setCorrectValue, setNumberOfValue }) {
  let { categoryID, difficulty, number } = useParams(); //URL-დან მოაქვს პარამეტრები რომ აქ გამოვიყენოთ.
  let history = useHistory();
  const classes = useStyles();
  const [questionData, setQuestionData] = useState([]);
  const [dataLoader, setDataLoader] = useState(false);

  //get data
  useEffect(async () => {
    var data = await axios.get(
      `https://opentdb.com/api.php?amount=${number}&category=${categoryID}&difficulty=${difficulty}`
    );
    setQuestionData(data.data.results); // აქსიოსით წამოვიღებთ არჩეულ სელექთებს, setQuestionData-ს მეშვეობით questionData-ში ჩავწერთ.
    setDataLoader(true); //წამოღების შემდეგ dataLoader გახდება true და loading-ის მაგივრად იქნება submit.

    correctAnswers = data.data.results.map((el) => el.correct_answer);
  }, []);

  //საბმითზე დაჭერისას რა ხდება
  const handleSubmit = () => {
    let count = 0; //სწორი პასუხების რაოდენობას ვაგროვებთ.
    for (let index = 0; index < correctAnswers.length; index++) {
      if (selectedAnswers[index] == correctAnswers[index]) {
        //თუ დაემთხვა ეს ორი ერთმანეთს
        count++;
      }
    }
    setCorrectValue(count);
    setNumberOfValue(number);
    history.push(`/Answer`);
  };
  const handleChangeSelect = (key, answer) => {
    selectedAnswers[key] = answer; //{0: "The Federation", 1: "False"} 1 False ამას ლოგავს.
  };

  return (
    <div
      style={{
        width: "800px",
        margin: "0 auto",
      }}
    >
      <h1>Answer The Questions:</h1>
      {questionData.map((question, key) => {
        return (
          <div>
            <p key={key} value={question.id}>
              {question.question}
            </p>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select Answer:
              </InputLabel>
              <Select
                label="Select Answer"
                onChange={(e) => handleChangeSelect(key, e.target.value)}
              >
                <MenuItem key={key} value={question.correct_answer}>
                  {question.correct_answer}
                </MenuItem>
                {question.incorrect_answers.map((answer, key) => {
                  return (
                    <MenuItem key={key} value={answer}>
                      {answer}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        );
      })}
      <br></br>
      <br></br>
      <Button
        style={{ marginLeft: "8px" }}
        variant="contained"
        color="primary"
        onClick={() => handleSubmit()}
      >
        {/* Loader text untill data is loaded */}

        {dataLoader ? "SUBMIT" : "Loading..."}
      </Button>
    </div>
  );
}
