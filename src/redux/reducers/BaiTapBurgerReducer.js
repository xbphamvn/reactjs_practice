import { CHANGE_FILLING_FOOD_QTY, CLICK_OPTION_BUTTON } from "../types/BaiTapBurgerTypes";
import { DELETE_FILLING_FOOD } from "../types/BaiTapBurgerTypes";

const defaultReducer = {
    fillingFoods: []
}

const BaiTapBurgerReducer = (state = defaultReducer, action) => {
    switch (action.type) {
        case CHANGE_FILLING_FOOD_QTY:
            let foodUpdate = state.fillingFoods.find(item => item.name === action.food.name);
            if (action.boolean) {
                foodUpdate.amount++;
            } else {
                if (foodUpdate.amount <= 1) {
                    alert('Số lượng tối thiểu là 1!');
                } else {
                    foodUpdate.amount--;
                }
            }
            state.fillingFoods = [...state.fillingFoods];
            return { ...state };

        case DELETE_FILLING_FOOD:
            let deleteIndex = state.fillingFoods.find(item => item.name === action.foodName);
            if (deleteIndex !== -1) {
                state.fillingFoods.splice(deleteIndex, 1);
            }
            state.fillingFoods = [...state.fillingFoods];
            return { ...state };

        case CLICK_OPTION_BUTTON:
            let newObjIndex = state.fillingFoods.findIndex(item => item.name === action.foodObj.name);
            if (newObjIndex === -1) {
                state.fillingFoods.push(action.foodObj);
            }
            state.fillingFoods = [...state.fillingFoods];
        return {...state};
        default:
            return { ...state };
    }
}

export default BaiTapBurgerReducer;