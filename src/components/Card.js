import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
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

export default function Card() {
  let history = useHistory(); //როუთი სამოძრაო
  const classes = useStyles();
  const [categoryData, setCategoryData] = useState([]); //categoryData-ში ინახება კატეგორიები, map-ით ვხატავთ. setCategoryData ეს ავსებს კატეგორიებს.
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [addNumber, setAddNumber] = useState("");

  const handleCategory = (e) => {
    setCategory(e.target.value); //e.target.value-ს target და value moyveba e-ს. ფროფერთიებია. e არის თუ რა ხდება onChange-ზე.
  };

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };
  const handleAddNumber = (e) => {
    setAddNumber(e.target.value);
  };

  const handleSubmit = (event) => {
    history.push(`/Quiz/${category}/${difficulty}/${addNumber}`); //გადადის ახალ როუტზე Quiz/7(id-თი ჩანს)/easy/12
  };

  //get data
  useEffect(async () => {
    var data = await axios.get(`https://opentdb.com/api_category.php`);

    console.log("data", data.data.trivia_categories);

    setCategoryData(data.data.trivia_categories);
  }, []);

  return (
    <div
      style={{
        width: "800px",
        margin: "0 auto",
      }}
    >
      <h1>Get Questions:</h1>
      <FormControl variant="outlined" className={classes.formControl} required>
        <InputLabel id="demo-simple-select-outlined-label">
          Select Category:
        </InputLabel>
        <Select
          label="Select Category"
          value={category} // რასაც ავირჩევთ ჩამონათვალში ის რო გამოჩნდეს მნიშვნელობად.
          onChange={(e) => handleCategory(e)}
        >
          {categoryData.map((category, key) => {
            return (
              <MenuItem key={key} value={category.id}>
                {category.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl} required>
        <InputLabel id="demo-simple-select-outlined-label">
          Select Difficulty:
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={difficulty}
          onChange={handleDifficulty}
          label="Select Difficulty"
        >
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
        <TextField
          id="outlined-basic"
          label="Add a quiz number from 1 to 10"
          variant="outlined"
          value={addNumber}
          onChange={handleAddNumber}
          required
        />
      </FormControl>
      {category && difficulty && addNumber ? ( // თუ სამივე True-ა(ანუ შევსებული), გამოჩნდება SUBMIT.
        <Button
          style={{ marginLeft: "8px" }}
          variant="contained"
          color="secondary"
          onClick={() => handleSubmit()}
        >
          SUBMIT
        </Button>
      ) : (
        <Button style={{ marginLeft: "8px" }} variant="contained" disabled>
          SUBMIT
        </Button>
      )}
    </div>
  );
}
