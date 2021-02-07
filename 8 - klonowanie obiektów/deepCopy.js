// Deep Copy na przykładzie JSON.stringify() i JSON.parse()  ---> niestety nie skopiuje np funkcji więc odpada
const John = {
  name: "John",
  skill: {
    name: "piano",
    level: 4,
  },
  sayHi: () => console.log("Hey"),
};

const Bob = JSON.parse(JSON.stringify(John)); //przypisanie do Bob najpierw zestringowanej wartosci obiektu John a nastepnie przerobienie jej z powrotem na obiekt spowoduje że nie zostaną przypisane żadne referencje ani nic tylko faktycznie zostanie utworzona kopia deep copy i nie będzie żadnych referencji czyli tak jak chcemy. Działa to dlatego że JSON (bo na niego przepisuje funkcja JSON.stringify() ) nie jest w stanie przechowywać żadnej referencji więc wszystkie referencje zostaną usunięte. Niestety JSON nie jest w stanie przechowywać funkcji lub np obiektu Date więc ją wytnie i obiekt Bob nie będzie miał tych funkcji

Bob.skill.name = "guitar"; // teraz zmiana w tym obiekcie skill nie spowoduje zmiany w oryginalnym obiekcie John

console.log(John); // ma funkcję sayHi
console.log(Bob); // nie ma funkcji sayHi ponieważ JSON nie jest w stanie przechowywać funkcji

// np spread operator czyli const Bob = {...John} skopiowałby funkcje ale znowu trzeba by ręcznie nadpisywać zagnieżdżone obiekty

// -----------------------------------------------------------

// ABY ZROBIĆ PEŁNĄ KOPIĘ RAZEM Z REFERENCJAMI ITD Z POMOCĄ PRZYCHODZĄ NP ZEWNĘTRZE BIBLIOTEKI:
// import {cloneDeep}  from 'lodash';

// const Bob = cloneDeep(John) // funkcja cloneDeep z biblioteki lodash kopiuje pełne obiekty również w głąd, ja zakomentowałem tutaj no bo jej nie mam wiec żeby błędu nei sypało
