import styled from "styled-components";

export const Container = styled.header`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`
export const ProfilePicture = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 50%;
    overflow: hidden;
`
