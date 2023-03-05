import React from "react";
import styled from "styled-components";
import LeftPanel from "./LeftPanel";
import NotePad from "./NotePad";

const Main = (props) => {
  const { notes, setNotes } = props;

  return (
    <Div>
      <LeftPanel notes={notes} />
      <NotePad notes={notes} setNotes={setNotes} />
    </Div>
  );
};

const Div = styled.div`
  width: 50%;
  max-width: 1000px;
  border: 0.05em solid tomato;
  display: flex;
`;
export default Main;
