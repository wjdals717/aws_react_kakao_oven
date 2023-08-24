import { css } from "@emotion/react";

export const GSCommon = css`
    *{
        box-sizing: border-box;
        color: #333;
    }

    *::-webkit-scrollbar{           //스크롤바 전체
        border: none;
        width: 5px;
    }
    
    *::-webkit-scrollbar-thumb{     //드래그 가능한 스크롤 핸들 막대
        border-radius: 5px;
        background-color: #dbdbdb;
    }

    body {
        font-family: "Helvetica Neue",Helvetica,"Malgun gothic",Arial;
        font-size: 14px;
        line-height: 1.5;
        color: #333;
    }

    input {
        text-align: start;
        cursor: text;
    }

    button {
        display: inline-block;
        justify-content: center;
        align-items: center;
        border: 1px solid #dbdbdb;
        border-radius: 2px;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        color: #333;
        background-color: #fff;
        border-color: #ccc;
        cursor: pointer;
    }
    

    /*html {
        background-color: #bbd2bd;
    }*/
`;