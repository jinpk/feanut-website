import styled from "@emotion/styled";
import Image from "next/image";
import { StyledButton } from "./button";
import Link from "next/link";
import constants from "@/lib/constants";

const Container = styled.div<TopBarProps>`
  position: sticky;
  top: 0;
  display: flex;
  transition: border-bottom .3s;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: ${(props) => (props.inScroll ? "1.5px" : "0px")} solid
    ${(props) => props.theme.colors.mediumGrey};
  height: 4.125em;
  align-items: center;
  z-index: 100;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    height: auto;
  }
`;

const StyledNav = styled.nav`
  margin: auto;
  width: 100%;
  max-width: 64em;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0 1.5625em;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 1em;
  }
`;

type TopBarProps = {
  inScroll?: boolean;
};

export const TopBar = (props: TopBarProps) => {
  return (
    <Container inScroll={props.inScroll}>
      <StyledNav>
        <Link href={"/"}>
          <Image
            alt="Feanut Logo"
            width={60.11}
            height={15}
            src="/logo-black.png"
          />
        </Link>
        <a href={constants.dynamicURLLanding} target="_blank">
          <StyledButton>앱 열기</StyledButton>
        </a>
      </StyledNav>
    </Container>
  );
};
