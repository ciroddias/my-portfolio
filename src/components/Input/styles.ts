import styled from 'styled-components'

export const Text = styled.input`
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    border: none;
    margin: 1rem;
    padding: 1rem;
    border-radius: .5rem;
`
export const Submit = styled.input`
    background: ${props => props.theme.colors.emphasis};
`
