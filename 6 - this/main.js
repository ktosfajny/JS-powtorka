// jeżeli funkcja jest napisana bezpośednio w w obiekcie/klasie - this będzie odnosić się do tego obiektu na którym wykonamy funkcję
// jeżeli zwkła funkcja A jest w innej zwykłej funkcji B - this w A odnosić się będzie do obiektu globalnego  np window w przeglądrce

const person = {
  name: "tom",
  showName: function () {
    // tala funckcja zadekalrowana jako function(){} została utworzona w obiekcie. I przy WYWOŁYWANIU (zobacz niżej) tej funkcji zostanie ona wywołana na obiekcie person, przejmie jego kontekst (bo function(){} ) przejmuje kontekst czyli obiekt person i wyświetli 'name' tego obiektu a że jest nim 'tom'  to faktycznie to zadziała
    console.log(this.name);
  },
  showNameShort() {
    console.log(this.name); // zadziała tak samo jak showName bo to po prostu skrócony zapis showName
  },
  showNameWithArrowInside() {
    const show = () => {
      // to również wyświetli 'tom' poponinieiważ funkcja strzałkowa nie tworzy kontekstu tylko przejmuje go z zakresu wyżej a wyżej jest już zwykła funkcja która przecież tworzy kontekst i będzie nim ten obiekt person
      console.log(`${this.name}`);
    };
    show();
  },
  showNormalFunctionInsideNormalFunction: function () {
    const logName = function () {
      // to z kolei znowu NIE ZADZIAŁA bo ta wewnętrza funkcja utworzy kontekst (bo zwykłą funkcja tworzy kontekst) i przypis  ze go do tego na czym / gdzie zostaje wykonana czyli w innej funkcji a przecież ta inna funkcja nie ma czegoś takiego jak name bo to funkcja a nie obiekt, wypisze więc empty string czy tam undefined (funkcja strzałkowa zadziałała by bo ona przejmuje kontekst więc przejmie kontekst tej funkcji z długą nazwą)
      console.log(this.name);
    };
    logName();
  },
  address: {
    city: "warsaw",
    street: "zlota",
    showAddres() {
      console.log(`${this.city}`); // to wypisze city czyli warsaw bo aby dostać się do tej funkcji to trzeba person.address.showAddres() czyli kontekstem jest nie cały person a ten obiekt address (zobacz ponizęj)
    },
    showAddresArrowF: () => {
      // to wypisze undefined ponieważ arrow funciton nie twrozy kontekstu tylko przejmuje z zakresu wyżej a wyżej jest obiekt globalny
      console.log(`${this.city}`);
    },
  },
};

person.showName(); // wypisze faktycznie name ponieważ this zostanie przypisany w momencie wywołania a wywołujemy to na obiekcie person i person faktycznie na name -> dlatego też wypisze 'tom' (oraz dltago że przypisujemy tam function(){} które przejmuje kontekst, np ()=> nie przejmuje kontekstu więc wypisałoby pusty string)

person.address.showAddres(); // wypisze 'warsaw' bo jak widać wywoływane jest na obiekcie address więc to on będzie kontekstem przy wywołaniu. Trzeba ciągle pamiętać ze wypisze to faktycznie 'warsaw' również dlatego że jest to zwykła funkcja a nie arrow function

person.address.showAddresArrowF();
