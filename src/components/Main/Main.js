import React, { useState, useCallback, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import "./Main.css";
import PQForms from "./PQForms";
import EForm from "./EForm";
import { useStateValue } from "../../StateProvider";

function Main() {
  const [{ errorbag }] = useStateValue();

  const [state, setState] = useState(1);
  const [hasError, setHasError] = useState(true);

  const changeState = useCallback(
    (x) => {
      setState(x);
    },
    [setState]
  );

  const handleSnackbarOpen = useCallback(() => {
    setHasError(true);
  }, [setHasError]);

  const handleSnackbarClose = useCallback(() => {
    setHasError(false);
  }, [setHasError]);

  useEffect(() => {
    if (errorbag.length > 0) {
      handleSnackbarOpen();
    } else {
      handleSnackbarClose();
    }
  });

  return (
    <main className="main">
      <Container fixed>
        <PQForms changeState={changeState} />
        {state >= 2 && <EForm changeState={changeState} />}
      </Container>
      <Snackbar open={hasError} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="error">
          {errorbag?.map((error) => (
            <li key={error.message}>{error.message}</li>
          ))}
        </Alert>
      </Snackbar>
    </main>
  );
}

export default Main;
