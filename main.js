import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"
import BoardGame from './src/objetcs/BoardGame/index'
import PlayerName from "./src/components/PlayerName"



const $root = document.querySelector("#root")


$root.insertAdjacentHTML(
    "beforeend", 
`
${PlayerName("Carlos")}
${PlayerName("Sebastião")}
${BoardGame(6)}
`
)