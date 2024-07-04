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
import { updateItem } from "@/components/admin/api/apiCalls";

const UpdateAlert = ({ open, setOpen }) => {
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
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="category"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <input
                    type="text"
                    name="countInStock"
                    id="countInStock"
                    placeholder="countInStock"
                    onChange={(e) => setCountInStock(e.target.value)}
                  />
                  <button type="submit">Add Item</button>
                </form>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="mt-2">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default UpdateAlert;
