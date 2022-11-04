import PlayerName from "../../components/PlayerName"
import VsPlayer from "../../components/VsPlayer"
import "./style.css"
import PlayerScore from '../../components/PlayerScore'
function ScoreBoard(){
    return /*html*/`
    <header class="score-board">
        ${PlayerName("Carlos")}
        ${PlayerScore()}
        ${VsPlayer()}
        ${PlayerScore()}
        ${PlayerName("Solrac")}
    </header>
    `;
}

export default ScoreBoard;