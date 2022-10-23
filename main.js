import "./src/components/styles/settings/colors.css";
// import "/home/marco_bruno/matching-game/matching-game/src/components/styles/settings/colors.css";
// import "./src/styles/generic/reset.css";
import "/home/marco_bruno/matching-game/matching-game/src/components/styles/elements/base.css";

import CardGame from "./src/components/CardGame";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
