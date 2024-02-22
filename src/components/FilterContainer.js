import React from "react";
import {Button} from "@nextui-org/react";
import SearchBar from "./SearchBar";
import RandomPickContainer from "./RandomPickContainer";

export default function FilterContainer() {
  return (
    <div className="flex mt-2 mb-2 gap-4 items-center">
      <Button radius="full">
        Full
      </Button>
      <Button radius="lg">
        Large
      </Button>  
      <Button radius="md">
        Medium
      </Button>  
      <Button radius="sm">
        Small
      </Button>  
      <Button radius="none">
        None
      </Button>  
      <SearchBar />
      <RandomPickContainer />
    </div>
  );
}
