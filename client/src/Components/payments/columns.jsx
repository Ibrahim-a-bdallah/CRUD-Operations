"use client"

// خاص بال ts  >> Deleted soooon
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }



import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/Components/ui/checkbox"
import { MoreVertical  } from "lucide-react"
import DefaultHeader from "./default-header"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




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
        header: (info ) => <DefaultHeader info={info} name="Request No." /> ,
    },
    {
        accessorKey: "area",
         header: (info ) => <DefaultHeader info={info} name="Area" />
    },
    {
        accessorKey: "date",
        header: (info ) => <DefaultHeader info={info} name="Date" /> ,
    },
    {
        accessorKey: "needDate",
        header:  (info ) => <DefaultHeader info={info} name="Need Date"/> ,
    },
    {
        accessorKey: "price",
        header: (info ) => <DefaultHeader info={info} name="Price"/> ,
        cell: ({ row }) => `$${row.getValue("price")}`,   // Format price
    },
    {
        accessorKey: "total",
        header: (info ) => <DefaultHeader info={info} name="Total"/>  ,
        cell: ({ row }) => `$${row.getValue("total")}`,   // Format price
    },
    {
        accessorKey: "materials",
        header:  (info ) => <DefaultHeader info={info} name="Materials / Products"/>  ,
    },
    {
        id: "actions",
         header:  (info ) => <DefaultHeader info={info} name="Actions"/>  ,
        cell: ({ row }) => {

            const requestId = row.getValue("requestNo")
            // SweetAlert2 for confirmation dialog
            const MySwal = withReactContent(Swal)
            const handleDelete = () => {
                MySwal.fire({
                    title: 'Are you sure?',
                    text: `You are about to delete request ${requestId}`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it',
                    cancelButtonText: 'cancel',
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Perform delete action here                                                
                         row.original.onDelete(row.original.id);
                        MySwal.fire('Deleted!', `Request ${requestId} has been deleted.`, 'success')
                    }
                })
            }
            return (
                <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" onCloseAutoFocus={(e) => e.preventDefault()}>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            {/* <DropdownMenuItem onClick={() => alert(`View Request ${requestId}`)}>
                            View
                            </DropdownMenuItem> */}
                            <DropdownMenuItem onClick={() => alert(`Edit Request ${requestId}`)}>
                            Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600" onClick={() => handleDelete()}>`
                            Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]