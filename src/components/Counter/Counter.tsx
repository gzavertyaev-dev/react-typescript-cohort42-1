// import { useState } from "react";

import Button from "components/Button/Button";

import { CounterProps } from "./types";
import "./styles.css";

// !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props
function Counter({ count, onMinus, onPlus }: CounterProps) {
  // const [count, setCount] = useState<number>(0);
  // 1. count - это само сотояние(state), при его изменении обновляется компонент
  // 2. setCount - это функция(setState), которая изменяет сотояние(state). Является единственным способом изменения состояния
  // 3. useState - ф-я хук(вспомогательные функции из библиотеки React для работы и манипуляции компонентами). Функция, которая
  // возвращает массив из 2 элементов: 1 эл - это состояние, а 2 - Й setState
  // const onPlus = () => {
  //   setCount((prevValue: number) => {
  //     return prevValue + 1;
  //   });
  // };

  // const onMinus = () => {
  //   setCount((prevValue: number) => {
  //     return prevValue - 1;
  //   });
  // };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
