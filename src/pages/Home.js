import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import ProblemsTable from "../components/ProblemsTable";
import SessionCard from "../components/SessionCard";
import "../styles/Home.css"
import TopInterviewQuestionPNG from "../assets/images/TopInterviewQuestion.png";
import DSALeetcode from "../assets/images/DSALeetcode.png"
import InterviewCrashCourse from "../assets/images/InterviewCrashCourse.jpeg"
import TagContainer from "../components/TagContainer";
import FilterContainer from "../components/FilterContainer";
import Slider from "../components/Slider";
import ChatApp from "../ChatApp";
export default function Home() {
  const list = [
    {
      img: TopInterviewQuestionPNG, 
    },
    {
      img: DSALeetcode,
    },
    {
      img: InterviewCrashCourse,
    },
    {
      img: TopInterviewQuestionPNG,
    }
  ];

  return (
    <div class="home-container">
      <div className="main-content">
        <Slider />
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-5 mb-20">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
            </Card>
          ))}
        </div>
        <TagContainer />
        <FilterContainer />
        <ProblemsTable />
      </div>
      <div className="side-content">
        <SessionCard />
        <ChatApp />
      </div>
    </div>
  );
}
