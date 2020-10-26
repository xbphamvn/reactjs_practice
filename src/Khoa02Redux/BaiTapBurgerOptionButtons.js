import React, { Component } from 'react';
import {connect} from 'react-redux';
import { clickedOptionButton } from '../redux/actions/BaiTapBurgerActions';

class BaiTapBurgerOptionButtons extends Component {
    render() {
        return (
            <div className="mb-2">
                <button className="col-2 mr-2 btn btn-sm btn-outline-warning optionButton" onClick={() => {this.props.clickOptionButton({ name: "Salad", amount: 1, price: 10, index: 0 })}}>
                    <p className="m-0" style={{fontSize: 20}}>Salad</p>
                    <div className="salad"></div>
                </button>
                <button className="col-2 mr-2 btn btn-sm btn-outline-info optionButton" onClick={() => {this.props.clickOptionButton({ name: "Cheese", amount: 1, price: 20, index: 1 })}}>
                    <p className="m-0 text-warning" style={{fontSize: 20}}>Cheese</p>
                    <div className="cheese__menu"></div>
                </button>
                <button className="col-2 mr-2 btn btn-sm btn-outline-warning optionButton" onClick={() => {this.props.clickOptionButton({ name: "Beef", amount: 1, price: 55, index: 2 })}}>
                    <p className="m-0 text-dark" style={{fontSize: 20}}>Beef</p>
                    <div className="beef__menu"></div>
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickOptionButton: (foodObj) => {
            dispatch(clickedOptionButton(foodObj));
        }
    }
}

export default connect (null, mapDispatchToProps)(BaiTapBurgerOptionButtons);