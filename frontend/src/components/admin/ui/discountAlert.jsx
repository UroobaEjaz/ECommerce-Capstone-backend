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

const DiscountAlert = ({ open, setOpen, items }) => {
  const [nameUpdate, setNameUpdate] = useState("");
  const [imageUpdate, setImageUpdate] = useState(null);
  const [priceUpdate, setPriceUpdate] = useState("");
  const [categoryUpdate, setCategoryUpdate] = useState("");
  const [descriptionUpdate, setDescriptionUpdate] = useState("");
  const [countInStockUpdate, setCountInStockUpdate] = useState("");
  const [idupdate, setIdupdate] = useState("");

  const discountItem = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      ids: ["66862871464daff9e67b6c3e", "66862139aa62e9ecf6f521c3"],
      discountPercentage: 25,
      discountStart: "2024-07-05T00:00:00.000Z",
      discountEnd: "2024-07-15T23:59:59.000Z",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("/api/items/discount", requestOptions);
      const result = await response.json();
      console.log(result);
      getItems();
    } catch (error) {
      console.error(error);
    }
  };

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

export default DiscountAlert;
