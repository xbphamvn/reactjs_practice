import styled from 'styled-components';

export const Heading1 = styled.h1`
    font-size:4rem;
    font-weight:300;
    line-height:1.2;
    color: ${props => {return props.theme.color}};
    background-color: ${props => {return props.theme.headingBgColor}};
`;

export const Heading2 = styled.h2`
    font-size:3rem;
    font-weight:300;
    line-height:1.2;
    color: ${props => {return props.theme.color}};
    background-color: ${props => {return props.theme.headingBgColor}};
`;

export const Heading3 = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: .7;
    color: ${props => {return props.theme.color}};
    background-color: ${props => {return props.theme.headingBgColor}};
`;

export const Heading4 = styled.h4`
    font-size:1rem;
    font-weight:300;
    line-height: 1.2;
    color: ${props => {return props.theme.color}};
    background-color: ${props => {return props.theme.headingBgColor}};
`;

export const Heading5 = styled.h5`
    font-size:0.5rem;
    font-weight:300;
    line-height:1.2;
    color: ${props => {return props.theme.color}};
    background-color: ${props => {return props.theme.headingBgColor}};
`;

