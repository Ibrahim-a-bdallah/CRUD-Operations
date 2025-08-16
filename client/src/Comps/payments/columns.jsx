import { Button } from "@/Comps/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Comps/ui/dropdown-menu";
import { Checkbox } from "@/Comps/ui/checkbox";
import { MoreVertical } from "lucide-react";
import DefaultHeader from "./default-header";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { ContextMenuShortcut } from "@/Comps/ui/context-menu";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { openModule } from "@/store/module/moduleSlice";
import actDeleteItems from "@/store/delete/actDeleteItems";
import actGetItems from "@/store/get/actGetItems";
// import { useState } from "react";

export const columns = (dispatch) => [
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
    accessorKey: "id",
    header: (info) => <DefaultHeader info={info} name="id" />,
  },
  {
    accessorKey: "name",
    header: (info) => <DefaultHeader info={info} name="Name" />,
  },
  {
    accessorKey: "category",
    header: (info) => <DefaultHeader info={info} name="Category" />,
  },
  {
    accessorKey: "price",
    header: (info) => <DefaultHeader info={info} name="Price" />,
    cell: ({ row }) => `$${row.getValue("price")}`, // Format price
  },
  {
    accessorKey: "description",
    header: (info) => <DefaultHeader info={info} name="Description" />,
    // cell: ({ row }) => `$${row.getValue("total")}`, // Format price
  },

  {
    id: "actions",
    header: (info) => <DefaultHeader info={info} name="Actions" />,
    cell: ({ row }) => {
      const name = row.getValue("name");
      const id = row.getValue("id");
      // SweetAlert2 for confirmation dialog
      const MySwal = withReactContent(Swal);
      const handleDelete = () => {
        MySwal.fire({
          title: "Are you sure?",
          text: `You are about to delete  ${name}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it",
          cancelButtonText: "cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform delete action here
            // row.original.onDelete(row.original.name);
            dispatch(actDeleteItems(id)).then(() => {
              dispatch(actGetItems());
            });
            MySwal.fire("Deleted!", `${name} has been deleted.`, "success");
          }
        });
      };
      const handleEdit = () => {
        dispatch(openModule({ type: "Update", productInfo: row.original }));
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
              onClick={handleEdit}
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
