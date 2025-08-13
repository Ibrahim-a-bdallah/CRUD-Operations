// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

//     export const rowsItem = Categories.map(user => ({
//      requestNo: user.requestNo,
//      name:user.name,
//      description:user.description,
//      price:user.price,
//      brand:user.brand,
//      category:user.category,
 
//    }));


// export default function Rows() {
//     const [Categories, setCategories] = useState([])

//     async function getCategories() {
//       let {data} =  await axios.get("http://localhost:5000/api/items")
//       setCategories(data)
      
//     }
//     useEffect(() => {
//       getCategories()
//     }, [])


    

//     return (
//         <>
    
//     </>
//   )
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';

export let rowsItem  = []
export default function Rows() {
  const [getData, setGetData] = useState([]);

  async function getCategories() {
    let { data } = await axios.get("http://localhost:5000/api/items")
    .then(()=>{
        
        setGetData(data.data);
        console.log(getData);
        
      })
    .catch((error)=>{
        console.log(error);
        
    })
    console.log("hi");
    
  }

  useEffect(() => {
    getCategories();
  }, []);

   rowsItem = getData.map(user => ({
    requestNo: user.requestNo,
    name: user.name,
    description: user.description,
    price: user.price,
    brand: user.brand,
    category: user.category,
  }));
console.log(getData);

  return (
    <>
      
    </>
  );
}