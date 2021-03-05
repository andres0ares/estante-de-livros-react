import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "400px",
    float: "left"
  }
}));

export default function AddBook() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <h2>Add a new Book</h2>
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Título" variant="outlined" />
        <TextField id="outlined-basic" label="Autor" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Descrição"
          multiline
          rows={4}
          variant="outlined"
        />
      </form>
    </Paper>
  );
}
