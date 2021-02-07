// jeżeli funkcja jest napisana bezpośednio w w obiekcie - this będzie odnosić się do tego obiektu na którym wykonamy funkcję
// jeżeli zwkła funkcja A jest w innej zwykłej funkcji B - this w A odnosić się będzie do obiektu globalnego  np window w przeglądrce

const person = {
  name: "tom",
  showName: function () {
    console.log(this.name);
  },
};

const dog = {
  name: "spike",
  showName: person.showName, // pod propertis showName przypiszemy funkcję person.showName
  showNameWithArrowFunction: () => {
    // to zwróci obiekt globalny czyli w przeglądarce window bo ()=> nie tworzy kontekstu
    console.log(this);
  },
};

dog.showName(); // wypisze tak na prawdę 'spike' a nie tom dlatego że została tam przypisana funkcja z tym this ale chodzi o to że wiązanie this nastepuje W MOMENCIE WYWOŁANIA a a nie tam gdzie jest zadeklarowane czyli w wywołując dog.showName() wywołujesz to show Name ALE NA OBIEKIE DOG i do do obiektu dog zostanie utworozny kontekst

dog.showNameWithArrowFunction();
