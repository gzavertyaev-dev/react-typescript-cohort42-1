import LoginForm from "components/LoginForm/LoginForm";

import { PageTitle, PageWrapper } from "./styles";

function Login() {
  return (
    <PageWrapper>
      <PageTitle>Login</PageTitle>
      <LoginForm />
    </PageWrapper>
  );
}

export default Login;
