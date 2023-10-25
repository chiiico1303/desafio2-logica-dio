//variaveis
let victory = Math.floor(Math.random() * 101)
let defeat = 0
let rank = result(victory, defeat) // victory, defeat

//função
function result(victory, defeat) {
  return victory - defeat
}

//if, else if, else
if (rank <= 10 ) {
  rank = "Ferro"
} else if (((rank) => 11) && rank <= 20) {
  rank = "Bronze"
} else if (((rank) => 21) && rank <= 50) {
  rank = "Prata"
} else if (((rank) => 51) && rank <= 80) {
  rank = "Ouro"
} else if (((rank) => 81) && rank <= 90) {
  rank = "Diamante"
} else if (((rank) => 91) && rank <= 100) {
  rank = "Lendario"
} else {
  rank = "Imortal"
}

console.log(
  `O Herói tem de saldo de ${victory} vitória(s) e está no nível ${rank}`
)


