import React from "react";
import styled from "styled-components";
// import cards from "./CardTexts";

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

const NotePadHeader = (props) => {
  const { cards, setCardTexts } = props;
  const createNewNote = () => {
    let title = prompt("Title for your note :");
    setCardTexts([
      ...cards,
      {
        h3: title.trim().length === 0 ? "Can't think of a title" : title,
        date: mm + "/" + dd + "/" + yyyy,
        note: "",
      },
    ]);
    // cards.push({
    //   h3: title.trim().length === 0 ? "Can't think of a title" : title,
    //   date: mm / dd / yyyy,
    //   note: "",
    // });
  };
  return (
    <HeaderDiv>
      <span>
        <img src="/assets/delete.png" alt="trash-can-icon" />
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
