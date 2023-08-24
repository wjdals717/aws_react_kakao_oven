/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import React, { useState } from 'react';
import {BsFillSearchHeartFill} from "react-icons/bs";
import { BiListUl, BiSolidGridAlt } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { isListViewOptionState } from "../../../store/MenuStore";

function Header(props) {
    const [ isListViewClick, setIsListViewClick ] = useRecoilState(isListViewOptionState);

    const handleViewSelectClick = () => {
        setIsListViewClick(!isListViewClick);
    }

    return (
        <div>
            <div css={S.SLayout}>
                <h1 css={S.STitle}>프로젝트 대쉬보드</h1>
                <div css={S.SContentainer}>
                    <div css={S.SSearchBox}>
                        <input type="text"  css={S.SSearchBoxInput} placeholder="프로젝트 검색"/>
                        <span css={S.SSearchBoxSpan}><BsFillSearchHeartFill /></span>
                    </div>
                    <div css={S.SViewBox}>
                        <label css={S.SViewSelect}>
                            <input type="radio" name="viewOption" id="listView" checked/>
                            <span><BiListUl/></span>
                        </label>
                        <label css={S.SViewSelect}>
                            <input type="radio" name="viewOption"  id="gridView"/>
                            <span><BiSolidGridAlt/></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;