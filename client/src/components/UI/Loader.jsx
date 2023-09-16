import styled from "styled-components";

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 5%;
`

const StyledLoader = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px dashed red;
    animation: rotate 3s infinite linear;

    @keyframes rotate {
    from {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(180deg) scale(1.4);
    }
    to {
        transform: rotate(360deg) scale(1);
    }
}
`
const Loader = () => {
    return (
        <LoaderContainer>
            <StyledLoader>

            </StyledLoader>
        </LoaderContainer>
    );
};

export default Loader;