import React from "react";
import { Button } from "@nextui-org/react";

const Tag = ({ name, icon }) => {
  const buttonTextStyle = {
    fontFamily: "Inter, sans-serif", // Set the font family
    fontSize: "1rem", // Set the font size
  };

  return (
    <Button radius="full" style={buttonTextStyle}>
      {icon} {/* Render icon */}
      {name} {/* Render tag name */}
    </Button>
  );
};

export default Tag;
