import React, { Component } from 'react';
import BaiTapBurgerBanh from './BaiTapBurgerBanh';
import BaiTapBurgerMenu from './BaiTapBurgerMenu';
import BaiTapBurgerOptionButtons from './BaiTapBurgerOptionButtons';
import './cssBurger.css';

export default class BaiTapBurger extends Component {
    render() {
        return (
            <div className="container py-3">
                <div className="row">
                    <div className="col-6">
                        <div className="burger__left--title">
                            <h1>Bài tập burger cybersoft</h1>
                            <p>Bánh burger của bạn</p>
                        </div>
                        <BaiTapBurgerBanh />
                    </div>
                    <div className="col-6">
                        <div className="burger__left--title pt-3">
                            <p>Chọn thành phần burger</p>
                            <BaiTapBurgerOptionButtons />
                        </div>
                        <BaiTapBurgerMenu />
                    </div>
                </div>
            </div>
        )
    }
}
