import { useState, useEffect } from "react";

import Input from "components/Input/Input";

import { PageWrapper, FormElementControl, Card, Text } from "./styles";
import Button from "components/Button/Button";

function Lesson_09() {
  const [inputValue, setInputValue] = useState<string>("");
  const [catFact, setCatFact] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const onChangeValue = (event: any) => {
    // event.target.value - то что ввел пользватель в input
    setInputValue(event.target.value);
  };

  //Lifecycle methods
  // 1. Mounting
  // useEffect:
  // 1 аргумент - функция, которая должна выполняться в определенный жизненный цикл компонента
  // 2 аргумент - массив зависимостей, с помощью него мы можем отловить и орпеделить жизненный цикл компонента
  // Если мы прокидываем пустой массив в качестве 2 аргумента, то мы отлавливаем 1 фазу жизненного цикла - MOUNTING
  //   useEffect(() => {
  //     console.log("MOUNTING!!!");
  //   }, []);

  //2. UPDATING
  //   useEffect(() => {
  //     console.log("UPDATING!!!");
  //   }, [inputValue]);

  // 3. Unmounting
  //   useEffect(() => {
  //     return () => {
  //       console.log("Unmounting");
  //     };
  //   }, []);

  const getCatFact = async () => {
    setCatFact(undefined);
    setError(undefined);

    const response = await fetch("https://catfact.ninja/fact", {
      method: "GET",
    });

    const result = await response.json();

    if (response.ok) {
      setCatFact(result.fact);
      // Тут выполняем действия, когда нам пришли ожидаемые данные(не ошибка!)
    } else {
      setError("Some Network Error!!!");
      // Тут выполняем действия, когда нам пришла ошибка
    }
  };

  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <PageWrapper>
      {/* <input
        value={inputValue}
        onChange={onChangeValue}
        placeholder="Enter item"
      /> */}
      <FormElementControl>
        <Input
          value={inputValue}
          onChange={onChangeValue}
          name="search"
          label="Search"
          placeholder="Enter something"
          id="input-search"
        />
      </FormElementControl>
      <Card>
        <Button name="Get Cat Fact" onClick={getCatFact} />
        {catFact && <Text>{catFact}</Text>}
        {error && <Text>{error}</Text>}
      </Card>
    </PageWrapper>
  );
}

export default Lesson_09;
