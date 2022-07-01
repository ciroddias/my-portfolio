import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 1.5rem 0;
    text-align: left;
    transition: padding 1s ease-out ;

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
export const AssetHeader = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
