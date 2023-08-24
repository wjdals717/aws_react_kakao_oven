/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import React from 'react';
import Header from "./Header/Header";
import Body from "./Body/Body";

function MainContainer({children}) {
    return (
        <div css={S.SContainer}>
            <Header/>
            <Body/>
            {children}
        </div>
    );
}

export default MainContainer;