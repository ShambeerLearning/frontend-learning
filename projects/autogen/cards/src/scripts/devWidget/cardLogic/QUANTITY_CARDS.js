function createElements() {
    let cards = [];
    for(let i = 10; i > 0; i--) {
        cards.push(i);
    }
    return cards;
}

export const QUANTITY_ELEMENTS = createElements();