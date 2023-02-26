import React from "react";
import styled from "styled-components";
import Card from "./Card";
// import cards from "./CardTexts";

const LeftPanel = (props) => {
  const { cards } = props;
  return (
    <Leftpanel>
      {cards.map((card) => (
        <Card h3={card.h3} date={card.date} note={card.note} />
      ))}
      {/* <Card isSelected={true} />
      <Card isSelected={false} />
      <Card isSelected={false} /> */}
    </Leftpanel>
  );
};
const Leftpanel = styled.div`
  border: 0.05em solid blue;
  overflow-y: auto;
`;
export default LeftPanel;
