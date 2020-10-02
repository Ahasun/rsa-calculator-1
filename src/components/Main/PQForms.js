import React, { useCallback, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./PQForms.css";
import { useStateValue } from "../../StateProvider";

function PQForms() {
  const [, dispatch] = useStateValue();

  const pValue = useRef();
  const qValue = useRef();

  const submit = useCallback(() => {
    if (pValue.current.value.length <= 0 || qValue.current.value.length <= 0)
      return;

    dispatch({
      type: "SET_P_AND_Q",
      item: {
        p: pValue.current.value,
        q: qValue.current.value,
      },
    });
  }, [dispatch]);

  return (
    <Paper elevation={2} className="pqforms__container">
      <Typography variant="h5" gutterBottom>
        Enter two prime number <em>P</em> and <em>Q</em>, such that{" "}
        <em>P * Q</em> is greater than 127.
      </Typography>
      <div className="pqforms__form">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControl
              fullWidth
              className="pqforms__formControl"
              variant="outlined"
            >
              <TextField
                id="outlined-p-value"
                type="number"
                inputRef={pValue}
                variant="outlined"
                label="Enter a prime number, P"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl
              fullWidth
              className="pqforms__formControl"
              variant="outlined"
            >
              <TextField
                id="outlined-q-value"
                type="number"
                inputRef={qValue}
                variant="outlined"
                label="Enter a prime number, Q"
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <Grid container justify="center">
        <Button
          variant="contained"
          color="primary"
          className="pqforms__button"
          onClick={submit}
        >
          Next
        </Button>
      </Grid>
    </Paper>
  );
}

export default PQForms;
