import "./style.css"

function ArrowDown(currentPlayer=2){
    return/* html */`
        <img class="arrow-down"
        data-currentPlayer = ${currentPlayer}
        src="images/ArrowDown.png" 
        alt="Ícone de uma seta para baixo" />
    `
}

export default ArrowDown