import { useState, useEffect } from "react";

import Button from "components/Button/Button";

import { Homework09Wrapper, Text, Card, ContainerJokes } from "./styles";

function Homework_09() {
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";

  // ПРИМЕР КАК ДЕЛАТЬ БЕЗ async await - ТАК ДЕЛАТЬ НЕ НУЖНО - ЭТО ПРОСТО ПРИМЕР ДЛЯ ВАШЕГО ПОНИМАНИЯ РАБОТЫ ПРОМИСОВ!!!
  // const getJokes = () => {
  //   // fetch всегда возвращает Promise обьект
  //   const response = fetch(JOKE_URL);
  //   console.log(response);

  //   response
  //     // Когда у промиса статус fulfilled(пришел успешный ответ) вызывется блок then
  //     .then((result) => {
  //       console.log(result);
  //       const data = result.json();

  //       data
  //         .then((jokeData) => {
  //           if (result.ok) {
  //             setJoke(`${jokeData.setup} ${jokeData.punchline}`);
  //           } else {
  //             setError("Error during request");
  //           }
  //         })
  //         .catch((error) => {
  //           setError("Error during request");
  //         });
  //     })
  //     // Когда у промиса статус rejected(пришла ошибка) вызывется блок catch
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const getJokes = async () => {
    // response - обьект, в котором лежит информация оь ответе: status, ok и т.д
    const response = await fetch(JOKE_URL);

    // result - это либо ошибка, либо успешно пришедшие данные
    const result = await response.json();

    if (response.ok) {
      // Если response.ok === true, то выполняем обработку успешно пршедших данных с сервера
      setJoke(`${result.setup} ${result.punchline}`);
    } else {
      // Если response.ok === false, то выполняем обработку ошибки пришедшей с сервера с сервера
      setError("Error during request");
    }
  };

  // Никогда не удаляте 2 аргумент у useEffect()
  // Если его удалить, то будет бесконечный вызов 1 аргумента: функции callback
  useEffect(() => {
    getJokes();
  }, []);

  return (
    <Homework09Wrapper>
      <Card>
        <ContainerJokes>
          {joke && <Text>{joke}</Text>}
          {error && <Text>{error}</Text>}
        </ContainerJokes>
        <Button name="Get new joke" onClick={getJokes} />
      </Card>
    </Homework09Wrapper>
  );
}

export default Homework_09;
