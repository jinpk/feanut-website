import { Poll } from "@/interfaces/poll";

export async function getPolls(): Promise<Poll[]> {
  return [
    { title: "성장형 캐릭터같은\n내 친구는?", emojiSrc: "", emotion: "joy" },
    {
      title: "끝없이 나오는 아이디어 뱅크\n천재 발명가 친구는?",
      emojiSrc: "",
      emotion: "inspiration",
    },
    {
      title: "가장 최근 나와\n데이트 한 친구는?",
      emojiSrc: "",
      emotion: "love",
    },
    {
      title: "MBTI 'J' 의 계획적인\n삶을 사는 친구는?",
      emojiSrc: "",
      emotion: "serenity",
    },
    {
      title: "꿈의 직장에서\b일하고 있는 친구는?",
      emojiSrc: "",
      emotion: "hope",
    },
    { title: "간지나는 직업\n갖고 있는 친구는?", emojiSrc: "", emotion: "interest" },
    {
      title: "감기같은 질병 따윈\n모르는 튼튼한 친구는?",
      emojiSrc: "",
      emotion: "awe",
    },
    {
      title: "너랑 몰디브 가서\n모히또 한잔하고 싶다",
      emojiSrc: "",
      emotion: "pride",
    },
    { title: "같이 드라이브\n가고싶은 친구는?", emojiSrc: "", emotion: "amusement" },
    {
      title: "고민 진짜 잘\n들어주는 프로고민상담러는?",
      emojiSrc: "",
      emotion: "gratitude",
    },
    {
      title: "치킨은 뜯어야 제맛이지.\n뼈 치킨파는?",
      emojiSrc: "",
      emotion: "joy",
    },
    { title: "치킨은 순살이지.\n순살 치킨파는?", emojiSrc: "", emotion: "interest" },
  ];
}
