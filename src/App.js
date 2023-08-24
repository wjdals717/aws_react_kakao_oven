import { Global } from "@emotion/react";
import * as S from "./styles/common";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon} />
      <MainLayout>
        <MainContainer>
          
        </MainContainer>
      </MainLayout>
    </>
  );
}

export default App;
