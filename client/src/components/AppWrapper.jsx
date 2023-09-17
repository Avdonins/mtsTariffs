import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const AppWrapper = (props) => {
    return (
        <>
            <StyledWrapper {...props} />
        </>
    );
};

export default AppWrapper;