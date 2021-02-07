const human = {
  name: "tom",
  sayName() {
    console.log(`my name is ${this.name}`);
  },
};

// -------
const personA = {
  name: "Artur",
};

// ------ .call() ---------------
//  call służy do zmiany kontekstu i wywołania od razu funkcji
// mamy obiekt human który ma funkcję sayName. Mamy też obiekt personA i chcielibyśmy wyświetlić imię obiektu personA. Normalnie powinniśmy zatem napisać taką funkcję w tym personA ale przecież to bez sensu bo już taka funkcja wypisująca imie została zadeklarowana w obiekcie human. Po co za tem ją powielać? O wiele lepiej jest odwołać się do referencji tej funkcji (czyli napisać: human.sayName   <--- bez nawiasów() wywołujących) i na tej referencji do funkcji wywołać funkcję .call() do której przekazujemy nowy kontekst

human.sayName.call(personA); // wyświetli imię 'artur' czyli z obiektu personA bo zmieniliśmy kontekst tej funkcji sayName z obiektu human na obiekt personA
// inaczej mówiąc powyższy zapis oznacza: "użyj funkcji sayName z obiektu human ale jako kontekst użyj obiektu personA"

// --------------------------------------------------
// można też wyświetlać w tablicy i użyć tego jako callback funkcji .map()

const people = [
  {
    name: "Bogdan",
  },
  {
    name: "Eryk",
  },
];

people.map((item) => {
  human.sayName.call(item);
});
