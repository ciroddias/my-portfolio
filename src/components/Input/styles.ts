import styled from 'styled-components'

export const Text = styled.input`
    background: none;
    width: 100%;
    display: block;
    border: none;
    border-bottom: solid 2px ${props => props.theme.colors.title};
    color: ${props => props.theme.colors.text};;
    margin: auto;
    padding: .2rem 0;
    outline: none;
    transition: border-color 200ms ease-in;

    :hover {
        border-color: ${props => props.theme.colors.text};
    }

    :focus {
        border-color: ${props => props.theme.colors.emphasis};
    }
`
export const Submit = styled.input`
    width: 100%;
    display: block;
    background: ${props => props.theme.colors.text};
    margin: auto;
    border: none;
    padding: 1rem;
    border-radius: .5rem;
    color: ${props => props.theme.colors.primary};
    margin: 2rem 0;
    transition: background-color 200ms ease-in;

    :hover {
        background-color: ${props => props.theme.colors.emphasis};
        color: ${props => props.theme.colors.cards};
    }
`
