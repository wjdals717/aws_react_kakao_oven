/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import React from 'react';
import Header from "../Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import BodyContent from "./BodyContent/BodyContent";

function Body(props) {
    return (
        <div css={S.SLayout}>
            <Sidebar />
            <BodyContent />
        </div>
    );
}

export default Body;