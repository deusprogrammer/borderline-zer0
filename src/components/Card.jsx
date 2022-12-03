export default ({card, removeCard}) => {
    return (
        <div 
            className={`card ${card && card.type === 'card' ? 'playable' : 'zone'}`} 
            draggable={true}
            onDragStart={(e) => {
                console.log("ID: " + card.id);
                e.dataTransfer.setData("id", card.id);
            }}
            onDragEnd={() => {
                removeCard(card.id);
            }}
        >
            <div className="number horizontal top">{card.attacks[0]}</div>
            <div className="number vertical right">{card.attacks[1]}</div>
            <div className="number horizontal bottom">{card.attacks[2]}</div>
            <div className="number vertical left">{card.attacks[3]}</div>

            <div className="element">{card.element}</div>
        </div>
    )
}