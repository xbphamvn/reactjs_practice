import { CHANGE_FILLING_FOOD_QTY, CLICK_OPTION_BUTTON, DELETE_FILLING_FOOD } from "../types/BaiTapBurgerTypes"

export const clickedBtnQty = (food, boolean) => {
    return {
        type: CHANGE_FILLING_FOOD_QTY,
        food,
        boolean
    }
}

export const deleteFillingFood = (foodName) => {
    return {
        type: DELETE_FILLING_FOOD,
        foodName
    }
}

export const clickedOptionButton = (foodObj) => {
    return {
        type: CLICK_OPTION_BUTTON,
        foodObj
    }
}