import React, { useState } from "react";
import Book from "./Book";
import { makeStyles } from "@material-ui/core/styles";
import titulos from "../booksobj";
import Bookdetail from "./Bookdetail";
import AddBook from "./AddBook";
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  estante: {
    position: "relative",
    float: "left",
    height: "200px"
  }
}));

function Library() {
  const classes = useStyles();

  const [books, setBooks] = useState(titulos)
  const [book, setBook] = useState({});
  const [clicked, setClicked] = useState(false);

  const [openAdd, setOpenAdd] = useState(false);

  function openBook(titulo) {
    setClicked(true);
    setBook(titulo);
  }

  function sendBook(newBook) {
    setBooks((preValue) => ([
      ...preValue,
      newBook
    ]));
    setOpenAdd(false);
  }

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} sm={4}>
          <div
            className={classes.estante}
            style={{ width: `${books.length * 31}px` }}
          >
            <h2>Estante</h2>
            {books.map((titulo, index) => (
              <Book
                key={titulo.id}
                openBook={openBook}
                index={index}
                book={titulo}
              />
            ))}
          </div>
        </Grid>
        {clicked && (
          <Grid xs={12} sm={4}>
            {console.log(books)}
            <Bookdetail closeBook={() => setClicked(false)} book={book} />
          </Grid>
        )}
        <Grid xs={12} sm={4}>
          { !openAdd && (
            <Fab onClick={() => setOpenAdd(true)} color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
          )}
          { openAdd && ( <AddBook sendBook={sendBook} /> )}
          
        </Grid>
      </Grid>
    </div>
  );
}

export default Library;
