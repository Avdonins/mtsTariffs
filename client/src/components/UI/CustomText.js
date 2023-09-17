import styled from "styled-components"

export const StyledText200 = styled.p`
    font-family: 'Oswald', sans-serif;
    font-size: 1.2rem;
    padding: 0 15px;
    font-weight: 200;
`
export const StyledText400 = styled.p`
    font-family: 'Oswald', sans-serif;
    font-size: 1.4rem;
    padding: 0 15px;
    font-weight: 400;
`
export const StyledText700 = styled.p`
    font-family: 'Oswald', sans-serif;
    font-size: 1.6rem;
    padding: 0 15px;
    font-weight: 700;
`
export const LineThroughText = styled(StyledText400)`
    text-decoration: line-through;
    color: red;
`