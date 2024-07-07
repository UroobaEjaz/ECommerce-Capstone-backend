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

export const HideAlert = ({ open, setOpen, items, getItems }) => {
  const hideItem = async () => {
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
      const response = await fetch("/api/items/hide", requestOptions);
      const result = await response.json();
      console.log(result);
      getItems();
    } catch (error) {
      console.error(error);
    }
  };

  // used shadcnui's code for the update alert
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hide Confermation</AlertDialogTitle>
            <AlertDialogDescription>
              <div>
                <p>Are you sure you want to hide this item?</p>
                <div className="flex justify-center">
                  <AlertDialogAction as="button" onClick={() => hideItem()}>
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

export const ShowAlert = ({ open, setOpen, items, getItems }) => {
  const showItem = async () => {
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
      const response = await fetch("/api/items/show", requestOptions);
      const result = await response.json();
      console.log(result);
      getItems();
    } catch (error) {
      console.error(error);
    }
  };

  // used shadcnui's code for the update alert
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hide Confermation</AlertDialogTitle>
            <AlertDialogDescription>
              <div>
                <p>Are you sure you want to hide this item?</p>
                <div className="flex justify-center">
                  <AlertDialogAction as="button" onClick={() => showItem()}>
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
