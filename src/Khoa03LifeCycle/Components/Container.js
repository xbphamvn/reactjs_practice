import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.txtColor};
    border: 1px solid ${props => props.theme.borderColor};
    box-sizing: border-box;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    margin: 10px 15px;
`;