import { StyledButton } from "@/components/button";
import { TopBar } from "@/components/top-bar";
import useMediaQuery from "@/hooks/use-media-query";
import { InViewProps } from "@/interfaces/emotion";
import constants from "@/lib/constants";
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Container = styled.main``;

const Banner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 7.875em;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-top: 2.1875em;
  }
`;

const LogoWrap = styled.div<InViewProps>`
  width: 5.25em;
  height: 5.25em;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 2.875em;
    height: 2.875em;
    border-radius: 10px;
  }

  transition: transform 2s;
  transition-delay: 0.3s;
  transform: ${(props) =>
    props.inView ? "scale(1) translateY(0px)" : "scale(5) translateY(50%)"};
`;

const Logo = styled.div`
  position: relative;
  width: 4.375em;
  height: 2.25em;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 2em;
    height: 2em;
  }
`;

const TitleWrap = styled.div<InViewProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 1s;
  transition-delay: 1.3s;
  transform: ${(props) =>
    props.inView ? "scale(1) translateY(0px)" : "scale(0) translateY(10em)"};
`;

const SubTitle = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 1.125em;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  margin-top: 1.5625em;
  margin-bottom: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 0.75em;
  }
`;

const Title = styled.h1`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 2.25em;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  margin-top: 0.4375em;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 1.625em;
  }
`;

const Store = styled.div<InViewProps>`
  display: flex;
  img {
    margin: 0 0.8125em;
  }
  button {
    display: none;
  }

  transition: opacity 1s;
  transition-delay: 2.3s;
  opacity: ${(props) => (props.inView ? 1 : 0)};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    a {
      display: none;
    }
    button {
      display: flex;
    }
  }
`;

const AppUsages = styled.div`
  display: flex;
  margin-top: 3.125em;
`;

const AppUsage = styled.div<InViewProps>`
  width: 13.4375em;
  height: 27.3125em;
  margin: 0 0.9375em;
  position: relative;

  transition: opacity 1s, transform 1s;
  transition-delay: 1.3s;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) =>
    props.inView ? "translateY(0em)" : "translateY(20em)"};
`;

const TextLineWrap = styled.span`
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.primary};
`;

/** margin-left: 0.3em;
  position: relative;
  :after {
    bottom: 0px;
    right: 0px;
    left: 0px;
    display: block;
    content: "";
    position: absolute;
    border-bottom: 10px solid ${(props) => props.theme.colors.primary}BF;
    transform: rotate(-1deg);
    border-radius: 20px;
  } */
export default function MainTemplate() {
  const logoInView = useInView();
  const titleInView = useInView();
  const storeInView = useInView();
  const appUsageLeftView = useInView();
  const appUsageCenterView = useInView();
  const appUsageRightView = useInView();
  const theme = useTheme();
  const smMatch = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container>
      <TopBar />
      <Banner>
        <LogoWrap ref={logoInView.ref} inView={logoInView.inView}>
          <Logo>
            <Image src="/logo.svg" alt="Feanut Logo" fill />
          </Logo>
        </LogoWrap>
        <TitleWrap ref={titleInView.ref} inView={titleInView.inView}>
          <SubTitle>요즘 화젯거리 주제!</SubTitle>
          <Title>
            친구들과 함께하는
            <br style={{ display: smMatch ? "inline-block" : "none" }} /> 소셜
            투표 서비스
          </Title>
        </TitleWrap>
        <Store ref={storeInView.ref} inView={storeInView.inView}>
          <a href={constants.dynamicURLLanding} target="_blank">
            <Image
              src="/appstore.png"
              width={146}
              height={42}
              alt="App Store"
            />
          </a>
          <a href={constants.dynamicURLLanding} target="_blank">
            <Image
              src="/googleplay.png"
              width={146}
              height={42}
              alt="Play Store"
            />
          </a>
          <StyledButton>피넛 다운로드</StyledButton>
        </Store>
        <AppUsages>
          <AppUsage ref={appUsageLeftView.ref} inView={appUsageLeftView.inView}>
            <Image src="/app-usage-left.png" fill alt="App Usage Left" />
          </AppUsage>
          <AppUsage
            ref={appUsageCenterView.ref}
            inView={appUsageCenterView.inView}
          >
            <Image src="/app-usage-center.png" fill alt="App Usage Center" />
          </AppUsage>
          <AppUsage
            ref={appUsageRightView.ref}
            inView={appUsageRightView.inView}
          >
            <Image src="/app-usage-right.png" fill alt="App Usage Right" />
          </AppUsage>
        </AppUsages>
      </Banner>
    </Container>
  );
}
