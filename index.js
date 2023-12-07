let points = winsAndLosses(73, 21);
let heroLevel = "";

function winsAndLosses(wins,losses){
  let scoreResult = wins - losses;
  return scoreResult;
}

switch(true){

  case points <= 10:
  heroLevel = "Ferro";
  break;

  case points >= 11 && points <= 20:
  heroLevel = "Bronze";
  break;

  case points >= 21 && points <= 50:
  heroLevel = "Prata";
  break;

  case points >= 51 && points <= 80:
  heroLevel = "Ouro";
  break;

  case points >= 81 && points <= 90:
  heroLevel = "Diamante";
  break;

  case points >= 91 && points <= 100:
  heroLevel = "Lendário";
  break;

  case points >= 101:
  heroLevel = "Imortal";
  break;
  
}

console.log(`O Herói tem  saldo de ${points} vitórias e está no nível de ${heroLevel}`);