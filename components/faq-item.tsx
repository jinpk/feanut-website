import styled from "@emotion/styled";
import Image from "next/image";
import { PropsWithChildren } from "react";

type FaqItemProps = PropsWithChildren<{
  question: string;
}>;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.colors.mediumGrey};
  :last-of-type {
    border-bottom: none;
  }
`;

const Header = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75em 0px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  padding-right: 1.125em;
`;

const Question = styled.span`
  font-size: 1.5em;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.pretendar.semiBold};
`;

export const FaqItem = (props: FaqItemProps) => {
  return (
    <Container>
      <Header>
        <Question>{props.question}</Question>

        <Image width={14} height={28} alt="Down" src="/down.svg" />
      </Header>
    </Container>
  );
};
