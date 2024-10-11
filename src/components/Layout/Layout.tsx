import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import { APP_ROUTES } from "constants/routes";
import { UserImg } from "assets";

import {
  LayoutWrapper,
  AppHeader,
  AppFooter,
  AppMain,
  HeaderLink,
  HeaderNav,
  HeaderLogo,
  FooterLink,
  FooterLogo,
  FooterNav,
  LogoImg,
} from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(APP_ROUTES.HOME);
  };

  const appLinks = {
    [APP_ROUTES.HOME]: "Home",
    [APP_ROUTES.CONTACT_US]: "Contact Us",
    [APP_ROUTES.ABOUT]: "About",
    [APP_ROUTES.LOGIN]: "Login",
    [APP_ROUTES.CLIENTS]: "Clients",
  };

  // console.log(Object.keys(appLinks));
  // console.log(Object.values(appLinks));

  const headerLinks = Object.keys(appLinks).map((link: string) => {
    return (
      <HeaderLink
        key={v4()}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={link}
      >
        {appLinks[link as keyof typeof appLinks]}
      </HeaderLink>
    );
  });

  const footerLinks = Object.keys(appLinks).map((link: string) => {
    return (
      <FooterLink key={v4()} to={link}>
        {appLinks[link as keyof typeof appLinks]}
      </FooterLink>
    );
  });

  return (
    <LayoutWrapper>
      <AppHeader>
        <HeaderLogo onClick={goToHomePage}>
          <LogoImg src={UserImg} alt="Logo" />
        </HeaderLogo>
        <HeaderNav>{headerLinks}</HeaderNav>
      </AppHeader>
      <AppMain>{children}</AppMain>
      <AppFooter>
        <FooterLogo onClick={goToHomePage}>
          <LogoImg src={UserImg} alt="Logo" />
        </FooterLogo>
        <FooterNav>{footerLinks}</FooterNav>
      </AppFooter>
    </LayoutWrapper>
  );
}

export default Layout;
