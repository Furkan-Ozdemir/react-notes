import React, { useState } from "react";
import styled from "styled-components";
import Editor from "./Editor";
import NotePadHeader from "./NotePadHeader";

const NotePad = (props) => {
  const { notes, setNotes } = props;
  const [editorValue, setEditorValue] = useState("");
  const sendNoteToHeader = (note) => {
    setEditorValue(note);
  };

  return (
    <Notepad>
      <NotePadHeader
        notes={notes}
        editorValue={editorValue}
        setNotes={setNotes}
      />
      <Editor sendNoteToHeader={sendNoteToHeader} />
    </Notepad>
  );
};

const Notepad = styled.div`
  flex: 1;
`;

export default NotePad;
