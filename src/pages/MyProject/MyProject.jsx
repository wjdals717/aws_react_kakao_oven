/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import React, { Children } from 'react';
import MainContainer from "../../components/MainContainer/MainContainer";
import Header from "../../components/MainContainer/Header/Header";
import Body from "../../components/MainContainer/Body/Body";
import {IoIosSettings, IoMdArrowDropdown} from "react-icons/io";
import {LuClock3} from "react-icons/lu";

function MyProject(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SProjectContainer}>
                <div css={S.SProjectBox}>
                    <div css={S.SProjectOption}>
                        <input type="checkBox" />
                        <button>
                            <span><IoIosSettings/></span>
                            <span><IoMdArrowDropdown color="#fff"/></span>
                        </button>
                    </div>
                    <img src="http://realresearcher.co.kr/web/upload/NNEditor/20230803/ED91B8EBB094EC98A4_EC97B0ED95A9EB89B4EC8AA4.jpg" alt="" />
                    <div css={S.SProjectCaption}>
                        <h3>[AWS] TodoList</h3>
                        <p>todolist 디자인입니당todolist 디자인입니당todolist 디자인입니당todolist 디자인입니당todolist 디자인입니당todolist 디자인입니당</p>
                        <hr />
                        <div css={S.SProjectInfo}>
                            <small><LuClock3/> 16일 전</small>
                            <a href="">로그인없이 테스트 가능</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProject;