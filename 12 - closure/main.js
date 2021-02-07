// closure to mechanizm który pozwala na dostęp w pewnej funkcji do danych które zostały zdefiniowane w innej funkcji nawet jeśli ta inna funkcja już nie istnieje

// jak myślimy o closure to zwykle mamy na mysli funkcję zwracaną z innej funkcji !!!!!

const add = (start = 0) => {
  // tę funkcję towrzymy głównie po to aby w jej zakresie napisać number co sprawi że nie będzie ona mogła byc nadpisana nigdzie indziej jak w tym add bo nie jest dostepna globalnie
  let number = start;

  return () => {
    // zwracany funkcję która skorzysta z tej zmiennej number
    number++;
    document.body.textContent = `aktualny stan licznika kliknięć to: ${number}`;
  };
};

const counter = add(0); // do zmiennej counter przypisujemy wywołaną funkcję add() która w istocie zwróci funkcę zwiększającą counter i wyświetlającą go w body

document.addEventListener("click", counter);
