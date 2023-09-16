import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    transition: .2s linear;
    background: #A63137;

    &:hover {
        box-shadow: #DD0E18	0 0px 0px 40px inset;
        cursor: pointer;
    }
`

const CustomButton = ({onclick, text}) => {
    return (
        <>
          <StyledButton onClick={() => onclick()}>{text}</StyledButton>  
        </>
    );
};

export default CustomButton;