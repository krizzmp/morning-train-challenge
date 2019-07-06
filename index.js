import React from "react";
import { render } from "react-dom";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

import VisuallyHidden from "@reach/visually-hidden";
import * as PropTypes from "prop-types";

function BoxInner(props) {
  return (
    <div className="box">
      <img src={props.src} alt={props.alt} />
      <div className="headline">{props.headline}</div>
      <div className="body">{props.body}</div>
    </div>
  );
}

BoxInner.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  headline: PropTypes.string,
  body: PropTypes.string
};

function Box(p = {}) {
  const {
    src = "http://placeimg.com/240/180/any",
    alt = "random image",
    headline = "This is a headline",
    body = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        consequatur cum cupiditate distinctio dolor dolore facilis fugit harum
        ipsum itaque, iusto magni minus odit reprehenderit repudiandae vel
        veritatis voluptate? Cum.`,
    onClick
  } = p;
  return (
    <button
      className="invisible-button"
      onClick={() =>
        onClick({
          src: "http://placeimg.com/240/180/any",
          alt: "random image",
          headline: "This is a headline",
          body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        consequatur cum cupiditate distinctio dolor dolore facilis fugit harum
        ipsum itaque, iusto magni minus odit reprehenderit repudiandae vel
        veritatis voluptate? Cum.`
        })
      }
    >
      <BoxInner src={src} alt={alt} headline={headline} body={body} />
    </button>
  );
}
function App() {
  const [modal, setModal] = React.useState(null);
  return (
    <>
      <div className="container">
        <Box onClick={setModal} />
        <Box onClick={setModal} />
        <Box onClick={setModal} />
        <Box onClick={setModal} />
        <Box onClick={setModal} />
        <Box onClick={setModal} />
        <Box onClick={setModal} />
      </div>
      {!!modal ? (
        <Dialog isOpen={!!modal} onDismiss={() => setModal(null)}>
          <button className="close-button" onClick={() => setModal(null)}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </button>
          <BoxInner {...modal} />
        </Dialog>
      ) : null}
    </>
  );
}
render(<App />, document.getElementById("root"));
