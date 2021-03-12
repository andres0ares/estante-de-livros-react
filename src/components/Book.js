import React from "react";
import preStyle from "./preStyle";
import { makeStyles } from "@material-ui/core/styles";

function Book(props) {

  const useStyles = makeStyles((theme) => ({
    bookSpine: {
      color: props.book.colorFont,
      backgroundColor: props.book.color,
      height: props.book.heigth,
      marginLeft: `${props.book.id * 31}px`,
      fontFamily: props.book.font,
      backgroundImage: props.book.texture,
      cursor: "pointer",
      boxShadow: "2px 2px 4px #000000",
      position: "absolute",
      float: "left",
      verticalAlign: "center",
      width: "30px",
      bottom: "0px"
    },
    bookSpineText: {
      fontSize: "14px",
      writingMode: "vertical-rl",
      marginTop: "50%"
    }
  }));

  const classes = useStyles();

  return (
    <div
      onClick={() => props.openBook(props.book)}
      className={classes.bookSpine}
    >
      <span className={classes.bookSpineText}>{props.book.title}</span>
    </div>
  );
}

export default Book;
