import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { clickedBtnQty, deleteFillingFood } from '../redux/actions/BaiTapBurgerActions';

class BaiTapBurgerMenu extends Component {

    renderFillingFoodsTable = (foodsArr) => {
        let result = {
            tableJsx: [],
            total: 0
        };
        result.tableJsx = foodsArr.map((food, index) => {
            result.total += food.amount * food.price;
            return (
                <tr key={index}>
                    <td>{food.name}</td>
                    <td>
                        <button className="btn btn-sm btn-success" onClick={() => {this.props.dispatch(clickedBtnQty(food, true))}}>+</button>
                        <span> {food.amount} </span>
                        <button className="btn btn-sm btn-danger" onClick={() => {this.props.dispatch(clickedBtnQty(food, false))}}>-</button>
                    </td>
                    <td className="text-right pr-5">$ {food.price.toLocaleString()}</td>
                    <td className="text-right pr-5">$ {(food.amount * food.price).toLocaleString()}</td>
                    <td><button className="btn btn-sm btn-outline-warning" onClick={() => {this.props.dispatch(deleteFillingFood(food.name.toLowerCase()))}}>Xóa</button></td>
                </tr>
                );
        });
        return result;
    }

    render() {
        return (
            <Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Menu</th>
                            <th>Số lượng</th>
                            <th className="text-center">Đơn giá</th>
                            <th className="text-center">Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderFillingFoodsTable(this.props.fillingFoods).tableJsx}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2"></td>
                            <th className="text-center text-primary">Tổng cộng</th>
                            <th className="text-right text-primary pr-5">$ {this.renderFillingFoodsTable(this.props.fillingFoods).total}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fillingFoods: state.BaiTapBurgerReducer.fillingFoods
    }
}

export default connect(mapStateToProps)(BaiTapBurgerMenu);