import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, Description, ButtonControl } from "./styles";
import { ClientsTemplateProps } from "./types";

function ClientsTemplate({ children }: ClientsTemplateProps) {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <Description>{children}</Description>
      <ButtonControl>
        <Button name="Go back" onClick={goback} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default ClientsTemplate;
