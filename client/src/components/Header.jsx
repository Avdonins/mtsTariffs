import React from 'react';
import styled from 'styled-components';
import CustomButton from './UI/CustomButton.jsx';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #FF0000;
    color: white;
`

const StyledTitle = styled.h1`
  font-size: 25px;
  font-weight: 500;
`;

const toMainSite = () => {
    window.open(
        'https://moskva.mts.ru/personal/mobilnaya-svyaz/tarifi/vse-tarifi/mobile-tv-inet',
        '_blank'
    );
}

const Header = () => {
    return (
        <>
            <StyledHeader>
                <StyledTitle>MTS тарифы</StyledTitle>
                <CustomButton onclick={() => toMainSite()} text={'Перейти на сайт'}></CustomButton>
            </StyledHeader>
        </>
    );
};


export default Header;