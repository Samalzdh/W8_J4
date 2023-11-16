let n = prompt("Combien d'etage veux-tu ?");
function pyramid(n) {
for (let i = 1; i <= n ; i++){
  let space = ' '.repeat(n - i);
  let hashtags = '#'.repeat(i);
console.log(space + hashtags);
alert(space + hashtags);
}
}

pyramid(n);


