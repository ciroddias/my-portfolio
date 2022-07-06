import styled from "styled-components";

export const Container = styled.div`
    margin: 2rem 0;
    transition: padding 1s ease-out ;
    cursor: pointer;

    :first-child {
        margin-top: 0;
    }

    :last-child {
        margin-bottom: 4rem;
    }

    :hover {
        border-left: solid 5px ${props => props.theme.colors.primary};
        padding-left: 1rem;
    }
`

export const UpperWrapper = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

export const LowerWrapper = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    h4 {
        margin: .5rem;
    }
`
