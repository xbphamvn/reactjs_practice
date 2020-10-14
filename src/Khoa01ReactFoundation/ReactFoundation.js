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
        // ZERO_KEY_MILESTONE_1: 0, //Chưa dùng
        COMMA_KEY: ".",
        COMMA_MILESTONE_1: 0,
        FUNC_MILESTONE_1: 1,
        WAIT_INPUT: " inputting..."
    }

    numKey = {
        commaCount: 0,
        zeroCount: 0,
        noneZeroCount: 0,
        countFunction: 0,
        clickedKeysArr: [],
        argument: 0,
        mathKeyStore: {},
        totalRes: 0,
        storageArr: [],
        showingTopLine: "Inputing..."
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
                        <button type="button" className={calStyle.btn__num} onClick={() => { this.clickedFuncKey(item) }}>{item.value}</button>
                    </div>
                );
            } else {
                return (
                    <div className={calStyle.btn__100h} key={index}>
                        <button type="button" className={calStyle.btn__num} onClick={() => { this.clickedFuncKey(item) }}>{item.value}</button>
                    </div>
                );
            }
        });
    };

    getClickedValue = (item) => {
        let newInput = '';
        //Có thể dùng switch...case để gọn code và tường minh hơn!
        if (item.value !== this.CONST.ZERO_KEY && item.value !== this.CONST.COMMA_KEY) {
            this.numKey.noneZeroCount++;
            this.numKey.clickedKeysArr.push(item.value);
        } else if (item.value === this.CONST.COMMA_KEY && this.numKey.commaCount === this.CONST.COMMA_MILESTONE_1) {
            this.numKey.commaCount++;
            this.numKey.noneZeroCount++;
            this.numKey.clickedKeysArr.push(item.value);
        } else if (item.value === this.CONST.ZERO_KEY) {
            if (this.numKey.zeroCount === 0) {
                this.numKey.zeroCount++;
                this.numKey.clickedKeysArr.push(item.value);
            } else if (this.numKey.noneZeroCount !== 0) {
                this.numKey.clickedKeysArr.push(item.value);
            }
        }
        if (this.numKey.clickedKeysArr[0] === this.CONST.ZERO_KEY && this.numKey.noneZeroCount !== 0 && this.numKey.commaCount === this.CONST.COMMA_MILESTONE_1) {
            this.numKey.clickedKeysArr.splice(0, 1);
        } else if (this.numKey.clickedKeysArr[0] === this.CONST.COMMA_KEY) {
            this.numKey.clickedKeysArr[0] = "0.";
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
            this.numKey.mathKeyStore = { type: item.type, value: item.value };
            this.numKey.totalRes = Number(this.state.resObj.result);
            this.numKey.storageArr.push(this.numKey.totalRes);
        } else {
            this.numKey.argument = Number(this.state.resObj.result);
            switch (this.numKey.mathKeyStore.type) {
                case "summation":
                    if (this.numKey.clickedKeysArr.length >= this.CONST.FUNC_MILESTONE_1) {
                        this.numKey.totalRes += this.numKey.argument;
                        this.numKey.storageArr.push(this.numKey.mathKeyStore.value);
                        this.numKey.storageArr.push(this.numKey.argument);
                        this.numKey.storageArr.push(this.numKey.totalRes);
                    }
                    break;
                case "subtraction":
                    if (this.numKey.clickedKeysArr.length >= this.CONST.FUNC_MILESTONE_1) {
                        this.numKey.totalRes -= this.numKey.argument;
                        this.numKey.storageArr.push(this.numKey.mathKeyStore.value);
                        this.numKey.storageArr.push(this.numKey.argument);
                        this.numKey.storageArr.push(this.numKey.totalRes);
                    }
                    break;
                case "multiplication":
                    if (this.numKey.clickedKeysArr.length >= this.CONST.FUNC_MILESTONE_1) {
                        this.numKey.totalRes *= this.numKey.argument;
                        this.numKey.storageArr.push(this.numKey.mathKeyStore.value);
                        this.numKey.storageArr.push(this.numKey.argument);
                        this.numKey.storageArr.push(this.numKey.totalRes);
                    }
                    break;
                case "division":
                    if (this.numKey.clickedKeysArr.length >= this.CONST.FUNC_MILESTONE_1) {
                        this.numKey.totalRes /= this.numKey.argument;
                        this.numKey.storageArr.push(this.numKey.mathKeyStore.value);
                        this.numKey.storageArr.push(this.numKey.argument);
                        this.numKey.storageArr.push(this.numKey.totalRes);
                    }
                    break;
                default:
                    return alert('Lỗi phần tính toán! Xem lại!'); //Fordeveloper only!
            }
        }
        let topLine = '';
        for (let i = 0; i < this.numKey.storageArr.length - 3; i += 3) {
            topLine += this.numKey.storageArr[i] + this.numKey.storageArr[i + 1] + this.numKey.storageArr[i + 2] + "=" + this.numKey.storageArr[i + 3] + "; ";
        }
        this.numKey.showingTopLine = topLine + this.numKey.totalRes + item.value + this.CONST.WAIT_INPUT;
        let newResObj = {};
        newResObj = { input: this.numKey.showingTopLine, result: this.numKey.totalRes };
        this.setState({ resObj: newResObj }, () => {
            this.numKey.clickedKeysArr = [];
            this.numKey.commaCount = this.CONST.COMMA_MILESTONE_1;
            this.numKey.zeroCount = 0;
            this.numKey.noneZeroCount = 0;
            this.numKey.mathKeyStore = { type: item.type, value: item.value };
        });
    };

    clearCurrentEleFunc = () => {
        let newResObj = {};
        newResObj = { input: this.numKey.showingTopLine, result: '0' };
        this.setState({ resObj: newResObj }, () => {
            this.numKey.clickedKeysArr = [];
        });
    };

    clearAllFunc = () => {
        let newResObj = {};
        newResObj = { input: 'Waiting...', result: '0' };
        this.setState({ resObj: newResObj }, () => {
            this.numKey = {
                commaCount: 0,
                zeroCount: 0,
                noneZeroCount: 0,
                countFunction: 0,
                clickedKeysArr: [],
                argument: 0,
                mathKeyStore: {},
                totalRes: 0,
                storageArr: [],
                showingTopLine: "Inputing..."
            }
        });
    };

    getResultFunc = () => {
        this.numKey.argument = Number(this.state.resObj.result);
        switch (this.numKey.mathKeyStore.type) {
            case "summation":
                if (this.numKey.clickedKeysArr.length >= this.CONST.FUNC_MILESTONE_1) {
                    this.numKey.totalRes += this.numKey.argument;
                }
                break;
            case "subtraction":
                if (this.numKey.clickedKeysArr.length >= this.CONST.FUNC_MILESTONE_1) {
                    this.numKey.totalRes -= this.numKey.argument;
                }
                break;
            case "multiplication":
                if (this.numKey.clickedKeysArr.length >= this.CONST.FUNC_MILESTONE_1) {
                    this.numKey.totalRes *= this.numKey.argument;
                }
                break;
            case "division":
                if (this.numKey.clickedKeysArr.length >= this.CONST.FUNC_MILESTONE_1) {
                    this.numKey.totalRes /= this.numKey.argument;
                }
                break;
            default:
                return alert('Vui lòng chọn phương thức tính toán!');
        }
        this.numKey.showingTopLine = 'Final Result';
        let newResObj = {};
        newResObj = { input: this.numKey.showingTopLine, result: this.numKey.totalRes };
        this.setState({ resObj: newResObj }, () => {
            this.numKey = {
                commaCount: 0,
                zeroCount: 0,
                noneZeroCount: 0,
                countFunction: 0,
                clickedKeysArr: [],
                argument: 0,
                mathKeyStore: {},
                totalRes: 0,
                storageArr: [],
                showingTopLine: "Inputing..."
            }
        });
    };

    clickedFuncKey = (item) => {
        switch (item.type) {
            case "clearEle":
                this.clearCurrentEleFunc();
                break;
            case "clearAll":
                this.clearAllFunc();
                break;
            case "equalSign":
                this.getResultFunc();
                break;
            default:
                break;
        }
    };

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
