import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import { Fragment } from "react";

const Container = styled.div`
  position: relative;
  width: 16em;
  height: 12.5em;
  margin-right: 1.875em;
`;

const Background = styled(Image)`
  position: absolute;
  z-index: 1;
`;

const Text = styled.span`
  z-index: 2;
  font-family: ${(props) => props.theme.fonts.pretendar.bold};
  font-size: 1.6875em;
  color: ${(props) => props.theme.colors.white};
  margin: 1.5625em 0.9375em;
`;

type PollCardProps = {
  src: string | StaticImageData;
  title: string;
};

export const PollCard = (props: PollCardProps) => {
  return (
    <Container>
      <Background src={props.src} fill alt={`Poll Emotion Background`} />
      <Text>
        {props.title.split("\n").map((text, index) => {
          return (
            <Fragment key={index}>
              {text}
              {index !== 0 && <br />}
            </Fragment>
          );
        })}
      </Text>
    </Container>
  );
};
