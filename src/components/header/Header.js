import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Book from '../Book';
import booksobj from '../../booksobj';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative"
    },
    books: {
        marginTop: "150px",
        position: "relative",
        float: "left",
    }
}));

export default function Header() {

    const [books, setBooks] = useState(booksobj);
    const classes = useStyles();

    function openBook(id) {
        console.log(id);
    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs></Grid> 
                <Grid item xs={12} sm={4}> 
                    <h1>Biclioteca de André</h1>
                    <h1>Hello World</h1>                   
                    <div className={classes.books} >
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
                <Grid item xs></Grid> 
            </Grid>
            
        </div>
    )
}