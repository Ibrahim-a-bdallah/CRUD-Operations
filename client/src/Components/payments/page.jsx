import React from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import axios from 'axios';
import  { useEffect, useState } from 'react';
// import { data } from "@/lib/data";
// import { useState } from "react";
// import  { rowsItem } from "./rows";

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
















// export let rowsItem  = []



export default function DemoPage() {

    const [getData, setGetData] = useState([]);

  async function getCategories() {
    try {
      const {data} = await axios.get("http://localhost:5000/api/items")
      setGetData(data);
      console.log(data);
      
    } catch (error) {
      console.log(error);
      
    }
    
  }

  useEffect(() => {
    getCategories();
  }, []);
  
  let rowsItem = getData.map(user => ({
    requestNo: user.requestNo,
    name: user.name,
    description: user.description,
    price: user.price,
    brand: user.brand,
    category: user.category,
  }));
console.log(getData);


  return (
    <div className="container mx-auto py-10 px-3">
      <DataTable columns={columns} data={rowsItem} />
    </div>
  );
}
