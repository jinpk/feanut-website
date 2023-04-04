import { Policy } from "@/interfaces/policy";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { useMemo, useState } from "react";

const Container = styled.main`
  width: 100vw;
  display: flex;
  padding: 3em 0px;
`;

const Content = styled.section`
  margin: auto;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.sm};
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.pretendar.bold};
  font-size: 2.25em;
`;

const ContentHtml = styled.div`
  margin-top: 3em;
`;

type PolicyTemplateProps = {
  title: string;
  data: Policy[];
};

export default function PolicyTemplate(props: PolicyTemplateProps) {
  const [selectedIndex, setSelectedIndex] = useState("0");

  const contentHtml = useMemo(() => {
    return props.data[parseInt(selectedIndex)]?.contentHtml || "";
  }, [selectedIndex, props.data]);

  return (
    <Container>
      <Content>
        <Title>{props.title}</Title>
        <select
          onChange={(e) => {
            setSelectedIndex(e.target.value);
          }}
          value={selectedIndex}
        >
          {props.data.map((x, i) => {
            return (
              <option value={i.toString()}>
                {dayjs(x.date).format("YYYY. MM. DD")}
              </option>
            );
          })}
        </select>
        <ContentHtml
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        ></ContentHtml>
      </Content>
    </Container>
  );
}
