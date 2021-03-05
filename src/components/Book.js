import React from "react";
import preStyle from "./preStyle";
import { makeStyles } from "@material-ui/core/styles";

function Book(props) {
  const color = props.book.fontColor;
  const backgroundColor = props.book.color;

  const indexHeights = Math.floor(Math.random() * 6);
  const indexColor = Math.floor(Math.random() * 7);
  const index = Math.floor(Math.random() * 4);

  const { fonts, heights, textures, colors, fontColors } = preStyle;

  const useStyles = makeStyles((theme) => ({
    bookSpine: {
      color: color === "" ? fontColors[indexColor] : color,
      backgroundColor:
        backgroundColor === "" ? colors[indexColor] : backgroundColor,
      height: heights[indexHeights],
      marginLeft: `${props.index * 31}px`,
      fontFamily: `"${fonts[index]}", cursive`,
      backgroundImage: `url(${textures[index]})`,
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
