import Link from "next/link";
import { AssetHeader, Container } from "./styles";

export default function Asset({type, quantity, value, href}) {
    return (
        <Link href={href}>
            <Container>
                    <AssetHeader>
                        <h2>{type}</h2>
                        <h3>{quantity}</h3>
                    </AssetHeader>
                <h3>{value}</h3>
            </Container>
        </Link>
    )
}
