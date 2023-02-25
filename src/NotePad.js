import React from "react";
import styled from "styled-components";
import Editor from "./Editor";
import NotePadHeader from "./NotePadHeader";

const NotePad = () => {
  return (
    <Notepad>
      <NotePadHeader />
      <Editor />
    </Notepad>
  );
};

const Notepad = styled.div`
  flex: 1;
`;

export default NotePad;
