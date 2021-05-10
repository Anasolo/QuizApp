import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

// App-დან მოაქვს ეს პარამეტრები.
export default function Answer({ count, sum }) {
  let history = useHistory();
  const handleReset = () => {
    history.push(`/`);
  };
  return (
    <div
      style={{
        width: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1>Result</h1>
      <h2>
        Your Score Is: {count} out of {sum}
      </h2>
      <Button
        style={{ marginLeft: "8px" }}
        variant="contained"
        color="secondary"
        onClick={() => handleReset()}
      >
        RESET
      </Button>
    </div>
  );
}
