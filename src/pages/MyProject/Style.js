import { css } from "@emotion/react";

export const SLayout = css`
    flex-grow: 1;
    height: 100%;
`;

export const SProjectContainer = css`
    display: flex;
    margin: 20px;
`;

export const SProjectBox = css`
    margin: 0px 15px;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    padding: 5px;
    width: 280px;
    height: 380px;
    background-color: #ffffff;

    & img {
        width: 100%;
        height: 160px;
    }
`;

export const SProjectOption = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    & input + button{
        
    }
`;

export const SProjectCaption = css`
    padding: 9px;
    font-size: 12px;
    color: #333;

    & h3 {
        margin: 6px 0px 10px;
        font-size: 24px;
    }

    & p {
        margin-bottom: 12px;
        height: 36px;
        line-height: 18px;
        overflow: hidden;
    }

    & hr {
        margin: 8px 0px 15px;
    }
`;

export const SProjectInfo = css`
    & small {
        display: block;
        margin-bottom: 5px;
        font-weight: 600;
        height: 17px;
    }

    & a {
        position: relative;
        border-radius: 5px;
        margin-bottom: 5px;
        text-decoration: none;
        height: 16px;
        background-color: #5CB85C;
        color: #fff;
    }
`;