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

export default function Quiz({ setCorrectValue, setNumberOfValue }) {
  let { categoryID, difficulty, number } = useParams();
  let history = useHistory();
  const classes = useStyles();
  const [questionData, setQuestionData] = useState([]);
  const [dataLoader, setDataLoader] = useState(false);

  //get data
  useEffect(async () => {
    var data = await axios.get(
      `https://opentdb.com/api.php?amount=${number}&category=${categoryID}&difficulty=${difficulty}`
    );
    setQuestionData(data.data.results);
    setDataLoader(true);
  }, []);
  const handleSubmit = () => {
    setCorrectValue(777);
    setNumberOfValue(number);
    history.push(`/Answer`);

    console.log("@avto");
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
              <Select label="Select Answer">
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
        {dataLoader ? "SUBMIT" : "Loading..."}
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
