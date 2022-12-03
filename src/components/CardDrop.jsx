import { useAtom } from "jotai";
import { useState } from "react";
import cardsAtom from "../atoms/cards.atom";
import Card from "./Card";

export default () => {
    const [card, setCard] = useState(null);
    const [cards, updateCards] = useAtom(cardsAtom);
    
    const drop = (e) => {
        console.log(e);
        let cardId = parseInt(e.dataTransfer.getData("id"));
        let found = cards.find(card => cardId === card.id);
        setCard(found);
    }
    
    return (
        <div className="card-drop-zone">
            <div onDragOver={(e) => {e.preventDefault()}} onDrop={drop} className="card-zone">
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