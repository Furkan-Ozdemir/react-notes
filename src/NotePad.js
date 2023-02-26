import React from "react";
import styled from "styled-components";
import Editor from "./Editor";
import NotePadHeader from "./NotePadHeader";

const NotePad = (props) => {
  const { setCardTexts, cards } = props;
  return (
    <Notepad>
      <NotePadHeader cards={cards} setCardTexts={setCardTexts} />
      <Editor />
    </Notepad>
  );
};

const Notepad = styled.div`
  flex: 1;
`;

export default NotePad;
