import Link from "next/link";
import { client } from "../../utils/client";
import { CardContainer, CardContentArea, CardContentText, CardFigureArea } from "./style";

const Card = ({product, client_name, id}) => {
    return(
        <Link href={`/sale-detail/${id}`} >
            <CardContainer>
                <CardFigureArea>
                    <h2>{product}</h2>
                </CardFigureArea>
                <CardContentArea>
                    <CardContentText>
                        <p className="text-xl font-bold">{client_name}</p>
                    </CardContentText>
                </CardContentArea>
            </CardContainer>
        </Link>
    )
}

export default Card;