import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from "@material-ui/icons/Close";
import preStyle from "../preStyle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "400px",
      float: "left"
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


export default function SugestionForm(props) {
    const indexHeights = Math.floor(Math.random() * 6);
    const indexColor = Math.floor(Math.random() * 7);
    const index = Math.floor(Math.random() * 4);

    const { fonts, heights, textures, colors, fontColors } = preStyle;

    const classes = useStyles();

    const [newBook, setNewBook ] = React.useState({
        id: 0,
        title: '',
        author: '',
        img: 'https://thumbs.dreamstime.com/b/blue-check-mark-icon-tick-symbol-tick-icon-vector-illustration-vector-illustration-isolated-black-background-blue-check-mark-143227416.jpg',
        comment: '',
        description: 'Sugestion send successfuly!',
        rating: '', 
        color: colors[indexColor],
        colorFont: fontColors[indexColor],
        font: `"${fonts[index]}", cursive`,
        heigth: heights[indexHeights],
        texture: `url(${textures[index]})`
    });

    
    function handleChange(event) {

        const {name, value} = event.target;
            
        setNewBook((preValue) => ({
        ...preValue,
        [name]: value
        }));
        
    }
    return (
        <form noValidate autoComplete="off">
        <TextField onChange={handleChange} name="title" value={newBook.title}  className={classes.input} id="outlined-basic" label="Título" variant="outlined" />
        <TextField onChange={handleChange} name="author" value={newBook.author} className={classes.input} id="outlined-basic" label="Autor" variant="outlined" />
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
        <Button
        onClick={() => props.sendBook(newBook)}
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
        >
        Save
        </Button>
        <Button
        onClick={() => (props.close(false))}
        variant="outlined"
        color="secondary"
        size="small"
        className={classes.button}
        startIcon={<CloseIcon />}
        >
        Cancel
        </Button>
      </form>
    );
}