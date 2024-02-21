import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function PageSelectionDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState("20"); // Default selection

  const handleSelectionChange = (key) => {
    setSelectedKeys(key);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize" style={{ borderRadius: "0.50rem" }}>
          {selectedKeys}/ page
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="pointer-events-none ml-3" aria-hidden="true"><path fill-rule="evenodd" d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z" clip-rule="evenodd"></path></svg>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Page selection"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
        align="start" // Ensure the dropdown menu appears below the button
      >
        <DropdownItem key="20" onClick={() => handleSelectionChange("20")}>
          20/ page
        </DropdownItem>
        <DropdownItem key="50" onClick={() => handleSelectionChange("50")}>
          50/ page
        </DropdownItem>
        <DropdownItem key="100" onClick={() => handleSelectionChange("100")}>
          100/ page
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
