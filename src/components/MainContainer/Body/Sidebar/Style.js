import { css } from "@emotion/react";

export const SLayout = css`
    width: 290px;
    height: 500px;
`;

export const SContainer = css`
`;

export const SListBox =(isSelected) => css`
    padding: 10px 15px;
    line-height: 20px;
    width: 260px;
    height: 40px;
    ${isSelected && "background-color: #3498DB;"}
    cursor: pointer;

    &:hover {
        ${!isSelected && "background-color: #e6e6e6;"}
    }
    
`;