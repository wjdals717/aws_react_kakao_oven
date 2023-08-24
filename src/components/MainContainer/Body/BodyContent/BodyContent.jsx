/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import React from 'react';
import {BsPlusCircleFill} from "react-icons/bs";
import MyProject from "../../../../pages/MyProject/MyProject";
import { Route, Routes } from "react-router-dom";
import SharedProject from "../../../../pages/SharedProject/SharedProject";

function BodyContent(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SProjectAction}>
                <button>모두 선택</button>
                <button><BsPlusCircleFill fill="#fff"/> 새로운 프로젝트 만들기</button>
            </div>
            <Routes>
                {/* path → 페이지 주소창에 입력, element → 페이지 경로 지정 */}
                <Route path="/myproject" element={<MyProject />}/>
                <Route path="/sharedproject" element={<SharedProject />}/>
            </Routes>
        </div>
    );
}

export default BodyContent;