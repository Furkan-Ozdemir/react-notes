import React from "react";
import styled from "styled-components";
import LeftPanel from "./LeftPanel";
import NotePad from "./NotePad";

const Main = () => {
  return (
    <Div>
      <LeftPanel />
      <NotePad />
    </Div>
  );
};

const Div = styled.div`
  width: 50%;
  max-width: 1000px;
  border: 0.05em solid tomato;
  background-color: #f2f2f7;
  display: flex;
`;
export default Main;
