import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { InputsContainer, LoginFormContainer, Title } from "./styles";

function LoginForm() {
  return (
    <LoginFormContainer>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="login-email"
          label="Email"
          placeholder="Enter your email"
          name="email"
        />
        <Input
          id="login-password"
          label="Password"
          placeholder="Enter your password"
          name="password"
          type="password"
        />
      </InputsContainer>
      <Button onClick={() => {}} type="submit" name="Login" />
    </LoginFormContainer>
  );
}

export default LoginForm;
