import { useNavigate } from "react-router-dom";

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
} from "./styles";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <LayoutWrapper>
      <AppHeader>
        <HeaderLogo onClick={goToHomePage}>App Logo</HeaderLogo>
        <HeaderNav>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/contactUs"
          >
            Contact Us
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/about"
          >
            About
          </HeaderLink>
          <HeaderLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/login"
          >
            Login
          </HeaderLink>
        </HeaderNav>
      </AppHeader>
      <AppMain>{children}</AppMain>
      <AppFooter>
        <FooterLogo onClick={goToHomePage}>App Logo</FooterLogo>
        <FooterNav>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Login</FooterLink>
        </FooterNav>
      </AppFooter>
    </LayoutWrapper>
  );
}

export default Layout;
