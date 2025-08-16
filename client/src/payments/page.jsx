import React from "react";
import { columns as baseColumns } from "./columns";
import { DataTable } from "./data-table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actGetItems from "@/store/get/actGetItems";

export default function DemoPage() {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetItems());
  }, [dispatch]);
  const columns = baseColumns(dispatch, products);

  let rowsItem;
  if (products) {
    rowsItem = products.map((user) => ({
      id: user.id,
      requestNo: user.requestNo,
      name: user.name,
      description: user.description,
      price: user.price,
      brand: user.brand,
      category: user.category,
    }));
  }

  return (
    <div className="container mx-auto py-10 px-3">
      <DataTable columns={columns} data={rowsItem} />
    </div>
  );
}
