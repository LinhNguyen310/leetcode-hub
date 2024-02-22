
'use client';

import { Carousel } from 'flowbite-react';
import InterviewCrashCourse from "../assets/images/InterviewCrashCourse.jpeg"
import InterviewQuestion from "../assets/images/TopInterviewQuestion.png"
import DSA from "../assets/images/DSALeetcode.png"
export default function Slider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={InterviewCrashCourse} alt="..." />
        <img src={InterviewQuestion} alt="..." />
        <img src={DSA} alt="..." />
      </Carousel>
    </div>
  );
}
