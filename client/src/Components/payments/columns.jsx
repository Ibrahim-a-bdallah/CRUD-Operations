"use client";

// خاص بال ts  >> Deleted soooon
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/Components/ui/checkbox";
import { MoreVertical } from "lucide-react";
import DefaultHeader from "./default-header";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { ContextMenuShortcut } from "../ui/context-menu";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className=""
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "requestNo",
    header: (info) => (
      <DefaultHeader info={info} name="Request No." className="" />
    ),
    cell: ({ row }) => {
      const requestNo = row.original.requestNo;
      const status = row.original.status;

      return (
        <div
          className={`flex flex-col pl-3 border-l-4 border- ${
            status === "Urgent"
              ? "border-red-600 "
              : status === "Attention"
              ? "border-yellow-600"
              : "border-green-600 "
          }`}
        >
          <span className="font-bold">{requestNo}</span>
          <span
            className={`text-xs ${
              status === "Urgent"
                ? "text-red-600 "
                : status === "Attention"
                ? "text-yellow-600"
                : "text-green-600 "
            }`}
          >
            {status}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "area",
    header: (info) => <DefaultHeader info={info} name="Area" />,
  },
  {
    accessorKey: "date",
    header: (info) => <DefaultHeader info={info} name="Date" />,
  },
  {
    accessorKey: "needDate",
    header: (info) => <DefaultHeader info={info} name="Need Date" />,
  },
  {
    accessorKey: "price",
    header: (info) => <DefaultHeader info={info} name="Price" />,
    cell: ({ row }) => `$${row.getValue("price")}`, // Format price
  },
  {
    accessorKey: "total",
    header: (info) => <DefaultHeader info={info} name="Total" />,
    cell: ({ row }) => `$${row.getValue("total")}`, // Format price
  },
  {
    accessorKey: "materials",
    header: (info) => <DefaultHeader info={info} name="Materials / Products" />,
    cell: ({ row }) => {
      const materials = row.original.materials;

      return (
        <div className=" flex space-x-3">
          <span className="text-lg font-bold text-gray-800">{materials}</span>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Material </span>
            <span className="text-xs text-gray-500">requested</span>
          </div>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: (info) => <DefaultHeader info={info} name="Actions" />,
    cell: ({ row }) => {
      const requestId = row.getValue("requestNo");
      // SweetAlert2 for confirmation dialog
      const MySwal = withReactContent(Swal);
      const handleDelete = () => {
        MySwal.fire({
          title: "Are you sure?",
          text: `You are about to delete request ${requestId}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it",
          cancelButtonText: "cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform delete action here
            row.original.onDelete(row.original.requestNo);
            MySwal.fire(
              "Deleted!",
              `Request ${requestId} has been deleted.`,
              "success"
            );
          }
        });
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer ">
            <Button
              variant="ghost"
              size="lg"
              className="h-8 w-8 p-0 text-white "
            >
              <span className="sr-only ">Open menu</span>
              <div className="bg-fuchsia-600 py-1  rounded-4xl ">
                <MoreVertical className="h-5 w-fit  bg-blue-60 0 " />
              </div>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="bg-white border-gray-300"
            align="end"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <DropdownMenuLabel className="font-bold   border-gray-300 mb-2">
              Actions
            </DropdownMenuLabel>
            {/* <DropdownMenuItem onClick={() => alert(`View Request ${requestId}`)}>
                            View
                            </DropdownMenuItem> */}
            <DropdownMenuItem
              className="text-green-600 cursor-pointer"
              onClick={() => alert(`Edit Request ${requestId}`)}
            >
              Edit
              <ContextMenuShortcut>
                <FaRegEdit />
              </ContextMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              className="text-red-600 pt-0 cursor-pointer"
              onClick={() => handleDelete()}
            >
              Delete
              <ContextMenuShortcut>
                <MdDelete />
              </ContextMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
