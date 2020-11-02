import { change_theme, register_btn, update_btn, edit_btn, delete_btn } from '../types/UserManagerTypes';

export const changeThemeAction = (themeId) => ({
    type: change_theme,
    themeId
});

export const registerBtnAction = (userData) => ({
    type: register_btn,
    userData
});

export const updateBtnAction = (inputData) => ({
    type: update_btn,
    inputData
})

export const editBtnAction = (userName) => ({
    type: edit_btn,
    userName
})

export const deleteBtnAction = (userName) => ({
    type: delete_btn,
    userName
});