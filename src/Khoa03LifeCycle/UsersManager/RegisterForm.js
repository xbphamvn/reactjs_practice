import React, { Component, Fragment } from 'react';
import { InputNormal, InputOption } from '../Components/InputForm';
import { ButtonRegister, ButtonUpdate } from '../Components/Button';
import formFields from '../../Data/RegisterForm.json';
import { registerBtnAction, updateBtnAction } from '../../redux/actions/UserManagerActions';
import { connect } from 'react-redux';

class RegisterForm extends Component {

    state = {
        fields: {
            userName: '',
            fullName: '',
            password: '',
            email: '',
            phoneNum: '',
            userType: ''
        },
        errors: {
            userName: '',
            fullName: '',
            password: '',
            email: '',
            phoneNum: '',
            userType: ''
        }
    }

    emptyFields = {
        userName: '',
        fullName: '',
        password: '',
        email: '',
        phoneNum: '',
        userType: ''
    }

    handleOnChange = (e) => {
        let { name, value } = e.target;
        let updateFields = { ...this.state.fields, [name]: value };
        let updateErros = { ...this.state.errors };
        this.checkFieldsValidation(name, value, updateErros);
        this.setState({
            fields: updateFields,
            errors: updateErros
        });
    }

    checkUserNameValidation = (name, value, updateErros, userListArr) => {
        if (name === "userName") {
            let checkUserName = userListArr.findIndex(user => user.userName.toLowerCase() === value.toLowerCase());
            if (checkUserName !== -1) {
                updateErros[name] = "*" + name + " is already exits!";
            }
        }
    }

    checkEmailValidation = (name, value, disabled, updateErros, userListArr) => {
        if (name === "email") {
            const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regEx.test(value)) {
                updateErros[name] = "*" + name + " is invalid!";
            }
            let checkEmail = userListArr.findIndex(user => user.email === value);
            if (checkEmail !== -1 && !disabled) {
                updateErros[name] = "*" + name + " is already exits!";
            }
        }
    }

    checkFieldsValidation = (name, value, updateErros) => {
        let { userListArr, disabledStatus } = this.props;
        let disabled = disabledStatus['userName'].status;

        if (value.trim() === '') {
            updateErros[name] = "*" + name + " is required!";
        } else {
            updateErros[name] = "";
        }
        this.checkUserNameValidation(name, value, updateErros, userListArr);
        this.checkEmailValidation(name, value, disabled, updateErros, userListArr);
        if (value === "- chọn loại -") {
            updateErros[name] = "*" + name + " is invalid!";
        }
    }

    checkInputDataValidation = (inputObj) => {
        let { fields, errors } = inputObj;
        for (let key in fields) {
            if (fields[key] === '') {
                alert(`Input value of ${key} is invalid!`);
                return false;
            }
        }
        for (let key in errors) {
            if (errors[key] !== '') {
                alert(`Input value of ${key} is invalid!`);
                return false;
            }
        }
        return true;
    }

    renderFormFields = () => {
        return formFields.map((field, index) => {
            let { label, name, type, opt } = field;
            let disableObj = this.props.disabledStatus;
            if (field.opt === null) {
                return (<InputNormal disabled={disableObj[name].status} style={{ cursor: disableObj[name].cssAttr }} value={this.state.fields[name]} onChange={this.handleOnChange} key={index} name={name} label={label} type={type} required errosWarning={this.state.errors[name]} />);
            } else {
                return (<InputOption value={this.state.fields[name]} onChange={this.handleOnChange} key={index} name={name} required dropTitle={label} opt1={opt[0]} opt2={opt[1]} opt3={opt[2]} opt4={opt[3]} errosWarning={this.state.errors[name]} />);
            }
        });
    }

    render() {
        let { btnRegister, btnUpdate } = this.props.disabledStatus;
        return (
            <Fragment>
                <form className="row">
                    {this.renderFormFields()}
                </form>
                <ButtonRegister disabled={btnRegister.status} style={{ cursor: btnRegister.cssAttr }} className="mb-3 ml-4" name="btnRegister" onClick={() => {
                    let flag = this.checkInputDataValidation(this.state);
                    if (flag) {
                        this.props.dispatch(registerBtnAction(this.state.fields));
                        this.setState({ fields: this.emptyFields });
                    }
                }}>Đăng ký</ButtonRegister>
                <ButtonUpdate disabled={btnUpdate.status} style={{ cursor: btnUpdate.cssAttr }} className="mb-3 ml-2" name="btnUpdate" onClick={() => {
                    let flag = this.checkInputDataValidation(this.state);
                    if (flag) {
                        let updateState = { ...this.state.fields };
                        this.props.dispatch(updateBtnAction(updateState));
                        this.setState({ fields: this.emptyFields });
                    }
                }}>Cập nhật</ButtonUpdate>
            </Fragment>
        )
    }

    componentDidUpdate(prevProps) {
        if (prevProps.editUser.userName !== this.props.editUser.userName) {
            this.setState({
                fields: this.props.editUser
            });
        }
    }
}

const mapStateToProps = state => ({
    userListArr: state.UserManagerReducer.userListArr,
    editUser: state.UserManagerReducer.editUser,
    disabledStatus: state.UserManagerReducer.disabledStatus
});

export default connect(mapStateToProps)(RegisterForm);