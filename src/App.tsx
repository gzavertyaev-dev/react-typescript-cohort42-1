import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import Home from "pages/UserApp/Home/Home";
import About from "pages/UserApp/About/About";
import ContactUs from "pages/UserApp/ContactUs/ContactUs";
import Login from "pages/UserApp/Login/Login";
import Clients from "pages/UserApp/Clients/Clients";
import Apple from "pages/UserApp/Clients/Apple/Apple";
import Google from "pages/UserApp/Clients/Google/Google";
import Facebook from "pages/UserApp/Clients/Facebook/Facebook";
import { APP_ROUTES } from "constants/routes";

// HOMEWORKS
import Homework_06 from "homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_08 from "homeworks/Homework_08/Homework_08";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Homework_11 from "homeworks/Homework_11/Homework_11";
import Homework_13 from "homeworks/Homework_13/Homework_13";

// LESSONS
import Lesson_06 from "lessons/Lesson_06/Lesson_06";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_11 from "lessons/Lesson_11/Lesson_11";
import Lesson_13 from "lessons/Lesson_13/Lesson_13";

//CONSULTATIONS
import Consultation_03 from "consultations/Consultation_03/Consultation_03";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Layout>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.ABOUT} element={<About />} />
          <Route path={APP_ROUTES.CONTACT_US} element={<ContactUs />} />
          <Route path={APP_ROUTES.LOGIN} element={<Login />} />
          <Route path={APP_ROUTES.CLIENTS} element={<Clients />} />
          <Route path={APP_ROUTES.FACEBOOK} element={<Facebook />} />
          <Route path={APP_ROUTES.APPLE} element={<Apple />} />
          <Route path={APP_ROUTES.GOOGLE} element={<Google />} />
          <Route path={APP_ROUTES.NOT_FOUND} element="Page Is Not Found" />
        </Routes>
      </Layout> */}
      {/* LESSONS */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_11 /> */}
      {/* <Lesson_13 /> */}
      {/* HOMEWORKS */}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_11 /> */}
      <Homework_13 />
      {/* CONSULTATIONS */}
      {/* <Consultation_03 /> */}
    </BrowserRouter>
  );
}

export default App;
