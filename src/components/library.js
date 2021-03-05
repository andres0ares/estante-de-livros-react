import React, { useState } from "react";
import Book from "./Book";
import { makeStyles } from "@material-ui/core/styles";
import titulos from "../booksobj";
import Bookdetail from "./Bookdetail";
import AddBook from "./AddBook";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  estante: {
    position: "relative",
    float: "left",
    height: "200px"
  }
}));

function Library() {
  const classes = useStyles();

  const [book, setBook] = useState({});
  const [clicked, setClicked] = useState(false);

  function openBook(titulo) {
    setClicked(true);
    setBook(titulo);
  }

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} sm={4}>
          <div
            className={classes.estante}
            style={{ width: `${titulos.length * 31}px` }}
          >
            <h2>Estante</h2>
            {titulos.map((titulo, index) => (
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
            <Bookdetail closeBook={() => setClicked(false)} book={book} />
          </Grid>
        )}
        <Grid xs={12} sm={4}>
          <AddBook />
        </Grid>
      </Grid>
    </div>
  );
}

export default Library;
