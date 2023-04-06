import { Faq } from "@/interfaces/docs";
import styled from "@emotion/styled";
import Image from "next/image";
import { PropsWithChildren, useCallback, useState } from "react";

type FaqItemProps = PropsWithChildren<{}> & Faq;

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

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    padding-top: 0.875em;
    padding-bottom: 0.875em;
  }
`;

const Question = styled.span`
  font-size: 1.5em;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.pretendar.semiBold};

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: 1.125em;
  }
`;

const Content = styled.div<{ opened: string }>`
  max-height: ${(props) => (props.opened === "true" ? "100vw" : "0px")};
  transition: all 1s ease-in-out;
  overflow: hidden;
`;

const Icon = styled(Image)<{ opened: string }>`
  transform: ${(props) =>
    props.opened === "true" ? "rotate(180deg)" : "rotate(0deg)"};
  transition: all 0.5s ease;
`;

const Margin = styled.div`
  height: 1.75em;
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    height: 0.875em;
  }
`;

export const FaqItem = (props: FaqItemProps) => {
  const [opened, setOpened] = useState(false);

  const handleClick = useCallback(() => {
    setOpened((prev) => !prev);
  }, []);

  return (
    <Container>
      <Header onClick={handleClick}>
        <Question>{props.title}</Question>
        <Icon
          opened={String(opened)}
          width={14}
          height={28}
          alt="Down"
          src="/down.svg"
        />
      </Header>
      <Content opened={String(opened)}>
        <div dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
        <Margin />
      </Content>
    </Container>
  );
};
