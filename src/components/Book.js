import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Book(props) {

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
  const title = (props.book.title.length) > 11 ? `${props.book.title.substring(0,11)}...`  : props.book.title;

  return (
    <div
      className={classes.bookSpine}
    >
      <span className={classes.bookSpineText}>{title}</span>
    </div>
  );
}
