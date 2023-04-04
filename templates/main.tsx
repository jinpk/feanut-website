import { TopBar } from "@/components/top-bar";
import { InViewProps } from "@/interfaces/emotion";
import constants from "@/lib/constants";
import { css } from "@emotion/react";
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
  transition: transform 2s;
  transition-delay: 0.3s;
  transform: ${(props) =>
    props.inView ? "scale(1) translateY(0px)" : "scale(5) translateY(50%)"};
`;

const TitleWrap = styled.div<InViewProps>`
  transition: transform 1s;
  transition-delay: 1.3s;
  transform: ${(props) =>
    props.inView ? "scale(1) translateY(0px)" : "scale(0) translateY(10em)"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.h2`
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
`;

const Store = styled.div<InViewProps>`
  display: flex;
  transition: opacity 1s;
  transition-delay: 2.3s;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  img {
    margin: 0 0.8125em;
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
  margin-left: 0.3em;
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
  }
`;

const logoInView = css``;

export default function MainTemplate() {
  const logoInView = useInView();
  const titleInView = useInView();
  const storeInView = useInView();
  const appUsageLeftView = useInView();
  const appUsageCenterView = useInView();
  const appUsageRightView = useInView();
  return (
    <Container>
      <TopBar />
      <Banner>
        <LogoWrap ref={logoInView.ref} inView={logoInView.inView}>
          <Image src="/logo.svg" width={69} height={35} alt="Feanut Logo" />
        </LogoWrap>
        <TitleWrap ref={titleInView.ref} inView={titleInView.inView}>
          <SubTitle>요즘 화젯거리 주제!</SubTitle>
          <Title>
            친구들과 함께하는<TextLineWrap>소셜 투표 서비스</TextLineWrap>
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
