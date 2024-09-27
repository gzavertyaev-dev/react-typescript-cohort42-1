// 1. В начале импортируются все библиотеки которые нужны
import { useState } from "react";

// 2. Далее импортируется все необходимое по абсолютному пути
import LoginForm from "components/LoginForm/LoginForm";
import SimponsCard from "components/SimpsonsCard/SimpsonsCard";
import Input from "components/Input/Input";
import Feedback from "components/Feedback/Feedback";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";

// 3. Далее импортируется все необходимое по относительному пути
import { Simpsons } from "./types";
import "./styles.css";

function Homework_07() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const onLike = (): void => {
    setLikes((prevValue: number) => prevValue + 1);
  };

  const onDislike = (): void => {
    setDislikes((prevValue: number) => prevValue + 1);
  };

  const resetResults = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  const homerSimpson: Simpsons = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const openModal = (): void => {
    setIsModalOpened(true);
  };

  const closeModal = (): void => {
    setIsModalOpened(false);
  };

  return (
    <div className="homework07-wrapper">
      <LoginForm />
      <SimponsCard
        avatar={homerSimpson.avatar}
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        job={homerSimpson.job}
        hobby={homerSimpson.hobby}
      />
      <Input
        id="input-1"
        label="First name"
        placeholder="Enter your first name"
        name="first_name"
      />
      <Feedback
        likes={likes}
        dislikes={dislikes}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
      <Button onClick={openModal} name="Open Modal" />
      {isModalOpened && (
        <Modal closeModal={closeModal}>
          <div className="succes-modal-wrapper">
            <div className="modal-info-container">
              <p className="modal-info">
                Your data has been saved successfully!!!
              </p>
              <img
                className="modal-icon"
                src="https://w7.pngwing.com/pngs/442/715/png-transparent-check-mark-computer-icons-icon-design-cheque-successful-angle-logo-grass-thumbnail.png"
                alt="Success Icon"
              />
            </div>
            <Button name="Close Modal" onClick={closeModal} />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Homework_07;
