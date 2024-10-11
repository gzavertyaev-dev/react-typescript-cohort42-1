import { useContext } from "react";

import { MainContext } from "lessons/Lesson_13/components/Main/Main";
import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

// interface ContentProps {
//   fullName: string | undefined;
//   age: number | undefined;
//   jobPosition: string | undefined;
// }

function Content() {
  // шаг 3: получить данные из контекста
  const userData = useContext(MainContext);
  console.log(userData);

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      {userData && (
        <>
          <ContentInfo>{userData.fullName}</ContentInfo>
          <ContentInfo>{userData.age}</ContentInfo>
          <ContentInfo>{userData.jobPosition}</ContentInfo>
        </>
      )}
    </ContentWrapper>
  );
}

export default Content;
