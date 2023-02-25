import React from "react";
import styled from "styled-components";
import Card from "./Card";

const LeftPanel = () => {
  return (
    <Leftpanel>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Leftpanel>
  );
};
const Leftpanel = styled.div`
  border: 0.05em solid blue;
`;
export default LeftPanel;
