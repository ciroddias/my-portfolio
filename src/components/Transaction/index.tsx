import { Container, LowerWrapper, Total, UpperWrapper } from "./styles";
import formatter from "../../utils/formatter";

export default function Transaction({quantity, ticker, value, total, date}) {
    return(
        <Container>
            <UpperWrapper>
                <h2>{quantity} {ticker}</h2>
                <h4>{date}</h4>
            </UpperWrapper>
            <LowerWrapper>
                <h3>{formatter.format(value)}</h3>
                <Total>
                    <h4>total: </h4>
                    <h2>{formatter.format(total)}</h2>
                </Total>
            </LowerWrapper>
        </Container>
    )
}
