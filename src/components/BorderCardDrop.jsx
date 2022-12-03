import { useAtom } from "jotai";
import { useState } from "react";
import cardsAtom from "../atoms/cards.atom";
import Card from "./Card";

export default () => {
    const [card, setCard] = useState(null);
    const [cards, updateCards] = useAtom(cardsAtom);

    const drop = (e) => {
        let cardId = e.dataTransfer.getData("id");
        console.log("CARD ID: " + cardId);
        console.table(cards);
        let found = cards.find(card => cardId = card.id);
        setCard(found);
    }

    return (
        <div className="border-card-zone">
            <div
                className="card-zone" 
                onDragOver={(e) => {e.preventDefault()}} 
                onDrop={drop} 
            >
                {card ?
                    <Card 
                        card={card}
                        removeCard={() => {setCard(null)}}  
                    /> : null 
                }
            </div>
        </div>
    )
}