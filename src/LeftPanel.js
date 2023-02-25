import React from "react";
import styled from "styled-components";
import Card from "./Card";

const LeftPanel = () => {
  return (
    <Leftpanel>
      <Card isSelected={true} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
      <Card isSelected={false} />
    </Leftpanel>
  );
};
const Leftpanel = styled.div`
  border: 0.05em solid blue;
  overflow-y: scroll;
`;
export default LeftPanel;
