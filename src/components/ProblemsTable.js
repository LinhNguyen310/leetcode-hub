import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { SolvedIcon } from "./SolvedIcon";
import { columns, users } from "../data";
import TablePagination from "./TablePagination";
import PageSelectionDropdown from "./PageSelectionDropdown";
import "../styles/Table.css";
const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function ProblemsTable() {
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
        case "difficulty":
            let difficultyColor = "";

            return <div className={`difficulty-${cellValue.toLowerCase()}`}>{cellValue}</div>;
    
      
      case "status":
        if (user.status === "solved") {
          return (
            <div>
              <SolvedIcon />
            </div>
          );
        } else {
          return null; // Don't render anything if status is not "solved"
        };
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item, index) => (
        <TableRow key={item.id} style={{ backgroundColor: item.id % 2 === 0 ? '#FFFFFF' : '#F3F4F6' }}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="mt-4 flex flex-col-reverse items-center md:flex-row md:justify-between">
        <div className="flex-end">
          <PageSelectionDropdown />
        </div>
        <TablePagination />
      </div>
    </div>
  );
}
