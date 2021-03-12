import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "200px",
        backgroundColor: "#283593",
        margin: "0"
    },
    titulo: {
        margin: "0",
        color: "white"
    }
}));

export default function Destaque(props) {

    const classes = useStyle();

    return (
        <div className={classes.root}>
            <h1 className={classes.titulo} >Hello World</h1>
        </div>
        
    )
}