import styled from "@emotion/styled";
import Image from "next/image";
import { StyledButton } from "./button";
import Link from "next/link";
import constants from "@/lib/constants";

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 4.125em;
  align-items: center;
  @media (max-width: 25em) {
    height: auto;
  }
`;

const StyledNav = styled.nav`
  margin: auto;
  width: 100%;
  max-width: 64em;
  display: flex;
  justify-content: space-between;
  @media (max-width: 64em) {
    padding: 0 1.5625em;
  }
  @media (max-width: 25em) {
    padding: 1em;
  }
`;

export const TopBar = () => {
  return (
    <Container>
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
