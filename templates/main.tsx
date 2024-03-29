import {
  StyledButtonMedium,
  StyledButtonMediumWhite,
} from "@/components/button";
import { FaqItem } from "@/components/faq-item";
import { Footer } from "@/components/footer";
import { TopBar } from "@/components/top-bar";
import useDocumentScroll from "@/hooks/use-document-scroll";
import { Faq } from "@/interfaces/docs";
import { InViewProps } from "@/interfaces/emotion";
import { Poll } from "@/interfaces/poll";
import constants from "@/lib/constants";
import styled from "@emotion/styled";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

/** Main Banner */

const Banner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 7.875em;
  max-width: 100vw;
  overflow: hidden;
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

  transition: transform 1.5s;
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
  transition-delay: 1s;
  transform: ${(props) =>
    props.inView ? "scale(1) translateY(0px)" : "scale(0) translateY(10em)"};
`;

const SubTitle = styled.span`
  font-family: ${(props) => props.theme.fonts.pretendar.semiBold};
  font-size: 1.125em;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  margin-top: 1.5625em;
  margin-bottom: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: 0.75em;
  }
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.pretendar.bold};

  font-size: 2.25em;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  margin-top: 0.4375em;

  .rb {
    display: none;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: 1.625em;
    .rb {
      display: block;
    }

    .lb {
      display: none;
    }
  }

  .decoration {
    position: relative;
    :after {
      z-index: -1;
      border-bottom: 10px solid ${(props) => props.theme.colors.primary + "BF"};
      border-radius: 20px;
      position: absolute;
      bottom: 0px;
      right: 0px;
      left: 0px;
      display: block;
      transform: rotate(-0.5deg);
      content: "";
      @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
        border-bottom: 7px solid ${(props) => props.theme.colors.primary + "BF"};
      }
    }
  }
`;

const Store = styled.div<InViewProps>`
  display: flex;
  img {
    margin: 0 0.8125em;
  }
  .mobile-a {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    .pc-a {
      display: none;
    }
    .mobile-a {
      display: flex;
    }
  }

  transition: opacity 1s;
  transition-delay: 2s;
  opacity: ${(props) => (props.inView ? 1 : 0)};
`;

const AppUsages = styled.div`
  display: flex;
  margin-top: 3.125em;
  overflow: hidden;
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

  img {
    object-fit: contain;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    margin: 0px 0.3em;
    width: 9.25em;
    height: 18.75em;
  }
`;

/** Second Banner */

const Summary = styled.section`
  position: relative;
  padding: 7.8125em 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6.5em;
  max-width: 100vw;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding-left: 4em;
    padding-right: 4em;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    padding-top: 6.25em;
    padding-bottom: 6.25em;
  }
`;

const FeanutBackground = styled.div`
  position: absolute;
  width: 70%;
  height: calc(100vw / 3);
  left: -40%;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    left: -30em;
    width: 48em;
    height: 25em;
  }
`;

const SummaryContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 7.8125em;
  padding-bottom: 6.5em;
  max-width: 52.1875em;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    flex-direction: column;
    align-items: center;
    padding-top: 6.25em;
    padding-bottom: 6.25em;
  }
`;

const SummaryText = styled.span<InViewProps & { seq: string }>`
  position: relative;

  display: block;
  font-size: 1.5em;
  margin-top: 3.3em;
  font-family: ${(props) => props.theme.fonts.pretendar.semiBold};
  :first-of-type {
    margin-top: 0em;
  }
  span {
    font-family: ${(props) => props.theme.fonts.pretendar.bold};
    color: ${(props) => props.theme.colors.primary};
  }

  :before {
    content: "${(props) => props.seq}";
    position: absolute;
    font-size: 15px;
    left: -1.875em;
    top: -0.125em;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-top: 1.5625em;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    text-align: center;
    margin-top: 2.5em;
    :first-of-type {
      margin-top: 3.12em;
    }
    :before {
      content: "${(props) => props.seq}";
      position: absolute;
      font-size: 15px;
      top: -30px;
      left: calc(50% - 9px);
    }
  }

  transition: transform 0.5s;
  transform: ${(props) =>
    props.inView ? "matrix(1,0,0,1,0,0)" : "matrix(1,0,0,1,0,50)"};
`;

const Video = styled.div`
  position: relative;
  border-radius: 15px;
  width: 17.815em;
  height: 31.8125em;
  cursor: pointer;

  img {
    object-fit: contain;
  }

  video {
    border-radius: 15px;
    source {
      border-radius: 15px;
    }
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  }

  .comment1 {
    top: 6em;
    right: -40%;
    position: absolute;
    width: 12.5em;
    height: 12.5em;
  }

  .comment2 {
    bottom: 0;
    left: -25%;
    position: absolute;
    width: 12.5em;
    height: 12.5em;
  }

  .fire {
    left: 4.6em;
    top: -2em;
    position: absolute;
    width: 4.6em;
    height: 4.6em;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 18.5625em;
    height: 27.8125em;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 15.125em;
    height: 22.25em;
  }
`;

/** Collection */

const Collection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 100vw;
  overflow: hidden;
`;

const Desc = styled.div`
  font-family: ${(props) => props.theme.fonts.pretendar.medium};
  font-size: 1.25em;
  text-align: center;
  color: ${(props) => props.theme.colors.black};

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: 0.8125em;
  }
`;

const CollectionList = styled.div`
  display: flex;
  min-width: 100vw;
  margin-top: 1.875em;
  overflow: hidden;
`;

/** Pull */
const Pull = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9.375em 0px;
  padding-top: 7.8125em;

  max-width: 100vw;
  overflow: hidden;
`;

const PullWrap = styled.div<InViewProps>`
  position: relative;
  width: 26.125em;
  height: 30.75em;
  margin-top: 3.15em;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 18.25em;
    height: 21.5em;
  }

  transition: transform 0.5s;
  transform: ${(props) =>
    props.inView ? "matrix(1,0,0,1,0,0)" : "matrix(1,0,0,1,0,100)"};
`;

const PullCommentImage = styled.div`
  position: absolute;
  width: 13.125em;
  height: 2.875em;
  bottom: 8em;
  left: -8em;
  img {
    object-fit: contain;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    left: -3em;
    bottom: 4.5em;
    width: 11em;
    height: 2.5em;
  }
`;

const PullSecretImage = styled.div`
  position: absolute;
  width: 4.5625em;
  height: 4.5625em;
  top: 3em;
  right: -1.5625em;
  img {
    object-fit: contain;
  }
`;

const PullLockImage = styled.div`
  position: absolute;
  width: 3.3125em;
  height: 3.3125em;
  top: 1em;
  right: -3.3125em;
  img {
    object-fit: contain;
  }
`;

const PullHandImage = styled.div`
  position: absolute;
  width: 5.9375em;
  height: 5.9375em;
  bottom: -1.5em;
  left: 2.07em;
  img {
    object-fit: contain;
  }
`;

/** Get In Touch */
const GetInTouch = styled.section`
  width: 100%;
  min-height: 21.5625em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    min-height: 13.6875em;
  }
`;

const GetInTouchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
`;

/** Faq */
const Faq = styled.section`
  padding-top: 7.825em;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 7.8em;
  margin-bottom: 5em;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 6.25em 0px;
  }
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  align-self: stretch;
  margin-top: 2em;
  max-width: 53.5em;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-left: 2em;
    margin-right: 2em;
    width: calc(100% - 4em);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    margin-left: 1em;
    margin-right: 1em;
    width: calc(100% - 2em);
  }
`;

type MainTemplateProps = {
  faqs: Faq[];
  polls: Poll[];
};

export default function MainTemplate(props: MainTemplateProps) {
  const inScroll = useDocumentScroll();
  const [rendered, setRendered] = useState(false);

  const summaryFirstView = useInView();
  const summarySecondView = useInView();
  const summaryThirdView = useInView();
  const summaryFourView = useInView();

  const pullScreenInView = useInView();

  const firstCollectionRef = useRef<HTMLDivElement>(null);
  const secondCollectionRef = useRef<HTMLDivElement>(null);
  const thirdCollectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRendered(true);
  }, []);

  useEffect(() => {
    let start = 0;
    let cw = firstCollectionRef.current?.clientWidth || 0;
    let iv = setInterval(() => {
      if (start >= (cw - 255) / 3) {
        start = 0;
      }

      if (firstCollectionRef.current) {
        firstCollectionRef.current.style.transform = `matrix(1,0,0,1,-${start},0)`;
      }
      start += 1;
    }, 10);
    return () => {
      clearInterval(iv);
    };
  }, []);

  useEffect(() => {
    let start = 0;
    let cw = secondCollectionRef.current?.clientWidth || 0;
    let iv = setInterval(() => {
      if (start >= (cw - 255) / 3) {
        start = 0;
      }

      if (secondCollectionRef.current) {
        secondCollectionRef.current.style.transform = `matrix(1,0,0,1,${start},0)`;
      }
      start += 1;
    }, 10);
    return () => {
      clearInterval(iv);
    };
  }, []);

  useEffect(() => {
    let start = 100;
    let cw = thirdCollectionRef.current?.clientWidth || 0;
    let iv = setInterval(() => {
      if (thirdCollectionRef.current) {
        if (start >= (cw - 255) / 3) {
          start = 100;
        }

        thirdCollectionRef.current.style.transform = `matrix(1,0,0,1,-${start},0)`;
      }
      start += 1;
    }, 10);
    return () => {
      clearInterval(iv);
    };
  }, []);

  return (
    <Fragment>
      <TopBar inScroll={inScroll} />
      {/** Banner */}
      <Banner>
        <LogoWrap inView={rendered}>
          <Logo>
            <Image priority src="/logo.svg" alt="Feanut Logo" fill />
          </Logo>
        </LogoWrap>
        <TitleWrap inView={rendered}>
          <SubTitle>feanut</SubTitle>
          <Title>
            <span>
              마음을 전하는 <span className="decoration">3초</span>
              <br />
              feanut에서 만나요!
            </span>
          </Title>
        </TitleWrap>
        <Store inView={rendered}>
          <a href={constants.appStoreURL} className="pc-a" target="_blank">
            <Image
              src="/appstore.png"
              width={146}
              height={42}
              alt="App Store"
            />
          </a>
          <a href={constants.playStoreURL} className="pc-a" target="_blank">
            <Image
              src="/googleplay.png"
              width={146}
              height={42}
              alt="Play Store"
            />
          </a>
          <a href={constants.dynamicURLLanding} className="mobile-a">
            <StyledButtonMedium>앱 열기</StyledButtonMedium>
          </a>
        </Store>
        <AppUsages>
          <AppUsage inView={rendered}>
            <Image
              priority
              src="/app-usage-left.png"
              fill
              alt="App Usage Left"
            />
          </AppUsage>
          <AppUsage inView={rendered}>
            <Image
              priority
              src="/app-usage-center.png"
              fill
              alt="App Usage Center"
            />
          </AppUsage>
          <AppUsage inView={rendered}>
            <Image
              priority
              src="/app-usage-right.png"
              fill
              alt="App Usage Right"
            />
          </AppUsage>
        </AppUsages>
      </Banner>
      {/** Summary */}
      <Summary>
        <FeanutBackground>
          <Image alt="Feanut Background" src={"/feanut-background.svg"} fill />
        </FeanutBackground>
        <SummaryContent>
          <Video
            onClick={() => {
              window.open(
                "https://www.youtube.com/shorts/CbSccYhRc3g",
                "_blank"
              );
            }}
          >
            <video
              autoPlay
              webkit-playsinline
              webkit-playsInline
              playsInline
              muted
              loop
              width={"100%"}
              height={"100%"}
            >
              <source src="/intro.mp4" type="video/mp4" />
            </video>
            <div className="comment1">
              <Image alt="Comment 1" src={"/comment1.png"} fill />
            </div>
            <div className="comment2">
              <Image alt="Comment 2" src={"/comment2.png"} fill />
            </div>
            <div className="fire">
              <Image alt="Fire" src={"/fire.png"} fill />
            </div>
          </Video>
          <div>
            <SummaryText
              seq="01"
              ref={summaryFirstView.ref}
              inView={summaryFirstView.inView}
            >
              화젯거리 가득한
              <br />
              <span className="primary">투표 컬렉션</span>
            </SummaryText>
            <SummaryText
              seq="02"
              ref={summarySecondView.ref}
              inView={summarySecondView.inView}
            >
              내 친구를 저격하는
              <br />
              <span className="primary">위트있는 주제</span>
            </SummaryText>
            <SummaryText
              seq="03"
              ref={summaryThirdView.ref}
              inView={summaryThirdView.inView}
            >
              여사친, 남사친에게
              <br />
              <span className="primary">몰래 마음 표현하기</span>
            </SummaryText>
            <SummaryText
              seq="04"
              ref={summaryFourView.ref}
              inView={summaryFourView.inView}
            >
              내 친구는 어떤 사람일까?
              <br />
              <span className="primary">인기 지표 프로필</span>
            </SummaryText>
          </div>
        </SummaryContent>
        <a href={constants.dynamicURLLanding} target="_blank">
          <StyledButtonMedium>앱 열기</StyledButtonMedium>
        </a>
      </Summary>
      {/** Collection */}
      <Collection>
        <Title>
          <span>
            다양한 주제로 숨겨왔던 <br className="rb" />
            나의 마음을 <br className="lb" />
            표현할 수 있는
            <br className="rb" />{" "}
            <span className="decoration">투표 컬렉션</span>
          </span>
        </Title>
        <Desc>친구들과 서로 마음을 표현하고 칭찬하며 더 가까워져 볼까요?</Desc>

        {/**
        <CollectionList style={{ marginTop: 50 }} ref={firstCollectionRef}>
          {props.polls.map((x, i) => {
            return (
              <PollCard
                key={i.toString()}
                title={x.title}
                src={`/card-${x.emotion}.svg`}
              />
            );
          })}
        </CollectionList>

        <CollectionList ref={secondCollectionRef}>
          {props.polls.map((x, i) => {
            return (
              <PollCard
                key={i.toString()}
                title={x.title}
                src={`/card-${x.emotion}.svg`}
              />
            );
          })}
        </CollectionList>

        <CollectionList ref={thirdCollectionRef}>
          {props.polls.map((x, i) => {
            return (
              <PollCard
                key={i.toString()}
                title={x.title}
                src={`/card-${x.emotion}.svg`}
              />
            );
          })}
        </CollectionList>
         */}
      </Collection>
      {/** Pull */}
      <Pull>
        <Title>
          <span>
            누가 <span className="decoration">나를 선택했는지</span> 확인
          </span>
        </Title>
        <Desc>
          투표하며 얻을 수 있는 피넛을 사용하여
          <br />
          누가 나를 투표했는지 확인해 보세요!
          <br />이 기회에 친구와 더 가까워질 수도 있잖아요
        </Desc>
        <PullWrap ref={pullScreenInView.ref} inView={pullScreenInView.inView}>
          <Image src="/pull.png" alt="Pull" fill />
          <PullCommentImage>
            <Image src="/pull-comment.png" alt="Pull Comment" fill />
          </PullCommentImage>
          <PullLockImage>
            <Image src="/pull-lock.png" alt="Pull Lock" fill />
          </PullLockImage>
          <PullSecretImage>
            <Image src="/pull-secret.png" alt="Pull Secret" fill />
          </PullSecretImage>
          <PullHandImage>
            <Image src="/pull-hand.png" alt="Pull Hand" fill />
          </PullHandImage>
        </PullWrap>
      </Pull>
      {/** GetInTouch */}
      <GetInTouch>
        <Image
          src={"/get-in-touch.png"}
          alt="Get In Touch Background"
          fill
          style={{ position: "absolute" }}
        />
        <GetInTouchContent>
          <Title>feanut과 함께하는 법!</Title>
          <Desc>재밌을 것 같은 콘텐츠와 투표를 직접 제안해 주셔도 좋아요</Desc>
          <a href={constants.feanutInstagramURL} target="_blank">
            <StyledButtonMediumWhite style={{ marginTop: 20 }}>
              Instagram
            </StyledButtonMediumWhite>
          </a>
        </GetInTouchContent>
      </GetInTouch>
      {/** Faq */}
      <Faq>
        <Title>자주 묻는 질문에 대한 답변</Title>
        <FaqList>
          {props.faqs.map((x, i) => {
            return <FaqItem {...x} key={i} />;
          })}
        </FaqList>
      </Faq>

      <Footer />
    </Fragment>
  );
}
