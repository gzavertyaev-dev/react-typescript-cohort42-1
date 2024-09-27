import Button from "components/Button/Button";

import { PageWrapper, ButtonControl, Box1, Box2, Box3 } from "./styles";

function Lesson_08() {
  // const isBlue = false;

  return (
    <PageWrapper
    // стилизация через inline styles
    // style={{ backgroundColor: isBlue ? "blue" : "red" }}
    >
      <ButtonControl>
        <Button
          name="Simple Button"
          onClick={() => {
            console.log("I am Simple Button");
          }}
        />
      </ButtonControl>
      <ButtonControl>
        <Button
          isDeleteVariant={true}
          name="Delete Button"
          onClick={() => {
            console.log("I am Delete Button");
          }}
        />
      </ButtonControl>
      <Box1>BOX 1</Box1>
      <Box2>BOX 2</Box2>
      <Box3>BOX 3</Box3>
    </PageWrapper>
  );
}

export default Lesson_08;
