import {combineReducers} from 'redux';
import BaiTapBurgerReducer from './BaiTapBurgerReducer';
import UserManagerReducer from './UserManagerReducer';

const rootReducer = combineReducers({
    BaiTapBurgerReducer,
    UserManagerReducer
});

export default rootReducer;