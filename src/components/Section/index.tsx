import { ReactNode } from "react";
import { Container, Content, Icon, SectionHeader, Title, Total } from "./styles";

interface MyAssetsProps {
    title: string,
    total?: number,
    children: ReactNode
}

export default function MyAssets({title, total, children}: MyAssetsProps) {
    return (
        <Container>
            <SectionHeader>
                <Icon />
                <span>
                    <Title>{title}</Title>
                </span>
                <Total>{total}</Total>
            </SectionHeader>
            <Content>
                {children}
            </Content>
        </Container>
    )
}
