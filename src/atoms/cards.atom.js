import { atom } from "jotai";

const elements = [
    "FIRE", 
    "ICE", 
    "EARTH", 
    "LIGHTNING", 
    "WATER", 
    "LIGHT", 
    "DARK"];

const generateCards = (n) => {
    let hand = [];
    for (let i = 0; i < n; i++) {
        let element = elements[Math.floor(Math.random() * elements.length)];
        hand.push({
            id: i,
            type: "card", 
            attacks: [
                Math.floor(Math.random() * 5), 
                Math.floor(Math.random() * 5), 
                Math.floor(Math.random() * 5), 
                Math.floor(Math.random() * 5)], 
            element
            });
    }
    return hand;
}

let cards = generateCards(60);

export default atom(cards);