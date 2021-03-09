import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Rating from '@material-ui/lab/Rating';
import preStyle from "./preStyle";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "400px",
    float: "left"
  },
  input: {
    width: "80%",
    margin: "5px auto 5px auto"
  },
  button: {
    width: '100px',
    margin: '5px auto 20px auto'
  }
}));

export default function AddBook(props) {

  const indexHeights = Math.floor(Math.random() * 6);
  const indexColor = Math.floor(Math.random() * 7);
  const index = Math.floor(Math.random() * 4);

  const { fonts, heights, textures, colors, fontColors } = preStyle;

  const classes = useStyles();
  const [newBook, setNewBook ] = React.useState({
    id: 0,
    title: '',
    author: '',
    img: '',
    comment: '',
    description: '',
    rating: '3',
    color: colors[indexColor],
    colorFont: fontColors[indexColor],
    font: `"${fonts[index]}", cursive`,
    heigth: heights[indexHeights],
    texture: `url(${textures[index]})`
  });

  const [value, setValue] = React.useState(2);

  function handleChange(event) {

    const {name, value} = event.target;
        
    setNewBook((preValue) => ({
      ...preValue,
      [name]: value
    }));
    
  }

  return (
    <Paper className={classes.root}>
      <h2>Add a new Book</h2>
      <form noValidate autoComplete="off">
        <TextField onChange={handleChange} name="title" value={newBook.title}  className={classes.input} id="outlined-basic" label="Título" variant="outlined" />
        <TextField onChange={handleChange} name="author" value={newBook.author} className={classes.input} id="outlined-basic" label="Autor" variant="outlined" />
        <Rating
          onChange={handleChange}
          name="rating"
          value={newBook.rating}
        />
        <TextField name="img" onChange={handleChange} value={newBook.img} className={classes.input} id="outlined-basic" label="Image Link" variant="outlined" />
        <TextField 
          onChange={handleChange}
          name="comment" 
          value={newBook.comment}
          className={classes.input}
          id="outlined-multiline-static"
          label="Comentário"
          multiline
          rows={4}
          variant="outlined"
        />
        <TextField 
          onChange={handleChange}
          name="description" 
          value={newBook.description}
          className={classes.input}
          id="outlined-multiline-static"
          label="Descrição"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button
        onClick={() => props.sendBook(newBook)}
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
        >
        Save
        </Button>

      </form>
    </Paper>
  );
}
