import React from "react";
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 700,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
// const inputProps = {
//   marginTop: "100px",
//   height: "600px",
// };

export default function Card() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div
      style={{
        width: "800px",
        margin: "0 auto",
        //backgroundImage:
      }}
    >
      <h1 style={{ marginLeft: "10px" }}>Get Questions:</h1>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Select Category:
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Select Category"
        >
          <MenuItem value={10}>General Knowledge</MenuItem>
          <MenuItem value={20}>Books</MenuItem>
          <MenuItem value={30}>Films</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Select Difficulty:
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Select Difficulty"
        >
          <MenuItem value={10}>Easy</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>Hard</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Add Quiz Number:
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Add Quiz Number"
        >
          <MenuItem value={10}>5</MenuItem>
          <MenuItem value={20}>10</MenuItem>
        </Select>
      </FormControl>
      {/* <form className={classes.root} noValidate autoComplete="off">
        <TextField
          // inputProps={inputProps}
          id="outlined-basic"
          label="Add a quiz number from 1 to 10"
          variant="outlined"
        />
      </form> */}

      <Button
        style={{ marginLeft: "8px" }}
        variant="contained"
        color="secondary"
      >
        SUBMIT
      </Button>
    </div>
  );
}
