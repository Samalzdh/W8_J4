let num = prompt("entre un chiffre");
function factorielle(num) {
  if (num === 0 || num === 1) {
      return 1;
  } else {
      return num * factorielle(num - 1);
  }
}
alert(`le factorielle de ${num} est ${factorielle(num)}`);

console.log(`le factorielle de ${num} est ${factorielle(num)}`);
