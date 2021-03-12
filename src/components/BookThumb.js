import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import Rating from "@material-ui/lab/Rating";


export default function BookThumb(props) {

    const bgImage = props.book.img;

    const useStyle = makeStyles((theme) => ({ 
        root: {},
        paper: {
            height: "150px",
            margin: "10px",
            backgroundImage: `url("${bgImage}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            backgroundPosition: "center bottom"
        },
        rating: {
            //backgroundColor: "white" 
        }
    }));

    const classes = useStyle();

    return (
        <Grid item xs={4} sm={4} onClick={() => props.open(props.book)}>
            <Paper className={classes.paper} elevation={3}>
                <Paper className={classes.rating} elevation={0}>
                    {props.book.rating === '' ? <p>enviado!</p> 
                    : <Rating size="small" name="read-only" value={Number(props.book.rating)} readOnly />}                    
                </Paper>
            </Paper>
        </Grid>       
    )
}