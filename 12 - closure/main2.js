const user = (name = "", age) => {
  let userName = name;
  let userAge = age;

  function showName() {
    console.log(
      `Cześć ${userName}, ${
        userAge >= 18 ? "możesz kupić piwo" : "nie możesz kupić piwa"
      }`
    );
  }

  return showName;
};

const mieszko = user("Mieszko", 20);
const jagienka = user("jagienka", 17);

mieszko(); // będziemy wyświetlać "Mieszko możesz kupić piwo"
jagienka(); // będziemy wyświetylać "jagienka nie możesz kupić piwa"
