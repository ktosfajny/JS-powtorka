const human = {
  sayName() {
    console.log(`my name is ${this.name}`);
  },
  // tym defaultJob będzie pierwszy z argumentów z tablicy czyli 'pracownik a tym second będzie 'asd', third to będzie 'trzeci argument'
  sayFullName(defaultJob, second, third) {
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

people.forEach((item) => {
  const newFun = human.sayFullName.bind(item, "dev", "asd", "3 argument");
  newFun();
});

// bind od apply różni się tym że w bind dodatkowe argumenty przekazywane są jako kolejne argumenty a w apply jest tylko 1 argument dodatkowy który jest tablicą dodatkowych argumentów ORAZ PRZY BIND FUNKCJA NIE WYKONA SIĘ OD RAZU !!! bind tylko łączy to wszystko tę konfigurację metody, nowego kontekstu i argumentów i przypisuje to do zmiennej

// trzeba pamietac że te metody call apply i bind pozwalają na ZMIANĘ KONTEKSTU ale żeby to działało to muszą być normalne funkcje które tworzą ten kontekst no bo jak użyjesz () => to nie zadziała ponieważ () => wgl nie tworzy kontekstu wiec nie da się go zmienić
