import { SimpsonsCardProps } from "./types";
import { CardWrapper, CardItem, Avatar } from "./styles";

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
    <CardWrapper>
      <Avatar src={avatar} alt="Avatar" />
      <CardItem>Full name: {getSimpsonName()} </CardItem>
      <CardItem>Job: {job}</CardItem>
      <CardItem>Hobby: {hobby}</CardItem>
    </CardWrapper>
  );
}

export default SimponsCard;
