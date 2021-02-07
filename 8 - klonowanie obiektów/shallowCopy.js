// w JS są 2 typy wartości: prymitywne (np number, boolean) i złożone (np obiekt i tablica,funkcja (one i tak są obiektem)). Jeśli masz np:
// const a = 23;
// let b = a; // tworzy b które jest równe a
// b = 62; // zmieniamy b
// to zmieniając ten nowy typ prosty b zmieniamy faktycznie tylko b a nie a

// ale obiekty to typy złożone i zadziała to inaczej:

const John = {
  name: "John",
  skill: {
    name: "piano",
    level: 4,
  },
};

// poniższe przypisanie oznacza że Eryk to w istocie inna nazwa dla John i wszelka zmiana na Eryk zmieni też oryginalny ogiekt John
const Eryk = John;

console.log(John);
console.log(Eryk);

console.log("-----------------------");

Eryk.name = "Eryk"; // zmieniamy niby eryka ale przez to że Eryk = John to zmienimy w istocie oryginalny obiekt John -> dzieje się tak dlatego że jeśli wartość jest złożona czyli np obiekt to wtedy prz kopiowaniu eryk = john kopiuje się REFERENCJĘ do tego oryginalnego obiektu a nie jego wartość. Więc jesli na tym nowym obiekcie Eryk zmieni się coś to w istocie zmieni się to dla tej REFERENCJI (która przecież jest tą samą referencją do pamięci którą przypisano oryginalnie do John)

console.log(John);
console.log(Eryk);

console.log("-----------------------");

const Jefferson = { ...John }; // takie przypisanie sprawi że Jefferson stanie się nowym obiektem ale skopiowanym na podstawie John (mimo wszystko skopiuje siętylko wartość 'name' bo skill nadal jest obiektem i nadal przypisze się referencja, wiec trzeba by zrobić tak jak w redux)
// powyższy problem nazywa się Shalow Copy czyli "płytka kopia" bo kopiuje owszem ale tylko bezpośrednie typy proste a jak jest np skill które jest obiektem to dalej skopiuje referencję

Jefferson.name = "Jefferson"; // teraz zmiana nie dotyczy oryginalnego obiektu John a jedynie obiektu Jefferson

console.log(John);
console.log(Jefferson);

console.log("-----------------------");

Jefferson.skill.level = 547; // jak widzimy tutaj zmieniamy niby dla obiektu Jefferson ale jego skill to też obiekt więc też skopiowano REFERENCJĘ do tego obiektu skill a nie jego wartość i zmiana w Jeffersonie nadal spowoduje zmianę w oryginalnm pliku. NAzywa się to Shallow Copy

console.log(John);
console.log(Jefferson);

// ---DEEP COPY -------------------------------------------------------------------------------

const Adam = {
  // to z kolei jest Deep Copy bo skopiuje również w głąd wszystkie dane (tzn sam muszę je nadpisać tak samo jak w redux ale w pliku deepcopy.js pokazuję jak to zautomatyzować)
  ...John,
  skill: {
    name: John.skill.name,
    level: John.skill.level,
  },
};
