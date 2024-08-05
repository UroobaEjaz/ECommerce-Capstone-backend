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

const DeleteAlert = ({ open, setOpen, items, getItems }) => {
  const deleteItem = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ ids: items });

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

  // used shadcnui's code for the delete alert
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Confirmation</AlertDialogTitle>
            <AlertDialogDescription>
              <div>
                <p>Are you sure you want to delete this item?</p>
                <div className="flex justify-center">
                  <AlertDialogAction
                    as="button"
                    onClick={() => deleteItem(items)  }
                    className ="px-4 py-2 mt-2 mr-5 bg-gray-300 text-gray-800 rounded hover:bg-blue-400"
                  >
                    Yes
                  </AlertDialogAction>
                  <AlertDialogCancel
                  className="px-4 py-2 mt-2 bg-gray-300 text-gray-800 rounded hover:bg-blue-400">Cancel</AlertDialogCancel>
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
