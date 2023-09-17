import React from 'react';
import styled from 'styled-components';
import CustomButton from './UI/CustomButton.jsx';
import { StyledText700 } from './UI/CustomText.js';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #FF0000;
    color: white;
    position: sticky;
    top: 0;
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

const Header = ({updateList}) => {
    return (
        <>
            <StyledHeader>
                <StyledTitle>
                    <StyledText700>
                        Тарифы MTS
                    </StyledText700>
                </StyledTitle>
                <CustomButton onClick={() => updateList()} text={'Парсить'}></CustomButton>
                <CustomButton onClick={() => toMainSite()} text={'Перейти на сайт'}></CustomButton>
            </StyledHeader>
        </>
    );
};


export default Header;