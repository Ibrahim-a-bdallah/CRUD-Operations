"use client"
import React from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
//   SortingState,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
// import { Button } from "../ui/button"


// دا جزء ال interfase في ts

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[]
//   data: TData[]
// }

export function DataTable({columns, data}

    
    
    // دا جزء ال interfase في ts
    
    // : DataTableProps<TData, TValue>
) {


    // const [sorting, setSorting] = React.useState<SortingState>([])


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    //  onSortingChange: setSorting,
     getSortedRowModel: getSortedRowModel() 
    // state: {
    //   sorting,
    // }  
  })

  return (
    <div className="w-full flex flex-col gap-4 ">
        <div className="overflow-hidden  rounded-md  flex flex-2/3  max-h-[600px]">
        <Table>
                <TableHeader className= "sticky top-0 z-10 start-0 bg-white shadow-md ">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="border-gray-100 ">
                        {headerGroup.headers.map((header) => {
                            return (
                            <TableHead key={header.id} className="pb-5">
                                {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                    )}
                            </TableHead>
                            )
                        })}
                        </TableRow>
                    ))}
                </TableHeader>

                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                        <TableRow
                        className= {" hover:bg-gray-100 transition-colors "}
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                            
                        >
                            {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id} className="text-gray-700  py-3 text-sm font-medium border-b border-gray-300">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                            ))}
                        </TableRow>
                        ))
                    ) : (
                        <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center ">
                            No results.
                        </TableCell>
                        </TableRow>
                    )}
                </TableBody>
        </Table>
        </div>


        
        {/*  وكمان اللي هعملها(filter) , (selected)عشان اعرف عدد الصفوف المحدده */}
        <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

         {/* <div className="flex items-center justify-end space-x-2 py-4">
            <div className="text-muted-foreground flex-1 text-sm">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-3">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>    */}


    </div>
  )
}