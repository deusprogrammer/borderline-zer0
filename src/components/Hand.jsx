import { useAtom } from "jotai";
import { useState } from "react";
import cardsAtom from "../atoms/cards.atom";
import Card from "./Card";

export default () => {
    const [cards, getCards] = useAtom(cardsAtom);
    const [hand, updateHand] = useState(cards.slice(0, 5));

    const drop = (e) => {
        console.log("DROP");
        let cardId = parseInt(e.dataTransfer.getData("id"));
        let found = cards.find(card => cardId === card.id);
        updateHand([...hand, found]);
    }

    const remove = (cardId) => {
        console.log("REMOVE");
        let newHand = hand.filter(card => cardId !== card.id);
        updateHand(newHand);
    }

    return (
        <div 
            className="hand"
            onDragOver={(e) => {e.preventDefault()}}
            onDrop={drop}
        >
            { hand.map(card => 
                <Card 
                    card={card}
                    removeCard={remove} />
            )}
        </div>
    )
}