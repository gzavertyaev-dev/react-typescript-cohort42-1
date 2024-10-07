import { useFormik } from "formik";
import * as Yup from "yup";
// import { useState } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { InputsContainer, LoginFormContainer, Title } from "./styles";

function LoginForm() {
  // Управление элементами формы через state
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // console.log(email);
  // console.log(password);

  // const onEmailChange = (event: any) => {
  //   setEmail(event.target.value);
  // };

  // const onPasswordChange = (event: any) => {
  //   setPassword(event.target.value);
  // };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email field is required")
      .email("Invalid Email format")
      .min(7, "The minimum email length is 7")
      .max(30, "The max email length is 30"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "The minimum password length is 5")
      .max(30, "The max password length is 30"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      // Тут прописываем логику по рабоате с данными, которые пользователь ввел в элементы формы
      // Например: отправка данных на сервер
      console.log("Submit works");
      console.log(values);
      console.log(helpers);
      // helpers.resetForm();
    },
  });

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="login-email"
          label="Email"
          placeholder="Enter your email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Input
          id="login-password"
          label="Password"
          placeholder="Enter your password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
      {/* <Button
        onClick={() => {
          formik.resetForm();
        }}
        name="Reset"
      /> */}
    </LoginFormContainer>
  );
}

export default LoginForm;
