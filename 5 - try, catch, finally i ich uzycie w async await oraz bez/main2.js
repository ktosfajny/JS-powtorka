const getUser2 = () => {
  // throw "user not found"; // try catch nie powstalo specjalnie dla async await -> po prostu async await korzysta z tego ale try catch samo w sobie istnailo już dużo wczesniej np żeby obsłużyć błędy które robi się przez throw
  throw new Error("asd"); // można wyrzucić zwykły string (jak wyżej) albo obiekt typu error
  return 2; // return się już tutaj nie wykona bo samo throw działa jako return więc nic co jest niżej nie wykona się
};

// teraz poniższa funkcja nie musi być asynchroniczna bo przeciez getUSer nie zwraca promisa no ale już zostawny jak jest
const someAsyncfunction2 = async () => {
  try {
    const user = await getUser2(); // tu próbujesz odebrać jakieś dane ale się nie uda bo będzie throw
    console.log.og("udało mi się odebrać");
    console.log(user);
  } catch (error) {
    // przejdziesz tutaj bo jest throw więc odiberzesz tutaj ten error
    if (error instanceof Error) {
      console.log("jednak jest błąd: ");
      console.log(error.message); // message to taki properties obiektów typu Error
      console.log(error);
    } else {
      console.log("something went wrong");
    }
  } finally {
    console.log("wykonam się nie zaleznie czy jest błąd czy nie");
  }
};

someAsyncfunction2();
