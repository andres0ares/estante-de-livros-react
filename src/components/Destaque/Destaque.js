import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
//import { titulos } from "../../booksobj.js";   

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: "30px 0 30px 0",
        backgroundColor: "#283593",
        margin: "0" 
    },
    title: {
        margin: "0",
        color: "white"
    },
    author: {
        margin: "0",
        color: "white"
    },
    comment: {
        margin: "30px 0 30px 0",
        color: "white"
    },
    paper: {
        margin: "30px 0",
        padding: "10px"
    },
    img: {
        width: "100%",
        height: "18rem",
        backgroundImage: `url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSM8Kzvt1fXGIwmgwTZN7qTeQULpPOQVsCvgPChE2VyL854x1O8")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "center top"
    },
    pad: {
        padding: "0 100px"
    }
}));

export default function Destaque(props) {
    const classes = useStyle();
    const book = props.books.find(book => book.title == 'Between the World and Me')

    return (
        <Grid className={classes.root} container alignItems="center">
            <Grid item xs={false} md={2}></Grid>
            <Grid item xs={12} md={4}>
                <div>
                    <h1 className={classes.title}>{book.title}</h1>
                    <h2 className={classes.author}>{book.author}</h2>
                    <h3 className={classes.comment}>{book.comment}</h3>
                    <Rating name="read-only" value={Number(book.rating)} readOnly />
                </div>
            </Grid>
            <Grid className={classes.pad} item xs={12} md={4}>
                <Paper className={classes.paper}>
                    <Paper className={classes.img}>
                    </Paper>
                </Paper>
            </Grid>
            <Grid item xs={false} md={2} />
            
        </Grid>        
    )
}

//<Grid item xs={2} sm={0} />