import './style.css'
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data';

function BoardGame(amountCards) {
     
    const $htmlCardList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = $htmlCardList.join('');

    return/*html*/`
    <section class="board-game">
       ${$htmlCards}      
    </section>
    `
}

export default BoardGame