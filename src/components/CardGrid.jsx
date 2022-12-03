import { useState } from "react";
import CardDrop from "./CardDrop";
import BorderCardDrop from "./BorderCardDrop";

const generateCardZones = () => {
    let cardZones = [];
    for (let i = 0; i < 16; i++) {
        if (i === 0) {
            cardZones.push({type: "EMPTY"});
            continue;
        }

        if (i < 4 || i % 4 === 0) {
            cardZones.push({type: "BORDER_ZONE", card: null});
        } else {
            cardZones.push({type: "DROP_ZONE", card: null});
        }
    }

    return cardZones;
};


export default () => {
    const [cardZones, updateCardZones] = useState(generateCardZones());

    return (
        <div className="card-grid">
            {cardZones.map((cardZone, index) => {
                if (cardZone.type === "BORDER_ZONE") {
                    return <BorderCardDrop cardZone={cardZone.card} />
                } else if (cardZone.type === "DROP_ZONE") {
                    return <CardDrop cardZone={cardZone.card} />
                } else {
                    return <div></div>
                }
            })}
        </div>
    )
}