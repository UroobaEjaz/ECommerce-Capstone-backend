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

const DiscountAlert = ({ open, setOpen, items, getItems }) => {
  const [discountPercentUpdate, setDiscountPercentUpdate] = useState("");
  const [discountStart, setDiscountStart] = useState("");
  const [discountEnd, setDiscountEnd] = useState("");

  const discountItem = async (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      ids: items,
      discountPercentage: discountPercentUpdate,
      discountStart: discountStart,
      discountEnd: discountEnd,
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

  const removeDiscount = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      ids: items,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("/api/items/removeDiscount", requestOptions);
      const result = await response.json();
      console.log(result);
      getItems();
    } catch (error) {
      console.error(error);
    }
  };

  // used shadcnui's code for the discount alert
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Discount</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex flex-col">
                <div>
                  <button onClick={removeDiscount}>remove discount</button>
                </div>
                <form onSubmit={discountItem}>
                  <input
                    type="text"
                    name="discount"
                    id="discount"
                    placeholder="discount"
                    onChange={(e) => setDiscountPercentUpdate(e.target.value)}
                  />
                  <input
                    type="date"
                    name="discountStart"
                    id="discountStart"
                    placeholder="discountStart"
                    onChange={(e) => setDiscountStart(e.target.value)}
                  />
                  <input
                    type="date"
                    name="discountEnd"
                    id="discountEnd"
                    placeholder="discountEnd"
                    onChange={(e) => setDiscountEnd(e.target.value)}
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
