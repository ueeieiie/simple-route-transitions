// React's
import React from 'react';

// Styled-Components
import styled from 'styled-components';

const Box = styled.div`
    background-color: ${props => props.bgcolor};
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Red = (props) => {
    return (
        <Box bgcolor="red">
            <h1>Red</h1>
        </Box>
    );
}

export const Green = (props) => {
    return (
        <Box bgcolor="green">
            <h1>Red</h1>
        </Box>
    );
}

export const Blue = (props) => {
    return (
        <Box bgcolor="blue">
            <h1>Red</h1>
        </Box>
    );
}