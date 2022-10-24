import "./src/components/styles/settings/colors.css"

import "./src/components/styles/generic/reset.css"
import "./src/components/styles/elements/base.css"

import CardGame from "./src/components/CardGame"
import PlayerScore from "./src/components/PlayerScore"

const $root = document.querySelector("#root")
const $htmlCardGame = CardGame()
const $htmlPlayerScore = PlayerScore()

$root.insertAdjacentHTML("beforeend", $htmlCardGame)
$root.insertAdjacentHTML("beforeend", $htmlCardGame)
$root.insertAdjacentHTML("beforeend", $htmlCardGame)
$root.insertAdjacentHTML("beforeend", $htmlCardGame)
$root.insertAdjacentHTML("beforeend", $htmlCardGame)
$root.insertAdjacentHTML("beforeend", $htmlCardGame)
$root.insertAdjacentHTML("beforeend", $htmlPlayerScore)

