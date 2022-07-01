import { Container, ProfilePicture } from "./styles";


export default function Header() {
    return (
        <Container>
            <h2>Welcome, User</h2>
            <ProfilePicture>
                {/* <img src="" alt="profile picture" /> */}
            </ProfilePicture>
        </Container>
    )
}
