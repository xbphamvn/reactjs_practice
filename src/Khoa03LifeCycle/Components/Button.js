import styled from 'styled-components';


export const Button = styled.button`
    apperance:none;
    display: inline-block;
    font-weight: 400;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .5s ease-in-out,background-color .5s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;

export const ButtonRegister = styled(Button)`
    color: ${props => {return props.theme.btnTxtColor}};
    background-color: ${props => {return props.theme.btnRegisterBg}};
    border-color: ${props => {return props.theme.btnRegisterBg}};
    &:hover {
        color: ${props => {return props.theme.btnTxtHoverColor}};
        background-color: ${props => {return props.theme.btnRegisterBgHover}};
        border-color: ${props => {return props.theme.btnRegisterBgBorder}};
    };
`;

export const ButtonUpdate = styled(Button)`
    color: ${props => {return props.theme.btnTxtColor}};
    background-color: ${props => {return props.theme.btnUpdateBg}};
    border-color: ${props => {return props.theme.btnUpdateBg}};
    &:hover {
        color: ${props => {return props.theme.btnTxtHoverColor}};
        background-color: ${props => {return props.theme.btnUpdateBgHover}};
        border-color: ${props => {return props.theme.btnUpdateBgBorder}};
    };
`;

export const ButtonDelete = styled(Button)`
    color: ${props => {return props.theme.btnDeleteTxt}};
    background-color: ${props => {return props.theme.btnDelete}};
    border-color: ${props => {return props.theme.btnDelete}};
    &:hover {
        color: ${props => {return props.theme.btnTxtHoverColor}};
        background-color: #c82333;
        border-color: #bd2130;
    };
`;