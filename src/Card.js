import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Div>
      <h3 style={{ marginBottom: "10px" }}>Title</h3>
      <span>
        <b>Date</b>{" "}
        <span style={{ color: "#868273" }}>
          noteaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </span>
      </span>
    </Div>
  );
};
const Div = styled.div`
  padding: 20px;
  margin: 10px;
  background-color: #fff;
  border-radius: 15px;
  max-width: 200px;
  max-height: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default Card;
