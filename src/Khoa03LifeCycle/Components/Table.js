import styled from 'styled-components';

export const Table = styled.table`
    width: 99%;
    margin: 1rem auto;
    color: ${props => {return props.theme.labelSmall}};
    position: relative;
    min-height: 100px;
`
export const Thead = styled.thead`
    display: table-header-group;
    vertical-align: middle;
`

export const Tbody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    &:empty:after {
        content: 'Empty! Register a new user soon!';
        position: absolute;
        top: 45px;
        left: 30%;
        font-size: 24px;
        font-weight: bold;
    }
`
export const Tr = styled.tr``;

export const Td = styled.td`
    padding: 0 .7rem;
    vertical-align: middle;
    border-top: 1px solid #dee2e6;
`


export const Th = styled.th`
    padding: 0.1rem .75rem;
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
`

