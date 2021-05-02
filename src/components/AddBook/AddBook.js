import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import IconButton from "@material-ui/core/IconButton"
import CardHeader from "@material-ui/core/CardHeader"
import BookForm from './BookForm'
import SugestionForm from "./SugestionForm"
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "400px",
    float: "left",
    margin: '20px'
  },
  close: {
    display: "absolute",
    top: "10px", 
    left: "10px"
  },
  input: {
    width: "80%",
    margin: "5px auto 5px auto"
  },
  button: {
    width: '100px',
    margin: '20px 15px 20px 15px'
  }
}));

export default function AddBook(props) {

  const classes = useStyles();

  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("Add a book sugestion");

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString("pt-BR", options);

  const handleToggle = () => {
    const newTitle = toggle ? "Add a book sugestion" : "Add a new book";
    setToggle(!toggle);
    setTitle(newTitle);
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.input} >
        <CardHeader
        action={
          <IconButton onClick={handleToggle} aria-label="Change">
            <CompareArrowsIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      </div>       
      {toggle ? <BookForm sendBook={props.sendBook} close={props.close} /> 
      : <SugestionForm sendBook={props.sendBook} close={props.close} /> }
      
    </Paper>
  );
}
