import styled from "styled-components";

export const Form = styled.form`
    background: ${props => props.theme.colors.primary};

    span {
        color: ${props => props.theme.colors.red};
    }
`
