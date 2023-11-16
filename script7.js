let input = prompt("tu veux quoi ? ")

if (input.endsWith("?")) {
  console.log("Ouais ouais...");
  alert("Ouais ouais...");
} else if (input === input.toUpperCase()) {
  console.log("CRIEEEEE PAAAAAS");
  alert("CRIEEEEE PAAAAAS");
} else if (input.toLowerCase().includes("fortnite")) {
  console.log("Go tilted ?");
  alert("Go tilted?");
} else if (!input) {
  console.log("T'es mort ?");
  alert("T'esmort?");
} else {
  console.log("Oktamer");
  alert("Oktamer");
}
