const human = {
  sayName() {
    console.log(`my name is ${this.name}`);
  },
  // tym defaultJob będzie pierwszy z argumentów z tablicy czyli 'pracownik a tym second będzie 'asd'
  sayFullName(defaultJob, second) {
    console.log(
      `my name is: ${this.name} ${this.job ? this.job : defaultJob}, w firmie`
    );
  },
};

const people = [
  {
    name: "Bogdan",
    job: "prezes",
  },
  {
    name: "Eryk",
  },
];

// apply też wywoła od razu funkcję

people.forEach((item) => {
  human.sayFullName.apply(item, ["pracownik", "asd"]); // apply jako 1 parametr przyjmuje nowy kontekst (tak samo jak call) ale można też dodać "zastosować" (dlatego apply) coś dodatkowego i tym drugim argumentem jest tablica argumentów które zostaną przekazane do tej funkcji sayFullName jako jej argumenty
});

// apply różni się od call tym że w apply można przekazać dodatkowe parametry
