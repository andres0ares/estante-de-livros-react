import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Bookdetail from "./Bookdetail";
import AddBook from "./AddBook/AddBook";
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import BookThumb from './BookThumb';
import Pagination from '@material-ui/lab/Pagination';
//import { titulos } from "../booksobj.js";   

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    padding: "40px 0",
    backgroundColor: "#eeeeee"
    //backgroundImage: 'url("https://www.transparenttextures.com/patterns/always-grey.png")'
  },
  estante: {
    position: "relative", 
    float: "left",
    height: "200px"
  },
  pagination: {
    //padding: "0 28%",
    margin: "10px auto"
  },
  add: {
    margin: "40px 0"
  }
}));

function displayBook(titulos) {

  const inverted = titulos.reverse();  
  const numPages = Math.ceil(titulos.length / 6);
  let count = 0;

  let newArrayBooks = Array.from(Array(numPages), () => []);
  inverted.map((book, index) => {
    count = newArrayBooks[count].length === 6 ? count + 1 : count; 
    newArrayBooks[count].push(book);
  });

  return newArrayBooks;
}

function Library(props) {

  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [books, setBooks] = useState(displayBook(props.books));
  const [book, setBook] = useState({});
  const [clicked, setClicked] = useState(false);

  const [openAdd, setOpenAdd] = useState(false);

  function openBook(titulo) {
    setClicked(true);
    setBook(titulo);
    setOpenAdd(false);
  }

  function handleOpenAdd() {
    setOpenAdd(!openAdd);
    setClicked(false);
  }

  function sendBook(newBook) {
    let newTitulos = titulos;
    newTitulos.push(newBook);
    setBooks(displayBook(newTitulos));
    handleOpenAdd();
  }

  function handleChangePage(event, value){
    setPage(value);
  }

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={3}>
          <Grid container direction="row" justify="center" alignItems="center">
            {books[page - 1].map((book, index) => (
              <BookThumb key={index} book={book} open={openBook} />
            ))}
          </Grid>  
          <Pagination className={classes.pagination} color="primary" count={books.length} page={page} onChange={handleChangePage} />        
        </Grid>
        {clicked && (
          <Grid item xs={12} md={5}> 
            <Bookdetail closeBook={() => setClicked(false)} book={book} />
          </Grid>
        )}
        <Grid item xs={12} md={!openAdd ? 2 : 5}> 
          { !openAdd && (
            <Fab onClick={() => handleOpenAdd()} className={classes.add} color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          )}
          { openAdd && ( <AddBook close={handleOpenAdd} sendBook={sendBook} /> )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Library;