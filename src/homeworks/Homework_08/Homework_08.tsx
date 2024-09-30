import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper, ButtonControl } from "./styles";

function Homework_08() {
  return (
    <PageWrapper>
      <ButtonControl>
        <Button
          name="Simple Button"
          onClick={() => {
            console.log("I am Simple button");
          }}
        />
      </ButtonControl>
      <ButtonControl>
        <Button
          // Если isDeleteVariant не передать явно true, то React сам это воспримет как true
          isDeleteVariant
          name="Delete Button"
          onClick={() => {
            console.log("I am Delete button");
          }}
        />
      </ButtonControl>
      <ButtonControl>
        <Button
          disabled
          name="Disable Button"
          onClick={() => {
            console.log("I am Disabled button");
          }}
        />
      </ButtonControl>
      <ButtonControl>
        <Input
          id="input-simple"
          name="simpleInput"
          placeholder="Enter something"
          label="Simple Input"
        />
      </ButtonControl>
      <ButtonControl>
        <Input
          disabled
          id="input-disabled"
          name="disabledInput"
          placeholder="Enter something"
          label="Disabled Input"
        />
      </ButtonControl>
      <ButtonControl>
        <Input
          error={"Some error"}
          disabled
          id="input-error"
          name="errorInput"
          placeholder="Enter something"
          label="Error Input"
        />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Homework_08;
