import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { h3, date, note } = props;

  return (
    <Div>
      <h3 style={{ marginBottom: "10px" }}>{h3}</h3>
      <span>
        <b>{date}</b> <span style={{ color: "#868273" }}>{note}</span>
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export default Card;
