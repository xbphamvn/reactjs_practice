import React, { Component } from 'react';
import { connect } from 'react-redux';

class BaiTapBurgerBanh extends Component {

    renderFillingFoodsImg = (foodsArr) => {
        let burgerFinalJsx = [];
        burgerFinalJsx = foodsArr.map((food) => {
            let foodJsx = [];
            for (let i = 0; i < food.amount; i++) {
                foodJsx.push((<div key={i} className={food.name.toLowerCase()}></div>));
            }
            return foodJsx;
        });
        return burgerFinalJsx;
    }

    render() {
        return (
            <div>
                <div className="breadTop"></div>
                {this.renderFillingFoodsImg(this.props.fillingFoods)}
                <div className="breadBottom"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fillingFoods: state.BaiTapBurgerReducer.fillingFoods
    }
}

export default connect(mapStateToProps)(BaiTapBurgerBanh);