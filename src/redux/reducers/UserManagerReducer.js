import { themesArr } from '../../Khoa03LifeCycle/Themes/ThemesManager';
import { change_theme, delete_btn, edit_btn, register_btn, update_btn } from '../types/UserManagerTypes';

const defaultReducer = {
    currentTheme: themesArr[0].themeObj,
    userListArr: [],
    editUser: {},
    disabledStatus: {
        userName: { status: '', cssAttr: '' },
        fullName: { status: '', cssAttr: '' },
        password: { status: '', cssAttr: '' },
        email: { status: '', cssAttr: '' },
        phoneNum: { status: '', cssAttr: '' },
        btnRegister: { status: '', cssAttr: '' },
        btnUpdate: { status: 'disabled', cssAttr: 'not-allowed' },
        btnEdit: { status: '', cssAttr: '' },
        btnDelete: { status: '', cssAttr: '' }
    },
}

const UserManagerReducer = (state = defaultReducer, action) => {
    switch (action.type) {

        case change_theme:
            return { ...state, currentTheme: themesArr[--action.themeId].themeObj };

        case register_btn:
            return { ...state, userListArr: [...state.userListArr, action.userData] };

        case update_btn:
            let updateObj = action.inputData;
            let disabledUpdate = state.disabledStatus;
            let updateIndex = state.userListArr.findIndex(user => user.userName === updateObj.userName);
            if (updateIndex !== -1) {
                state.userListArr[updateIndex] = updateObj;
                disabledUpdate['btnRegister'] = { status: '', cssAttr: '' };
                disabledUpdate['userName'] = { status: '', cssAttr: '' };
                disabledUpdate['btnEdit'] = { status: '', cssAttr: '' };
                disabledUpdate['btnDelete'] = { status: '', cssAttr: '' };
                disabledUpdate['btnUpdate'] = { status: 'disabled', cssAttr: 'not-allowed' };
                for (let key in state.editUser) {
                    state.editUser[key] = '';
                }
        }
            return { ...state, userListArr: [...state.userListArr] };

        case edit_btn:
            let disabledEdit = state.disabledStatus;
            disabledEdit['btnRegister'] = { status: 'disabled', cssAttr: 'not-allowed' };
            disabledEdit['btnEdit'] = { status: 'disabled', cssAttr: 'not-allowed' };
            disabledEdit['btnDelete'] = { status: 'disabled', cssAttr: 'not-allowed' };
            disabledEdit['userName'] = { status: 'disabled', cssAttr: 'not-allowed' };
            disabledEdit['btnUpdate'] = { status: '', cssAttr: '' };
            return { ...state, editUser: state.userListArr.find(user => user.userName === action.userName) };

        case delete_btn:
            return { ...state, userListArr: state.userListArr.filter(user => user.userName !== action.userName) };

        default:
            return { ...state };
    }
}

export default UserManagerReducer;