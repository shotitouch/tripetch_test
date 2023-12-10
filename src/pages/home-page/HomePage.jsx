import styled from "styled-components";
import InfoSection from "./components/InfoSection";
import RugbyManImageSection from "./components/RugbyManImageSection";
import BasketBallImageSection from "./components/BasketBallImageSection";

const PageContainer = styled.div``;

const data = [
  {
    title: "ATHLETES",
    imageSection: <RugbyManImageSection />,
    alternateDisplay: false,
    details: [
      {
        title: "CONNECTION",
        numberStr: "01",
        detailText:
          "Connect with coaches directly, you can ping coaches to view profile.",
        bgcolor: "#ffffff",
      },
      {
        title: "COLLABORATION",
        numberStr: "02",
        detailText:
          "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
        bgcolor: "#F5F4F9",
      },
      {
        title: "GROWTH",
        numberStr: "03",
        detailText:
          "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ",
        bgcolor: "#5E3DB3",
      },
    ],
  },
  {
    title: "PLAYERS",
    imageSection: <BasketBallImageSection />,
    alternateDisplay: true,
    details: [
      {
        title: "CONNECTION",
        numberStr: "01",
        detailText:
          "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
        bgcolor: "#ffffff",
      },
      {
        title: "COLLABORATION",
        numberStr: "02",
        detailText:
          "Work with recruiter to increase your chances of finding talented athlete.",
        bgcolor: "#F5F4F9",
      },
      {
        title: "GROWTH",
        numberStr: "03",
        detailText: "Save your time, recruit proper athlets for your team.",
        bgcolor: "#090C35",
      },
    ],
  },
];

function HomePage() {
  return (
    <PageContainer>
      {data.map((sectionData, index) => (
        <InfoSection key={sectionData.title} sectionData={sectionData} />
      ))}
    </PageContainer>
  );
}

export default HomePage;
