import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import SessionDonutChart from "./SessionDonutChart";

export default function SessionCard() {
  return (
    <Card className="py-4 mt-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <SessionDonutChart />
      </CardBody>
    </Card>
  );
}
