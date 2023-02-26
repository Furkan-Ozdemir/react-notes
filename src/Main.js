import React, { useState } from "react";
import styled from "styled-components";
import LeftPanel from "./LeftPanel";
import NotePad from "./NotePad";

const Main = () => {
  const [cardTexts, setCardTexts] = useState([
    { h3: "Title", date: "2023/26/02", note: "this is a note" },
  ]);
  return (
    <Div>
      <LeftPanel cards={cardTexts} />
      <NotePad cards={cardTexts} setCardTexts={setCardTexts} />
    </Div>
  );
};

const Div = styled.div`
  width: 50%;
  max-width: 1000px;
  border: 0.05em solid tomato;
  display: flex;
`;
export default Main;
