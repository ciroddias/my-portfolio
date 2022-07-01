import styled from "styled-components";

export const Container = styled.section`
    padding: ${props => props.theme.wrapperPadding};
    background: ${props => props.theme.colors.cards};
    width: ${props => props.theme.wrapperMobileWidth};
    margin: ${props => props.theme.wrapperMargin};
    border-radius: 2rem;
`

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 1rem;

    span {
        display: flex;
    }
`

export const Icon = styled.img``

export const Title = styled.h3`
`

export const Total = styled.h3``

export const Content = styled.div``
