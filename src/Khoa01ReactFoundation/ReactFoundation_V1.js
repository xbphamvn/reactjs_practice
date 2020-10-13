import React, { Component } from 'react';
import calStyle from './ReactFoundationStyle.module.css';
import keysData from '../Data/CalculatorData.json';

export default class ReactFoundation extends Component {

    state = {
        resultObj: {
            input: 'Waiting...',
            result: '0'
        }
    };

    commaCount = 0;
    zeroCount = 0;
    showCommaImmediately = 0;
    countFunction = 0;
    // showZeroAfterComma = '0';
    clickedKeysArr = [0];
    firstArgument = 0;
    secondArgument = 0;
    totalStoreArr = [0];
    showingFirstArgument = 'Inputing...';

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
        let newInput = null;
        if (item.value === "0" && this.clickedKeysArr.length === 0) {
            this.zeroCount++;
        }
        console.log(this.zeroCount);
        // if (this.clickedKeysArr.length === 0 && item.value > 0) {
            if (item.value === "." && this.commaCount < 1) {
                this.commaCount++;
                this.clickedKeysArr.push(item.value);
            } else if (item.value !== "." && this.commaCount <= 1) {
                this.clickedKeysArr.push(item.value);
            }
        // }
        this.clickedKeysArr.map((item) => {
            return newInput += item;
        });
        console.log(newInput);
        let newResObj = {};
        if (this.commaCount < 1) {
            newResObj = { input: this.showingFirstArgument, result: Number(newInput) };
        } else {
            if (this.showCommaImmediately < 1) {
                this.showCommaImmediately++;
                newResObj = { input: this.showingFirstArgument, result: Number(newInput) + '.' };
            } else {
                newResObj = { input: this.showingFirstArgument, result: Number(newInput) };
            }
        }
        this.totalStoreArr.push(Number(newInput));
        
        this.setState({ resultObj: newResObj }, () => {
            if (this.countFunction < 1) {
                this.countFunction++;
                this.firstArgument = Number(newInput);
            } else {
                this.countFunction = 0;
                this.secondArgument = Number(newInput);
            }
        });
    };

    clickedMathKey = (item) => {
        this.totalStoreArr.push(item.value);
        this.showingFirstArgument = this.firstArgument + this.secondArgument + ' ' + item.value;
        let newResObj = { input: this.showingFirstArgument, result: '0' };
        this.setState({ resultObj: newResObj }, () => {
            this.commaCount = 0;
            this.showCommaImmediately = 0;
            this.clickedKeysArr = [0];
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
                            <p className="text-right mb-1">{this.state.resultObj.input}</p>
                            <h4 className="text-right mb-0">{this.state.resultObj.result}</h4>
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
