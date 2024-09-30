import { ReactNode } from "react";
import { v4 } from "uuid";

import { Cars } from "./types";
import {
  CarCardWrapper,
  CarInfo,
  CarInfoContainer,
  CarInfoTitle,
  PageWrapper,
} from "./styles";

function Homework_06() {
  const cars: Cars[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carCards: ReactNode = cars.map((car: Cars) => {
    const carId: string = v4();

    return (
      <CarCardWrapper key={carId}>
        <CarInfoContainer>
          <CarInfoTitle>Brand:</CarInfoTitle>
          <CarInfo>{car.brand}</CarInfo>
        </CarInfoContainer>
        <CarInfoContainer>
          <CarInfoTitle>Price:</CarInfoTitle>
          <CarInfo>{`${car.price}$`}</CarInfo>
        </CarInfoContainer>
        <CarInfoContainer>
          <CarInfoTitle>Fuel type:</CarInfoTitle>
          <CarInfo>{car.isDiesel ? "Diesel" : "Petrol"}</CarInfo>
        </CarInfoContainer>
      </CarCardWrapper>
    );
  });

  return <PageWrapper>{carCards}</PageWrapper>;
}

export default Homework_06;
