import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.footer`
  width: 100%;
  display: flex;
  padding-bottom: 3.5625em;
`;

const StyledFooter = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.mediumGrey};
  margin: auto;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.md};
  padding: 1.25em 0px;
  display: flex;
  justify-content: space-between;
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 0.875em;
`;

const LinkText = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-size: 0.875em;
`;

const Divider = styled.span`
  margin: 0px 0.875em;
  border: 1px solid ${(props) => props.theme.colors.mediumGrey};
  height: 1.0625em;
`;

export const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <div>
          <Link href={"/privacy"}>
            <LinkText>개인정보 처리방침</LinkText>
          </Link>
          <Divider />
          <Link href={"/terms"}>
            <LinkText>서비스 이용약관</LinkText>
          </Link>
        </div>
        <Copyright>© 2023 Feanut, All rights reserved.</Copyright>
      </StyledFooter>
    </Container>
  );
};
