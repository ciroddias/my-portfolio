import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const FormWrapper = styled.div`
    background: ${props => props.theme.colors.primary};
    width: 100%;
    max-width: 25rem;
    padding: 2rem;
    margin: auto;

    h1 {
        margin: 1rem 0 3rem;
    }
`

export const Form = styled.form`
    width: 100%;

    span {
        color: ${props => props.theme.colors.red};
    }

    div {
        margin: 1rem 0;
    }
`
