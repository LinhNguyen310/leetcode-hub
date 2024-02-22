import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import SessionDonutChart from "./SessionDonutChart";
import SessionSelectionDropdown from "./SessionSelectionDropdown";

export default function SessionCard() {
  return (
    <Card className="py-4">
      <CardHeader className="flex-col-reverse items-center md:flex-row md:justify-between">
        <h4 className="font-bold text-large ml-5">Session</h4>
        <div className="mr-5">
          <SessionSelectionDropdown />
        </div>
      </CardHeader>
      <CardBody className="flex-row overflow-visible py-2 flex justify-center items-center">
        <SessionDonutChart />
        <div className="flex flex-col ml-10 gap-8"> {/* Increased gap with ml-8 */}
          <div class="flex">
            <p class="text-green-700">Easy</p>
            <p>: 70/ 100</p>
          </div>
          <div class="flex">
            <p class="text-orange-400">Medium</p>
            <p>: 70/ 100</p>
          </div>
          <div class="flex">
            <p class="text-red-500">Hard</p>
            <p>: 70/ 100</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
