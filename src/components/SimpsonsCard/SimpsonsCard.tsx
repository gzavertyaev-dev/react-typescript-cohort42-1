import { SimpsonsCardProps } from "./types";
import "./styles.css";

function SimponsCard({
  firstName,
  lastName,
  avatar,
  job,
  hobby = "No Hobby",
}: SimpsonsCardProps) {
  const getSimpsonName = (): string => {
    return `${firstName} ${lastName}`;
  };

  return (
    <div className="card-wrapper">
      <img className="avatar" src={avatar} alt="Avatar" />
      <p className="card-item">Full name: {getSimpsonName()} </p>
      <p className="card-item">Job: {job}</p>
      <p className="card-item">Hobby: {hobby}</p>
    </div>
  );
}

export default SimponsCard;
