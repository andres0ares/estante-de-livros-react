import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: "50px",
        backgroundColor: "#1a237e"
    },
    paragraph: {
        color: "white",
        textAlign: "right"
    },
    icons: {
        color: "#1a237e",
        margin: "0 7px 0 7px"
    },
    pd: {
        margin: "30px 0 0 0"
    }
}));

export default function Footer() {

    const classes = useStyle();

    return (
        <Grid className={classes.root} container alignItems="center">
            <Grid item xs={0} md={2}></Grid>
            <Grid item xs={12} md={4}>
                <Fab className={classes.icons} size="small" aria-label="GitHub">
                    <GitHubIcon />
                </Fab>
                <Fab className={classes.icons} size="small" aria-label="Code SandBox">
                    <EditIcon />
                </Fab>
                <Fab className={classes.icons} size="small" aria-label="Instagram">
                    <InstagramIcon />
                </Fab>  
            </Grid>
            <Grid item className={classes.pd} xs={12} md={4}>
                <p className={classes.paragraph}>André Soares</p>
                <p className={classes.paragraph}>/oandre.com</p>
                <p className={classes.paragraph}>andre.soares2@academico.ufpb.br</p>
                <p className={classes.paragraph}>Mais projetos em...</p>
            </Grid>
            <Grid item xs={0} md={2}></Grid>
        </Grid>  
    )
}