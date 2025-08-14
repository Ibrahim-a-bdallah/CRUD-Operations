import React from "react"
import { columns } from "./columns"  
import { DataTable } from "./data-table"
import { data } from "@/lib/data"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"



// الجزء دا هستخدمه وانا بجيب الداتا من ال >>> api بدل من page.jsx

// async function getData()
// // : Promise<Payment[]> 
// {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }


// export default async function DemoPage() {

//     // الجزء دا هستخدمه وانا بجيب الداتا من ال >>> api بدل من page.jsx  
//     //   const data = await getData()

//   return (
//     <div className="container mx-auto py-10">
//       <DataTable columns={columns} data={data} />
//     </div>
//   )
// }




// deleted this function after get data from api

export default function DemoPage() {
 const [Data , setData] = useState(data);
//  const [products, setProducts] = useState([]);

  // Fetching data from an API (example)
  // You can replace this with your actual API call
  
//  useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((res) => {
//         console.log(res.data.products);
//         setProducts(res.data.products);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, []);
 ////////////////////////////////////////////////////
 const hundleDelete = (id) => {
    setData((prevData) => prevData.filter(item => item.requestNo !== id));
  }
  const dataWithDelete = Data.map((item) => ({    
    ...item,
    onDelete: hundleDelete,
  }));


  return (
    <div className="container mx-auto py-10 px-3">
      <DataTable columns={columns} data={dataWithDelete} />
      
    </div>
    
    
  )
}