import { RE_DO_ALL, TRY_ON_DRESSES } from "../types/DressingRoomTypes";

const initialState = {
    choosenList: {
        background: 'url(./images/background/backgroundOne.jpg)',
    }
}

const DressingRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRY_ON_DRESSES:
            return { ...state, choosenList: { ...state.choosenList, [action.paneItem.type]: action.paneItem.imgSrc_png } };

        case RE_DO_ALL:
            return { ...state, choosenList: {} };

        default:
            return { ...state };
    }
}

export default DressingRoomReducer;