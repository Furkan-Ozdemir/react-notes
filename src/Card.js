import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { isSelected } = props;
  return (
    <Div isSelected={isSelected}>
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
  background-color: ${(props) => (props.isSelected ? "#F7ECBB" : "#fff")};
  border-radius: 15px;
  max-width: 200px;
  max-height: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export default Card;
