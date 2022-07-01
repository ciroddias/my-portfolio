import { useState } from "react";
import { Container, Total } from "./styles";
import formatter from '../../utils/formatter'

export default function Patrimony() {
    const [ total, setTotal ] = useState(34633.25)

    return(
        <Container>
            <h3>Patrimônio</h3>
            <Total>{formatter.format(total)}</Total>
        </Container>
    )
}
