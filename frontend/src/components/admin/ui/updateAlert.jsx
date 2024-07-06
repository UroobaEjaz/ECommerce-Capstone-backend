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

const UpdateAlert = ({
  open,
  setOpen,
  updateItem,
  setNameUpdate,
  setImageUpdate,
  setPriceUpdate,
  setCategoryUpdate,
  setDescriptionUpdate,
  setCountInStockUpdate,
}) => {
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
