import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { closeModule, openModule } from "@/store/module/moduleSlice";
import { resetItems } from "@/store/create/itemsSlice";
import { Loader } from "lucide-react";
import actPostItem from "@/store/create/actpostItems";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 5 characters.",
  }),
  price: z
    .number({
      invalid_type_error: "Price must be a number",
    })
    .min(0, {
      message: "Price must be a positive number.",
    }),
  category: z.string().min(1, {
    message: "Category is required.",
  }),
});

export function ProfileForm() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);
  const { type } = useSelector((state) => state.module);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: items?.[0]?.name || "",
      description: items?.[0]?.description || "",
      price: items?.[0]?.price || 0,
      category: items?.[0]?.category || "",
    },
  });

  function onSubmit(data) {
    setIsSubmitted(true);
    if (type === "Update") {
      // dispatch(actUpdateItem(data, items[0].id));
    } else {
      dispatch(actPostItem(data));
    }
  }
  useEffect(() => {
    if (isSubmitted && loading === "success") {
      dispatch(openModule({ type: "success" }));
      setIsSubmitted(false); // إعادة التهيئة عشان المرة الجاية
      // form.reset(); // لو بتستخدم react-hook-form
    }
  }, [loading, isSubmitted, dispatch]);
  if (error) {
    console.error("Error:", error);
    // dispatch(openModule({ type: "error", message: error }));
  }
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Name Field */}
          <div className="text-white w-full max-w-3xl rounded-lg flex flex-col sm:flex-row">
            {/* Left Section */}
            <div className="w-full bg-blue-950 sm:w-1/3 p-6 sm:p-8 flex flex-col justify-between">
              <h2 className="text-2xl font-light mb-6 sm:mb-10">
                Add a new Item
              </h2>

              <div className="mt-auto space-y-4">
                <Button
                  className="w-full cursor-pointer border border-fuchsia-600 py-2 rounded hover:bg-fuchsia-100 hover:text-pink-800"
                  onClick={() => {
                    dispatch(closeModule());
                    dispatch(resetItems());
                  }}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-fuchsia-700 py-2 rounded hover:bg-fuchsia-800"
                  disabled={loading === "pending"}
                >
                  {loading === "pending" ? (
                    <>
                      <Loader className="animate-spin h-2 w-2 text-white" />
                      Loading
                    </>
                  ) : type === "Update" ? (
                    "Update"
                  ) : (
                    "Add"
                  )}
                </Button>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full bg-blue-900 sm:w-2/3 p-6 sm:p-8 relative space-y-6">
              {/* Close Icon */}
              <button
                type="button"
                className="absolute text-2xl top-4 right-4 text-red-600 font-bold cursor-pointer"
                onClick={() => dispatch(closeModule())}
              >
                &times;
              </button>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description Field */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price Field */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Enter price"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Category Field */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter category" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

// import { closeModule, openModule } from "@/store/module/moduleSlice";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function Form({ onClose = null, onAdd = null }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [area, setArea] = useState("");
//   const [dateNeeded, setDateNeeded] = useState("");
//   const [materialCode, setMaterialCode] = useState("");
//   const [units, setUnits] = useState("");

//   const handleClose = () => {
//     dispatch(openModule({ type: "success" })); // Close the module using Redux action
//     // if (e && typeof e.preventDefault === "function") e.preventDefault();
//     // if (typeof onClose === "function") {
//     //   onClose();
//     // } else {
//     //   // لو الكومبوننت معمول كصفحة وحدها بدون prop، ارجع لصفحة سابقة
//     //   navigate(-1);
//     // }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!area || !dateNeeded || !materialCode || !units) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (typeof onAdd === "function") {
//       onAdd({ area, dateNeeded, materialCode, units });
//     }

//     // بعد الإضافة نقفل الفورم أيضاً
//     handleClose();

//     onAdd({ area, dateNeeded, materialCode, units });
//     setArea("");
//     setDateNeeded("");
//     setMaterialCode("");
//     setUnits("");
//   };

//   return (
//     <form>
//
//     </form>
//   );
// }
// export default Form;
