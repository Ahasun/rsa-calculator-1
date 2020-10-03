import React, { useCallback, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./EncryptOrDecrypt.css";
import { useStateValue } from "../../StateProvider";

function EncryptOrDecrypt() {
  const [
    { d, e, n, cipher, message, cipherInNumeric, messageInNumeric },
    dispatch,
  ] = useStateValue();

  const messageInput = useRef();
  const cipherInput = useRef();
  const cipherAsNumericInput = useRef();

  const encryptMessage = useCallback(() => {
    dispatch({
      type: "Encrypt",
      item: {
        message: messageInput.current.value,
      },
    });
  }, [dispatch]);

  const decryptCipher = useCallback(() => {
    dispatch({
      type: "Decrypt",
      item: {
        cipher: cipherInput.current.value,
      },
    });
  }, [dispatch]);

  const decryptCipherFromNumeric = useCallback(() => {
    dispatch({
      type: "DecryptFromNumericCipher",
      item: {
        cipher: cipherAsNumericInput.current.value,
      },
    });
  }, [dispatch]);

  return (
    <Paper elevation={2} className="encryptOrDecrypt__container">
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          The private key, <em>d</em> is: <strong>{d}</strong>.
        </Typography>
        <Typography variant="h5" gutterBottom>
          So, public key pair, <em>(e, n)</em> is:{" "}
          <strong>
            ({e}, {n})
          </strong>
        </Typography>
        <Typography variant="h5" gutterBottom>
          So, private key pair, <em>(d, n)</em> is:{" "}
          <strong>
            ({d}, {n})
          </strong>
        </Typography>
      </div>
      <Typography variant="h5" gutterBottom>
        Enter a message to encrypt
      </Typography>
      <div className="encryptOrDecrypt__form">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControl
              fullWidth
              className="encryptOrDecrypt__formControl"
              variant="outlined"
            >
              <TextField
                inputRef={messageInput}
                multiline={true}
                rows={5}
                rowsMax={5}
                variant="outlined"
                label="Enter a message to encrypt"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl
              fullWidth
              className="encryptOrDecrypt__formControl"
              variant="outlined"
            >
              <TextField
                multiline={true}
                rows={5}
                rowsMax={5}
                variant="outlined"
                value={cipher}
                label="Encrypted text in cipher"
                aria-readonly
              />
            </FormControl>
          </Grid>
        </Grid>
        <FormControl
          fullWidth
          style={{ marginTop: "16px" }}
          className="encryptOrDecrypt__formControl"
          variant="outlined"
        >
          <TextField
            variant="outlined"
            value={cipherInNumeric}
            label="Encrypted text in numeric value"
            aria-readonly
          />
        </FormControl>
      </div>
      <Button
        variant="contained"
        color="primary"
        className="encryptOrDecrypt__button"
        onClick={encryptMessage}
      >
        Encrypt
      </Button>
      <Typography variant="h5" gutterBottom style={{ marginTop: "32px" }}>
        Enter cipher text to decrypt the message
      </Typography>
      <div className="encryptOrDecrypt__form">
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <FormControl
              fullWidth
              style={{ marginBottom: "16px" }}
              className="encryptOrDecrypt__formControl"
              variant="outlined"
            >
              <TextField
                variant="outlined"
                label="Decrypt using numeric value"
                inputRef={cipherAsNumericInput}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="encryptOrDecrypt__button"
              onClick={decryptCipherFromNumeric}
            >
              Decrypt
            </Button>
          </Grid>
        </Grid>
        or,
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormControl
              fullWidth
              className="encryptOrDecrypt__formControl"
              variant="outlined"
            >
              <TextField
                id="outlined-p-value"
                type="number"
                inputRef={cipherInput}
                multiline={true}
                rows={5}
                rowsMax={5}
                variant="outlined"
                label="Enter the cipher text to decrypt the message"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl
              fullWidth
              className="encryptOrDecrypt__formControl"
              variant="outlined"
            >
              <TextField
                multiline={true}
                rows={5}
                rowsMax={5}
                variant="outlined"
                value={message}
                label="Decrypted message"
                aria-readonly
              />
            </FormControl>
          </Grid>
        </Grid>
        <FormControl
          fullWidth
          style={{ marginTop: "16px" }}
          className="encryptOrDecrypt__formControl"
          variant="outlined"
        >
          <TextField
            variant="outlined"
            value={messageInNumeric}
            label="Decrypted text in numeric value"
            aria-readonly
          />
        </FormControl>
      </div>
      <Button
        variant="contained"
        color="primary"
        className="encryptOrDecrypt__button"
        onClick={decryptCipher}
      >
        Decrypt
      </Button>
    </Paper>
  );
}

export default EncryptOrDecrypt;
