import React from 'react';
import styled from 'styled-components';

import InternetLogo from '../assets/internet.svg';
import MobileLogo from '../assets/mobile.svg';
import WifiLogo from '../assets/wifi.svg';
import TvLogo from '../assets/tv.svg';
import GiftLogo from '../assets/gift.svg';
import { StyledText200, StyledText400, StyledText700, LineThroughText} from './UI/CustomText.js';

const StyledWrapperItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5rem;
    border: 1px solid black;
`
const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
const WrapperBenefits = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
`
const FlexWrapper = styled.div`
    display: flex;
`

const Item = ({ item }) => {
    return (
        <StyledWrapperItem>
            <StyledHeader>
                <StyledText700>{item.name}</StyledText700>
                {item.isFirstMonth && <StyledText700>Первый месяц бесплатно!</StyledText700>}
            </StyledHeader>
            <StyledText200>{item.description}</StyledText200>
            {item.benefits &&
                <WrapperBenefits>
                    {item.benefits.internet &&
                        <FlexWrapper>
                            <img src={InternetLogo} alt='Inetrnet Logo' />
                            <StyledText400>{item.benefits.internet}</StyledText400>
                        </FlexWrapper>
                    }
                    {item.benefits.mobile &&
                        <FlexWrapper>
                            <img src={MobileLogo} alt='Mobile Logo' />
                            <StyledText400>{item.benefits.mobile}</StyledText400>
                        </FlexWrapper>
                    }
                    {item.benefits.wifi &&
                        <FlexWrapper>
                            <img src={WifiLogo} alt='Wifi Logo' />
                            <StyledText400>{item.benefits.wifi}</StyledText400>
                        </FlexWrapper>
                    }
                    {item.benefits.tv &&
                        <FlexWrapper>
                            <img src={TvLogo} alt='Tv Logo' />
                            <StyledText400>{item.benefits.tv}</StyledText400>
                        </FlexWrapper>
                    }
                    {item.otherBenefits &&
                        <FlexWrapper>
                            <img src={GiftLogo} alt='Gift Logo' width='24px' />
                            <StyledText400>{item.otherBenefits}</StyledText400>
                        </FlexWrapper>
                    }
                </WrapperBenefits>
            }
            <FlexWrapper>
                <StyledText400>{item.price} руб/мес</StyledText400>
                {item.salePrice && <LineThroughText>{item.salePrice} руб/мес</LineThroughText>}
            </FlexWrapper>
            {item.priceAnnotation && <StyledText200>{item.priceAnnotation}</StyledText200>}
        </StyledWrapperItem>
    );
};

export default Item;