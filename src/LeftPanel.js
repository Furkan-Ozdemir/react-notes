import React from "react";
import styled from "styled-components";
import Card from "./Card";
import uuid from "react-uuid";

const LeftPanel = (props) => {
  const { notes } = props;

  const notesArray = Object.keys(notes).map((key) => notes[key]);
  return (
    <Leftpanel>
      {notesArray.map((notes) => (
        <Card
          key={uuid()}
          identifier={uuid()}
          h3={notes.h3}
          date={notes.date}
          note={notes.note}
        />
      ))}
    </Leftpanel>
  );
};
const Leftpanel = styled.div`
  border: 0.05em solid blue;
  overflow-y: auto;
`;
export default LeftPanel;
