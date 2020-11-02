import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
    position: relative; 
    margin-bottom: 24px;
    margin-left: 3%;
    width: 46.5%;
`;

const Input = styled.input`
    font-size:18px;
    padding: 10px 10px 5px;
    display: block;
    width:95%;
    border:none;
    border-bottom: 1px solid #757575;
    &:focus {
        outline: none;
    }
    &:valid ~ label, &:focus ~ label, &:disabled ~ label {
        top:-20px;
        font-size:14px;
        color: ${props => props.theme.labelSmall};
    }
`;

const Span = styled.span`
    display:block;
    width: 100%;
    font-size: 12px;
`;

const ErrosSpan = styled(Span)`
    margin-top: 5px;
    font-size: 12px;
    color: ${props => props.theme.errorColor};
`;

const DropdownSpan = styled(Span)`
    color: ${props => props.theme.errorColor};
    position: absolute;
    top: -20px;
    font-size: 1rem;
`;

const Label = styled.label`
    color:#999; 
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
`;

const Dropdown = styled.div`
    width: 43.5%;
    height: 36px;
    margin-top: 0px;
    margin-left: 3%;
    position: relative;
`;

const Select = styled.select`
    width: 100%;
    height: 36px;
    margin-top: 7px;
    font-weight: 400;
    cursor: pointer;
    padding: 5px;
    padding-right: 10px;
    background-color: ${props => props.theme.bgSelectDefault};
    border: 1px solid ${props => props.theme.borderColor};
    color: ${props => props.theme.borderColor};
    /* Adding transition effect */
    transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;
    &:hover {
        color: ${props => props.theme.errorColor};
        background-color: ${props => props.theme.hoverBgSelectDefault};
        border-bottom-color: #DCDCDC;
    }
    &:focus {
        outline: none;
        background-color: ${props => props.theme.focusBgSelectDefault};
        color: ${props => props.theme.errorColor};
    }
`;

export const ThemeSelect = styled(Select)`
    width: 48%;
    color: ${props => props.theme.errorColor};
    background-color: ${props => props.theme.headingBgColor};
    border: 1px solid ${props => props.theme.bgColor};
    &:focus {
        outline: none;
        background-color: ${props => props.theme.focusBgSelectDefault};
        color: ${props => props.theme.bgColor};
    }
`;

export const InputNormal = ({ label, errosWarning,...props }) => (
    <Group>
        <Input {...props} />
        <Label>{label}</Label>
        <ErrosSpan>{errosWarning}</ErrosSpan>
    </Group>
);

export const InputOption = ({ dropTitle, errosWarning, opt1, opt2, opt3, opt4, ...props }) => (
    <Dropdown>
        <DropdownSpan>{dropTitle}</DropdownSpan>
        <Select {...props}>
            <option value={opt1}>{opt1}</option>
            <option value={opt2}>{opt2}</option>
            <option value={opt3}>{opt3}</option>
            <option value={opt4}>{opt4}</option>
        </Select>
        <ErrosSpan>{errosWarning}</ErrosSpan>
    </Dropdown>
);