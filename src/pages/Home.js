import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import ProblemsTable from "../components/ProblemsTable";
import SessionCard from "../components/SessionCard";
import "../styles/Home.css"
import TopInterviewQuestionPNG from "../assets/images/TopInterviewQuestion.png";
export default function Home() {
  const list = [
    {
      title: "Orange",
      img: TopInterviewQuestionPNG, 
    },
    {
      title: "Tangerine",
      img: TopInterviewQuestionPNG,
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: TopInterviewQuestionPNG,
      price: "$10.00",
    },
    {
      title: "Raspberry",
      img: TopInterviewQuestionPNG,
      price: "$10.00",
    }
  ];

  return (
    <div class="home-container">
      <div className="main-content">
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-20 mb-20">
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
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <ProblemsTable />
      </div>
      <div className="side-content">
        <SessionCard />
      </div>
    </div>
  );
}
