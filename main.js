import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"
import BoardGame from './src/objetcs/BoardGame/index'
import ScoreBoard from './src/objetcs/ScoreBoard/index';



const $root = document.querySelector("#root")


$root.insertAdjacentHTML(
    "beforeend", 
`
${ScoreBoard()}
${BoardGame(6)}
`
)