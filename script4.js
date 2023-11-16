const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("liste des mecs et meufs nées dans les année 70 :");
  let seven = entrepreneurs.filter(function(entrepreneurs) {
    return entrepreneurs.year >= 1970 && entrepreneurs.year <= 1980;});
  console.log(seven)

  console.log("leurs nom : ");
  blaze = entrepreneurs.forEach(function(entrepreneurs) {
    console.log( entrepreneurs.first + " " + entrepreneurs.last );});
  
  let today = 2023;
  console.log("nous somme en"+today)
  entrepreneurs.forEach(function(entrepreneurs){
  
  let age = today - entrepreneurs.year;
  console.log(entrepreneurs.first + " " + entrepreneurs.last+ " " + "a aujourd'hui " + age + "ans");});

  console.log(entrepreneurs.sort((a,b) => a.last.localeCompare(b.last)));
