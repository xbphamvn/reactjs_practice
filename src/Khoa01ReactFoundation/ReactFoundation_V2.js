import React, { Component } from 'react';
import calStyle from './ReactFoundationStyle.module.css';
import keysData from '../Data/CalculatorData.json';

export default class ReactFoundation extends Component {

    state = {
        resObj: {
            input: 'Waiting...',
            result: '0'
        }
    };

    CONST = {
        ZERO_KEY: "0",
        ZERO_KEY_MILESTONE_1: 0,
        COMMA_KEY: ".",
        COMMA_MILESTONE_1: 0,
        COMMA_MILESTONE_2: 1,
        FUNC_MILESTONE_1: 1,
        INPUTTING: "inputing..."
    }

    numKey = {
        commaCount: 0,
        zeroCount: 0,
        countFunction: 0,
        clickedKeysArr: [],
        argument: 0,
        mathKeyStore: '',
        totalRes: 0,
        storageArr: [],
        showingTopLine: "Inputing...",
    }

    renderKeyBoardLeft = (keysArr) => {
        return keysArr.map((item, index) => {
            if (item.classWidth === "btn__20w" && item.type === "number") {
                return (
                    <div className={calStyle.btn__20w} key={index}>
                        <button type="button" className={calStyle.btn__num} onClick={() => { this.getClickedValue(item) }}>{item.value}</button>
                    </div>
                );
            } else if (item.classWidth === "btn__40w" && item.type === "number") {
                return (
                    <div className={calStyle.btn__40w} key={index}>
                        <button type="button" className={calStyle.btn__num} onClick={() => { this.getClickedValue(item) }}>{item.value}</button>
                    </div>
                );
            } else {
                return (
                    <div className={calStyle.btn__20w} key={index}>
                        <button type="button" className={calStyle.btn__num} onClick={() => { this.clickedMathKey(item) }}>{item.value}</button>
                    </div>
                );
            }
        });
    };

    renderKeyBoardRight = (keysArr) => {
        return keysArr.map((item, index) => {
            if (item.classHeight === "btn__50h") {
                return (
                    <div className={calStyle.btn__50h} key={index}>
                        <button type="button" className={calStyle.btn__num} onClick={() => { }}>{item.value}</button>
                    </div>
                );
            } else {
                return (
                    <div className={calStyle.btn__100h} key={index}>
                        <button type="button" className={calStyle.btn__num} onClick={() => { }}>{item.value}</button>
                    </div>
                );
            }
        });
    };

    getClickedValue = (item) => {
        let newInput = '';
        //Có thể dùng switch...case để gọn code và tường minh hơn!
        if (item.value !== this.CONST.ZERO_KEY && item.value !== this.CONST.COMMA_KEY) {
            this.numKey.clickedKeysArr.push(item.value);
        } else if (item.value === this.CONST.COMMA_KEY && this.numKey.commaCount === this.CONST.COMMA_MILESTONE_1) {
            this.numKey.commaCount++;
            if (this.numKey.clickedKeysArr.length < this.CONST.COMMA_MILESTONE_2 && this.numKey.zeroCount === this.CONST.ZERO_KEY_MILESTONE_1) {
                this.numKey.clickedKeysArr.push('0');
                this.numKey.zeroCount++;
                this.numKey.clickedKeysArr.push(item.value);
            } else {
                this.numKey.clickedKeysArr.push(item.value);
            }
        } else if (item.value === this.CONST.ZERO_KEY) {
            if (this.numKey.clickedKeysArr.length === this.CONST.ZERO_KEY_MILESTONE_1 && this.numKey.zeroCount === this.CONST.ZERO_KEY_MILESTONE_1) {
                this.numKey.zeroCount++;
                this.numKey.clickedKeysArr.push('0');
            } else if (this.numKey.clickedKeysArr.length !== this.CONST.ZERO_KEY_MILESTONE_1) {
                this.numKey.clickedKeysArr.push(item.value);
            }
        }
        this.numKey.clickedKeysArr.map((item) => {
            return newInput += item;
        });
        let newResObj = {};
        newResObj = { input: this.numKey.showingTopLine, result: newInput };
        this.setState({ resObj: newResObj });
    };

    clickedMathKey = (item) => {
        if (this.numKey.countFunction < this.CONST.FUNC_MILESTONE_1) {
            this.numKey.countFunction++;
            this.numKey.mathKeyStore = item.type;
            this.numKey.totalRes = Number(this.state.resObj.result);
        } else {
            this.numKey.argument = Number(this.state.resObj.result);
            switch (this.numKey.mathKeyStore) {
                case "summation":
                    this.numKey.totalRes += this.numKey.argument;
                    break;
                case "subtraction":
                    this.numKey.totalRes -= this.numKey.argument;
                    break;
                case "multiplication":
                    this.numKey.totalRes *= this.numKey.argument;
                    break;
                case "division":
                    if(this.numKey.argument === 0) {
                        console.log(123);
                    }
                    this.numKey.totalRes /= this.numKey.argument;
                    break;
                default:
                    console.log('Lỗi phần tính toán!');
                    break;
            }
        }
        this.numKey.showingTopLine = this.numKey.totalRes + item.value + this.CONST.INPUTTING;
        //For advance storage
        // if (this.numKey.countFunction < this.CONST.FUNC_MILESTONE_1) {
        //     this.numKey.storageArr.push({ agru1: null, mathKey: item.value, agru2: this.numKey.argument });
        // } else {
        //     this.numKey.storageArr.push({ agru1: this.numKey.totalRes, mathKey: item.value, agru2: this.numKey.argument });
        // }
        // console.log(this.numKey.storageArr);
        //End for advance storage!
        let newResObj = {};
        newResObj = { input: this.numKey.showingTopLine, result: 0 };
        this.setState({ resObj: newResObj }, () => {
            this.numKey.clickedKeysArr = [];
            this.numKey.commaCount = this.CONST.COMMA_MILESTONE_1;
            this.numKey.zeroCount = this.CONST.ZERO_KEY_MILESTONE_1;
            this.numKey.mathKeyStore = item.type;
        });
    }

    render() {
        return (
            <div className="container p-5 bg-light">
                <div className={"card w-50 mx-auto " + calStyle.calculator}>
                    <div className={"card-header " + calStyle.card__header}>
                        <i className="fa fa-calculator"></i>
                        <span> Calculator - Bài tập nộp khóa 01</span>
                    </div>
                    <div className="card-body">
                        <div className={"mx-1 " + calStyle.result}>
                            <p className="text-right mb-1">{this.state.resObj.input}</p>
                            <h4 className="text-right mb-0">{this.state.resObj.result}</h4>
                        </div>
                        <div className="row mt-2 mx-0">
                            <div className={calStyle.btn__left}>
                                {this.renderKeyBoardLeft(keysData.btnLeft)}
                            </div>
                            <div className={calStyle.btn__right}>
                                {this.renderKeyBoardRight(keysData.btnRight)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
