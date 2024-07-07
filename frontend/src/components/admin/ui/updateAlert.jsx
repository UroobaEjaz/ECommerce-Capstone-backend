import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const UpdateAlert = ({ open, setOpen, idupdate, getItems }) => {
  const [nameUpdate, setNameUpdate] = useState("");
  const [imageUpdate, setImageUpdate] = useState(null);
  const [priceUpdate, setPriceUpdate] = useState("");
  const [categoryUpdate, setCategoryUpdate] = useState("");
  const [descriptionUpdate, setDescriptionUpdate] = useState("");
  const [countInStockUpdate, setCountInStockUpdate] = useState("");

  const updateItem = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("image", imageUpdate);
    formdata.append("name", nameUpdate);
    formdata.append("price", priceUpdate);
    formdata.append("category", categoryUpdate);
    formdata.append("description", descriptionUpdate);
    formdata.append("countInStock", countInStockUpdate);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/api/items/update?id=${idupdate}`,
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      getItems();
      setOpen(false); // Close the dialog on success
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // used shadcnui's code for the update alert
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Update</AlertDialogTitle>
            <AlertDialogDescription>
              <div>
                <form onSubmit={updateItem}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    onChange={(e) => setNameUpdate(e.target.value)}
                  />
                  <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="image"
                    onChange={(e) => setImageUpdate(e.target.files[0])}
                  />
                  <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="price"
                    onChange={(e) => setPriceUpdate(e.target.value)}
                  />
                  <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="category"
                    onChange={(e) => setCategoryUpdate(e.target.value)}
                  />
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="description"
                    onChange={(e) => setDescriptionUpdate(e.target.value)}
                  />
                  <input
                    type="text"
                    name="countInStock"
                    id="countInStock"
                    placeholder="countInStock"
                    onChange={(e) => setCountInStockUpdate(e.target.value)}
                  />
                  <button type="submit">Continue</button>
                </form>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default UpdateAlert;
