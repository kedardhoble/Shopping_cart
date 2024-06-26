import { StoreItem } from "../Components/storeItems"
import storeItems from "../Data/items.json"
import { Col, Row} from "react-bootstrap"

export function Store() {
    return (
    <>
        <h1>Store</h1>
        <Row md={2} lg={3} xs={1} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItem {...item} />
                </Col>
            ))}
        </Row>
    </>
    )
}