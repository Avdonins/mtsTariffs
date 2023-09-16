import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    ${'' /* width: ${props => props.width > 740 ? '740px' : '100vw'}; */}
    display: flex;
    flex-direction: column;
    ${'' /* width: 100vw;
    height: 100vh; */}
`

const AppWrapper = (props) => {
    return (
        <>
            <StyledWrapper {...props} />
        </>
    );
};

export default AppWrapper;