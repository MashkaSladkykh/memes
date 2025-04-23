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

export const EditIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M2.5 18.3333H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

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
