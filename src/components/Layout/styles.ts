import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

import { colors } from "styles/colors";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  background-color: ${colors.PRIMARY};
  padding: 20px 40px;
  color: white;
`;

export const HeaderLogo = styled.div`
  height: 100%;
  width: 80px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  color: white;
  font-size: 20px;
  text-decoration: none;
  font-weight: normal;
`;

export const AppMain = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
`;

export const AppFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  border-top: 1px soid black;
  background-color: ${colors.PRIMARY};
  padding: 20px 40px;
  color: white;
`;

export const FooterLogo = styled.div`
  height: 80px;
  width: 80px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled(Link)`
  color: white;
  font-size: 14px;
  text-decoration: bold;
`;
