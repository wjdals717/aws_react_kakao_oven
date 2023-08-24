/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import React from 'react';
import {IoMdArrowDropdown} from "react-icons/io";
import { useRecoilState } from "recoil";
import { isMenuShowState } from "../../../store/MenuStore";

function MainHeader(props) {
    const[ isMenuShow, setIsMenuShow ] = useRecoilState(isMenuShowState);

    const handleMenuToggleClick = () => {
        setIsMenuShow(!isMenuShow);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <a href="/" css={S.STitle}>
                    Oven
                    <small css={S.SSmallTitle}>BETA</small>
                </a>
                <ul css={S.SAccountBox}>
                    <li css={S.SDropDown}>
                        <a href="javascript:;" datatype="to" type="button" css={S.SDropDownToggle} onClick={handleMenuToggleClick}>
                            <img css={S.SImg} src="https://www.gravatar.com/avatar/af4d790798b40ab1e691b442f7ca870a?d=retro" alt="" />
                            <span css={S.SAccountName}>JeongMin</span>
                            <span css={S.SDropDownIcon}><IoMdArrowDropdown color="#fff"/></span>
                            { isMenuShow && (
                                <ul css={S.SDropDownMenu(isMenuShow)}>
                                    <li css={S.SDropDownli}>
                                        <a css={S.SDropDownliA} href="">프로젝트 대쉬보드</a>
                                    </li>
                                    <li css={S.SDropDownli}>
                                        <a css={S.SDropDownliA} href="">계정 설정하기</a>
                                    </li>
                                    <li css={S.SDropDownli}>
                                        <a css={S.SDropDownliA} href="">헬프 데스크</a>
                                    </li>
                                    <li css={S.SDropDownDivision}></li>
                                    <li css={S.SDropDownli}>
                                        <a css={S.SDropDownliA} href="">로그아웃</a>
                                    </li>
                                </ul>
                            )}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainHeader;