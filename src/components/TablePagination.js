import React from "react";
import { Pagination } from "@nextui-org/react";

export default function TablePagination() {
  return (
    <Pagination
      isCompact
      showControls
      total={10}
      initialPage={1}
      classNames={{
        wrapper: "mb-6 md:mb-0 flex flex-nowrap items-center space-x-2 overflow-visible h-8 rounded",
        item: "w-8 h-8 text-small rounded-lg bg-default-100",
        cursor:
          "bg-default-300 text-default-500 rounded-lg text-black",
      }}
    />
  );
}
