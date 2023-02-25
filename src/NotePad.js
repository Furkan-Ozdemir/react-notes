import React from "react";
import styled from "styled-components";
import NotePadHeader from "./NotePadHeader";
import Tiptap from "./TipTap";

const NotePad = () => {
  return (
    <Notepad>
      <NotePadHeader />
      <Tiptap />
    </Notepad>
  );
};

const Notepad = styled.div`
  flex: 1;
`;

export default NotePad;
