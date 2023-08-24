import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
    padding-bottom: 9px;
    /* margin: 40px 0 20px; */
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
`;

export const STitle = css`
    margin-top: 20px;
    margin-bottom: 10px;
    float: left!important;
    font-size: 36px;
    font-weight: 500;
    color: inherit;
`;

export const SContentainer = css`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    width: 330px;
    height: 34px;
`;

export const SSearchBox = css`
    display: inline-block;
    position: relative;
`;

export const SSearchBoxInput = css`
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    padding: 6px 42.5px 6px 12px;
    width: auto;
    height: 34px;
    vertical-align: middle;
    cursor: text;
    &:focus {
        outline: 1.5px solid #C8EBFF;
    }
`;

export const SSearchBoxSpan = css`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0px;
    right: 0px;
    width: 34px;
    height: 34px;
    font-size: 14px;
    z-index: 2;
`;

export const SViewBox = css`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: 34px;
`;

export const SViewSelect = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    /* padding: 6px 12px; */
    width: 40px;
    height: 100%;

    &:first-child {
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        border-right: 0px;
    }
    
    &:last-child {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
    }

    & input {
      display: none ;
    }

    & input:checked + span{
      box-shadow: inset 0px 0px 10px #bbb;
    }

    & span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 12px;
        height: 34px;
        font-size: 16px;
    }

    &:hover span {
        background-color: #e6e6e6;
    }
`;

// export const SViewInput = css`
//     position: absolute;
//     margin: 4px 0 0;
//     /* z-index: -1; */
//     /* appearance: none; */
//     /* opacity: 0;         //투명도 설정 */
//     font-size: inherit;
//     cursor: pointer;
//     &:checked {
//         background-color: tomato;
//     }
// `;

// export const SViewSpan = css`
//     display: inline-block;
//     position: relative;
//     /* justify-content: center; */
//     /* align-items: center; */
//     /* text-align: center; */
//     top: 1px;
//     font-weight: 400;
//     line-height: 1;
// `;


