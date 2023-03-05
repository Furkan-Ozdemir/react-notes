import React from "react";
import styled from "styled-components";
import uuid from "react-uuid";

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

const NotePadHeader = (props) => {
  const { editorValue, setNotes, notes } = props;
  const createNewNote = async () => {
    //TODO promptu modal ile degistir
    let title = prompt("Title for your note :");
    if (title === null) return;
    const newNote = {
      id: uuid(),
      h3: title.trim() === "" ? "Cant think of a title" : title,
      date: dd + "/" + mm + "/" + yyyy,
      note: editorValue,
      selected: true,
    };
    try {
      const response = await fetch(
        "https://react-notes-91c95-default-rtdb.europe-west1.firebasedatabase.app/notes.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(newNote),
        }
      );
      if (response.status !== 200) {
        throw new Error("Error occured while creating new note");
      }
      setNotes(notes, newNote);
    } catch (error) {
      //TODO buraya daha sonra error modali ekle
      console.log(error);
    }
  };
  const findSelectedNote = () => {
    try {
      const selectedNote = Object.keys(notes).filter((key) => {
        return notes[key].selected === true;
      })[0];
      return selectedNote;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteNote = async (noteName) => {
    //TODO sildikten sonra en ustteki notu selected'e cek
    try {
      const response = await fetch(
        `https://react-notes-91c95-default-rtdb.europe-west1.firebasedatabase.app/notes/${noteName}.json`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Note deleted successfully");
      } else {
        throw new Error("Error occured while deleting note");
      }
    } catch (error) {
      //TODO buraya daha sonra error modali ekle
      console.log(error);
    }
  };
  return (
    <HeaderDiv>
      <span>
        <img
          onClick={() => {
            const noteName = findSelectedNote();
            deleteNote(noteName);
          }}
          src="/assets/delete.png"
          alt="trash-can-icon"
        />
      </span>
      <span>
        <img src="/assets/share.png" alt="share-icon" />
        <img onClick={createNewNote} src="/assets/pen.png" alt="pen-icon" />
      </span>
    </HeaderDiv>
  );
};
const HeaderDiv = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;

  img {
    width: 23px;
    margin: 10px;
    cursor: pointer;
  }
`;

export default NotePadHeader;
