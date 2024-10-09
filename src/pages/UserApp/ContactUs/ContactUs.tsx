import ContactUsForm from "components/ContactUsForm/ContactUsForm";

import { PageTitle, PageWrapper } from "./styles";

function ContactUs() {
  return (
    <PageWrapper>
      <PageTitle>Contact Us</PageTitle>
      <ContactUsForm />
    </PageWrapper>
  );
}

export default ContactUs;
