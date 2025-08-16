import React from "react";
import { FaCaretSquareDown, FaCaretSquareUp } from "react-icons/fa";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function DefaultHeader({ info, name }) {
  const { table } = info;
  const sorted = info.column.getIsSorted();
  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger
          onPointerDown={(e) => {
            e.preventDefault();
            if (e.button === 2) return;
            info.column.toggleSorting(info.column.getIsSorted() === "asc");
          }}
          className="w-full h-full flex flex-row items-center justify-start gap-4 cursor-default "
        >
          {name}
          {sorted === "asc" && <FaCaretSquareDown />}
          {sorted === "desc" && <FaCaretSquareUp />}
        </ContextMenuTrigger>

        <ContextMenuContent
          onCloseAutoFocus={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          className="bg-white border-gray-300"
        >
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => (
              <ContextMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </ContextMenuCheckboxItem>
            ))}
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
}
