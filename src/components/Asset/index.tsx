import Link from "next/link";
import { AssetHeader, Container } from "./styles";

export default function Asset({type, quantity, value}) {
    return (
        <Container>
            <AssetHeader>
                <h2>{type}</h2>
                <h3>{quantity}</h3>
            </AssetHeader>
            <h3>{value}</h3>
            <Link href={""}>ver mais</Link>
        </Container>
    )
}
