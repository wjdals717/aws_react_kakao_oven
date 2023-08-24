import { css } from "@emotion/react";

export const SLayout = css`
    position: relative;
    /* display: block; */
    margin-bottom: 20px;
    border-bottom: 1px solid transparent;
    line-height: 20px;
    min-height: 50px;
    background-color: #383D40;
    z-index: 1000;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 15px;
    /* width: 100%; */
    width: 1170px;
    min-width: 1200px;
    height: 50px;
`;

export const STitle = css`
    float: left;
    margin-left: -15px;
    padding: 15px;
    text-decoration: none;
    height: 50px;
    font-size: 22px;
    color: #fff;
`;

export const SSmallTitle = css`
    display: inline-block;
    padding: 1px 3px;
    margin-left: 2px;
    margin-top: -15px;
    font-size: 11px;
    font-weight: 400;
    color: #aaa;
    line-height: 12px;
    vertical-align: middle;
`;

export const SAccountBox = css`
    margin-right: -15px;
    float: right!important;
    /* height: 50px; */
`;

export const SDropDown = css`
    position: relative;
    float: left;
`;

export const SDropDownToggle = css`
    position: relative;
    padding: 15px;
    text-align: left;
    text-decoration: none;
`;

export const SImg = css`
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    width: 30px;
    max-width: none;
    vertical-align: middle;
`;

export const SAccountName = css`
    padding-left: 35px;
    padding-right: 10px;
    font-size: 14px;
    color: #ffffff;
`;

export const SDropDownIcon = css`
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    color: #ffffff;
`;

export const SDropDownMenu = (isShow) => css`
    display: ${isShow ? "block": "none"};
    /* display: block; */
    position: absolute;
    top: 100%;
    right: 0;
    left: auto;
    float: left;
    padding: 5px 0;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    min-width: 160px;
    z-index: 1000;
`;

export const SDropDownli = css`
    display: list-item;
`;

export const SDropDownliA = css`
    display: block;
    padding: 6px 24px;
    text-decoration: none;
    clear: both;    //float 양쪽 취소
    font-weight: 400;
    white-space: nowrap;
    &:hover{
        background-color: #dbdbdb;
    }
`;

export const SDropDownDivision = css`
    height: 1px;
    margin: 9px 0;
    overflow: hidden;
    background-color: #e5e5e5;
`;




