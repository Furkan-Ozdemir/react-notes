import React from "react";
import styled from "styled-components";

const NotePadHeader = () => {
  return (
    <HeaderDiv>
      <span>
        <img src="/assets/delete.png" alt="trash-can-icon" />
      </span>
      <span>
        <img src="/assets/font.png" alt="font-icon" />
        <img src="/assets/task-list.png" alt="task-list-icon" />
        <img src="/assets/tablet.png" alt="tablet-icon" />
      </span>
      <span>
        <img src="/assets/share.png" alt="share-icon" />
        <img src="/assets/pen.png" alt="pen-icon" />
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
