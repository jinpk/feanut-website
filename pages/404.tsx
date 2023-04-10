import { TopBar } from "@/components/top-bar";
import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin-top: 10rem;
  font-family: ${(props) => props.theme.fonts.pretendar.bold};

  align-self: center;
  font-size: 2.25em;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

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
      border-bottom: 10px solid ${(props) => props.theme.colors.primary + "BF"};
      border-radius: 20px;
      position: absolute;
      bottom: 0px;
      z-index: 1;
      right: 0px;
      left: 0px;
      display: block;
      transform: rotate(-1deg);
      content: "";
    }
  }
`;

const Desc = styled.div`
  font-family: ${(props) => props.theme.fonts.pretendar.medium};
  font-size: 1.25em;
  text-align: center;
  color: ${(props) => props.theme.colors.black};

  margin-bottom: 2em;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    font-size: 0.8125em;
  }
`;

const ImageWrap = styled(Image)`
  align-self: center;
`;

export default function NotFound() {
  return (
    <Container>
      <Head>
        <title>소셜 투표 서비스 - feanut</title>
      </Head>

      <TopBar />

      <Title>404 Error</Title>
      <Desc>
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        입력하신 주소가 정확한지 다시 한번 확인해주세요.
      </Desc>

      <ImageWrap src={"/logo.svg"} alt="Feanut Logo" width={150} height={150} />
    </Container>
  );
}
