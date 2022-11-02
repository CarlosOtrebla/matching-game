import PlayerName from "../../components/PlayerName"
import "./style.css"
function ScoreBoard(){
    return /*html*/`
    <header class="score-board">
        ${PlayerName("Carlos")}
        ${PlayerName("Sebastião")}

    </header>
    `;
}

export default ScoreBoard;