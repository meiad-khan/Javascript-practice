
//finding the best player according to score.

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

//accumulator - সঞ্চয়কারী

const bestPlayer = players.reduce((acc, player) => {
  // console.log(acc, player);
  if (acc.score > player.score) return acc;
  return player;
},players[0]) //here we can set initial acc as empty object or the first player.

console.log(bestPlayer);