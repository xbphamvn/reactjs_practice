import {combineReducers} from 'redux';
import BaiTapBurgerReducer from './BaiTapBurgerReducer';
import UserManagerReducer from './UserManagerReducer';
import DressingRoomReducer from './DressingRoomReducer';

const rootReducer = combineReducers({
    BaiTapBurgerReducer,
    UserManagerReducer,
    DressingRoomReducer
});

export default rootReducer;