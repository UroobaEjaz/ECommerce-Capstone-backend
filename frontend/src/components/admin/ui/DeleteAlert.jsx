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

const DeleteAlert = ({ open, setOpen, items }) => {
  const deleteItem = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ _id: items });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("/api/items/delete", requestOptions);
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
            <AlertDialogTitle>Delete Confermation</AlertDialogTitle>
            <AlertDialogDescription>
              <div>
                <p>Are you sure you want to delete this item?</p>
                <div className="flex justify-center">
                  <AlertDialogAction
                    as="button"
                    onClick={() => deleteItem(items)}
                  >
                    Yes
                  </AlertDialogAction>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          {/* <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter> */}
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteAlert;
