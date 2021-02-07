greet(); // użycie funkcji tradycyjnej przed jej zadeklarowaniem - tę można
greet2(); // użycie przypisania funkcji (tradycyjnej) do zmiennej przed jej zadeklarowaniem - tej NIE MOŻNA
greet3(); // użycie funkcji strzałkowej przed jej deklaracją - NIE MOŻNA

function greet() {
  // funkcja zapisana w ten sposób podlega hoistingowi i zostaje przeniesiona na górę i przez to można jej użyć przed jej dekalracą
  console.log("Helllloo!");
}

const greet2 = function () {
  // tak zapisanej funkcji nie można już użyc przed jej inicjalizacją
  console.log("Helllo!");
};

const greet3 = () => {
  console.log("hello");
};
