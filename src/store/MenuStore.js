import { atom } from "recoil";
//Sidebar show 상태를 관리하는 역할

export const isMenuShowState = atom({
    key: "isMenuShow",
    default: false
});

export const isListViewOptionState = atom({
    key: "isListViewOption",
    default: false
});