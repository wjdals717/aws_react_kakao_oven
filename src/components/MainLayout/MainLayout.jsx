/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import React, { Children } from 'react';
import MainHeader from "./MainHeader/MainHeader";

function MainLayout({children}) {
    return (
        <div css={S.SLayout}>
            <MainHeader />
            {children}
        </div>
    );
}

export default MainLayout;