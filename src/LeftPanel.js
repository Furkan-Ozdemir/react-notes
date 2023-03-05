import React from "react";
import styled from "styled-components";
import Card from "./Card";

const LeftPanel = (props) => {
  const { notes } = props;
  console.log(notes);

  const notesArray = Object.keys(notes).map((key) => notes[key]);
  console.log(notesArray);
  return (
    <Leftpanel>
      {notesArray.map((notes) => (
        <Card
          key={notes.id}
          identifier={notes.id}
          h3={notes.h3}
          date={notes.date}
          note={notes.note}
          selected={notes.selected}
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
