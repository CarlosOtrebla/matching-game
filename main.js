import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"

import ScoreBoard from './src/objetcs/ScoreBoard';
import BoardGame from './src/objetcs/BoardGame';

const $root = document.querySelector("#root")

$root.insertAdjacentHTML(
    "beforeend",
`
    ${ScoreBoard()}
    ${BoardGame(6)}
`
)