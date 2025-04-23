import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { User, Chip, Tooltip } from "@heroui/react";
import { Meme } from "@/api/getMemes";
import { EditIcon } from "@/components/icons";

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "description",
    label: "DESCRIPTION",
  },
  {
    key: "ratio",
    label: "RATIO",
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];

export default function TablePage() {
  const [formattedData, setFormattedData] = useState();
  const data = useAppSelector((state) => state.memes.memes);

  useEffect(() => {
    data &&
      data.length > 0 &&
      setFormattedData(
        data.map((el, index) => ({
          key: index + 1,
          name: el.description.split(" ", 2).join(" "),
          description: el.description,
          ratio: ((el.ratio || 0) * 100).toFixed(0),
        }))
      );
  }, [data]);
  console.log(formattedData);

  // const renderCell = React.useCallback((meme: Meme, columnKey) => {
  //   const cellValue = meme[columnKey];

  //   switch (columnKey) {
  //     case "name":
  //       return (
  //         <User
  //           avatarProps={{ radius: "lg", src: user.avatar }}
  //           description={user.email}
  //           name={cellValue}
  //         >
  //           {user.email}
  //         </User>
  //       );
  //     case "role":
  //       return (
  //         <div className="flex flex-col">
  //           <p className="text-bold text-sm capitalize">{cellValue}</p>
  //           <p className="text-bold text-sm capitalize text-default-400">
  //             {user.team}
  //           </p>
  //         </div>
  //       );
  //     case "status":
  //       return (
  //         <Chip
  //           className="capitalize"
  //           color={statusColorMap[user.status]}
  //           size="sm"
  //           variant="flat"
  //         >
  //           {cellValue}
  //         </Chip>
  //       );
  //     case "actions":
  //       return (
  //         <div className="relative flex items-center gap-2">
  //           <Tooltip content="Edit meme">
  //             <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
  //               <EditIcon />
  //             </span>
  //           </Tooltip>
  //         </div>
  //       );
  //     default:
  //       return cellValue;
  //   }
  // }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Table</h1>
          {/* <Table aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.key}
                  align={column.key === "actions" ? "center" : "start"}
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={formattedData}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table> */}
        </div>
      </section>
    </DefaultLayout>
  );
}
