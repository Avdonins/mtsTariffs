import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: grid;
    ${'' /* grid-template-columns: ${props => props.isloading === 'true' ? '1fr' : '1fr 1fr'}; */}
    grid-template-columns: ${props => props.isloading ? '1fr' : '1fr 1fr'};
    grid-gap: .4rem;
    margin: 1rem 1rem;
    flex: 1 0 auto;
`

const Wrapper = (props) => {
    return (
        <>
          <StyledWrapper {...props}/>
        </>
    );
};

export default Wrapper;