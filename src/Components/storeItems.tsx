import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../Utilities/formatCurrency"
type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
}

export function StoreItem({id, name, price, imgUrl}:
    StoreItemProps) {
        const quantity = 0
        return (
        <Card className="h-100">
            <Card.Img 
            variant="top" 
            src={imgUrl}
            height="200px"
            style={{ objectFit: "cover"}} 
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                    </Card.Title>
                    <div className="mt-auto">
                        { quantity === 0 ? 
                            <Button className="w-100">+ Add To Cart</Button> :
                            <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                                <div className="d-flex align-items-center justify-content" style={{gap: ".5rem"}}
                                >
                                    Hi
                                    </div>
                            </div>
                            // Bye
                        }
                    </div>
            </Card.Body>
        </Card>
    )}