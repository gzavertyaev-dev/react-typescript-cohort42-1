import { useEffect } from "react";

import { PageTitle, PageWrapper } from "./styles";

function About() {
  const getCompanyDescription = async () => {
    // Fake logic to GET Company Description data
    console.log("Sending data to server to get Company Description data");
    const response = await fetch("https://catfact.ninja/fact");
    console.log(response);
  };

  useEffect(() => {
    getCompanyDescription();

    return () => {
      // Тут пишем любую логику, которую нужно выполнить в стадию Unmounting
      console.log("Component About Unmounted");
    };
  }, []);
  return (
    <PageWrapper>
      <PageTitle>About</PageTitle>
    </PageWrapper>
  );
}

export default About;
