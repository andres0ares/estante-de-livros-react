import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Book from '../Book';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative"
    },
    books: {
        marginTop: "150px",
        position: "relative",
        float: "left",
    },
    title: {
        marginTop: "80px",
        marginBottom: "0",
        fontSize: "3rem",
        fontFamily: "'Merriweather', serif",
        color: "white"
    },
    secondTitle: {
        marginTop: "0",
        marginBottom: "20px",
        fontSize: "1rem",
        fontFamily: "'Exo 2', sans-serif",
        color: "#eeeeee"
    },
    icons: {
        color: "#3f51b5",
        backgroundColor: "#eeeeee",
        margin: "0 10px 80px 0"
    }
}));

export default function Header(props) {

    const [books, setBooks] = useState(props.books);
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs></Grid> 
                <Grid item xs={12} sm={4}> 
                    <h1 className={classes.title}>Personal Library</h1>
                    <h3 className={classes.secondTitle}>Developed using React, by <a href="https://oandre.com" target="_blank">André Soares</a></h3> 
                    <div>
                        <a href="https://github.com/andres0ares/estante-de-livros-react" target="_blank">
                            <Fab className={classes.icons} size="small" aria-label="GitHub">
                                <GitHubIcon />
                            </Fab>
                        </a>
                        <a href="https://codesandbox.io/s/stupefied-mahavira-u5xhu" target="_blank">
                        <Fab className={classes.icons} size="small" aria-label="Code SandBox">
                            <EditIcon />
                        </Fab>
                        </a>
                    </div>                  
                    <div className={classes.books} >
                        {books.map((titulo, index) => (
                        <Book
                            key={titulo.id}
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