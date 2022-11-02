import PlayerName from "../../components/PlayerName";

function ScoreBoard(){
    return /*html*/`
    <header class="score-board">
        ${PlayerName("Carlos")}
        ${PlayerName("Sebastião")}

    </header>
    `;
}

export default ScoreBoard;