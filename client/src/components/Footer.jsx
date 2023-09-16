import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: #FF0000;
    color: white;
`

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <p>Made by Avdonins</p>
            </StyledFooter>
        </>
    );
};

export default Footer;