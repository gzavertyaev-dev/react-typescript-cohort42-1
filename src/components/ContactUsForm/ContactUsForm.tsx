import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { ContactUsFormContainer, Title, InputsContainer } from "./styles";
import { CONTACT_US_FORM_NAMES } from "./types";

function ContactUsForm() {
  const validationSchema = Yup.object().shape({
    // [CONTACT_US_FORM_NAMES.FULL_NAME] === "fullName"
    [CONTACT_US_FORM_NAMES.FULL_NAME]: Yup.string()
      .required("Full Name is required filed")
      .min(3, "The minimum length of full name is 3")
      .max(50, "The maximum length of full name is 50"),
    [CONTACT_US_FORM_NAMES.PHONE]: Yup.string()
      .required("Phone is required filed")
      .min(4, "The minimum length of phone number is 4")
      .max(20, "The maximum length of phone number is 20"),
    [CONTACT_US_FORM_NAMES.EMAIL]: Yup.string()
      .email("Invalid email format")
      .min(6, "The minimum length of email is 6")
      .max(60, "The maximum length of email is 60"),
  });

  const formik = useFormik({
    initialValues: {
      [CONTACT_US_FORM_NAMES.FULL_NAME]: "",
      [CONTACT_US_FORM_NAMES.PHONE]: "",
      [CONTACT_US_FORM_NAMES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <ContactUsFormContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <InputsContainer>
        <Input
          id="contactus-fullname"
          label="Full name*"
          placeholder="Your full name"
          name={CONTACT_US_FORM_NAMES.FULL_NAME}
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.errors.fullName}
        />
        <Input
          id="contactus-phone"
          label="Phone*"
          placeholder="Your phone number"
          name={CONTACT_US_FORM_NAMES.PHONE}
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
        <Input
          id="contactus-email"
          label="Email"
          placeholder="Your email"
          name={CONTACT_US_FORM_NAMES.EMAIL}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
      </InputsContainer>
      <Button name="SEND REQUEST" type="submit" />
    </ContactUsFormContainer>
  );
}

export default ContactUsForm;
