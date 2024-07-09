import { RxUpdate } from "react-icons/rx";
import { MdDiscount } from "react-icons/md";
import { CgPlayListRemove } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UpdateAlert from "@/components/admin/ui/updateAlert";
import DiscountAlert from "@/components/admin/ui/discountAlert";
import DeleteAlert from "@/components/admin/ui/DeleteAlert";
import AddAlert from "@/components/admin/ui/addAlert";
import { HideAlert, ShowAlert } from "@/components/admin/ui/showHideAlert";

const Admin = () => {
  const [items, setItems] = useState([]);
  const [itemsUpdate, setItemsUpdate] = useState([]);
  const [idupdate, setIdupdate] = useState("");
  const [open, setOpen] = useState("false");

  const getItems = async () => {
    try {
      const response = await fetch("/api/items/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setItems(data);
      console.log(data);
    } catch (error) {
      console.log("error getting items", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  // used shadcnui's code
  return (
    <div>
      <button onClick={() => console.log("items", itemsUpdate)}>click</button>
      <div className="flex flex-col items-center">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <div className="bg-gray-100 text-center">
                <div className="py-2">
                  <span className="text-lg font-semibold">Item Name</span>
                </div>
                <div className="py-2">
                  <span className="text-lg font-semibold">Item Price</span>
                </div>
                <div className="py-2">
                  <span className="text-lg font-semibold">Item Quantity</span>
                </div>
                <div className="py-2">
                  <span className="text-lg font-semibold">Item show</span>
                </div>
              </div>
              <div className="flex flex-col">
                <button onClick={() => setOpen("Add")}>Add</button>
                <button onClick={() => setOpen("Discount")}>discount</button>
                <button onClick={() => setOpen("Delete")}>Delete</button>
                <button onClick={() => setOpen("Hide")}>Hide</button>
                <button onClick={() => setOpen("Show")}>Show</button>
              </div>
              <div className="bg-white">
                {items.map((item) => (
                  <div
                    key={item._id}
                    className="grid grid-cols-6 py-2 text-center border-b border-gray-200"
                  >
                    <div>
                      <input
                        type="checkbox"
                        checked={itemsUpdate.includes(item._id)}
                        onChange={() => {
                          if (itemsUpdate.includes(item._id)) {
                            setItemsUpdate(
                              itemsUpdate.filter((id) => id !== item._id)
                            );
                          } else {
                            setItemsUpdate([...itemsUpdate, item._id]);
                          }
                        }}
                      />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <div>{item.countInStock}</div>
                    <div>{item.show === true ? "showing" : "not showing"}</div>
                    <div>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-2xl">
                          <CiMenuKebab />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel className="text-center">
                            Item Options
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="justify-center ml-2"
                            onClick={() => {
                              setOpen("Update");
                              setIdupdate(item._id);
                            }}
                          >
                            <div className="flex-1">
                              <RxUpdate />
                            </div>
                            <div className="flex-auto">Update</div>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="justify-center ml-2"
                            onClick={() => {
                              setItemsUpdate([item._id]);
                              setOpen("Discount");
                            }}
                          >
                            <div className="flex-1">
                              <MdDiscount />
                            </div>
                            <div className="flex-auto">Discount</div>
                          </DropdownMenuItem>
                          {item.show === true ? (
                            <DropdownMenuItem
                              className="justify-center ml-2"
                              onClick={() => {
                                setItemsUpdate([item._id]);
                                setOpen("Hide");
                                console.log("hide", [item._id]);
                              }}
                            >
                              <div className="flex-1">
                                <CgPlayListRemove />
                              </div>
                              <div className="flex-auto">Hide</div>
                            </DropdownMenuItem>
                          ) : item.show === false ? (
                            <DropdownMenuItem
                              className="justify-center ml-2"
                              onClick={() => {
                                setItemsUpdate([item._id]);
                                setOpen("Show");
                              }}
                            >
                              <div className="flex-1">
                                <CgPlayListRemove />
                              </div>
                              <div className="flex-auto">Show</div>
                            </DropdownMenuItem>
                          ) : null}
                          <DropdownMenuItem
                            className="justify-center ml-2"
                            onClick={() => {
                              setItemsUpdate([item._id]);
                              setOpen("Delete");
                            }}
                          >
                            <div className="flex-1">
                              <MdDelete />
                            </div>
                            <div className="flex-auto">Delete</div>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {open === "Add" ? (
        <AddAlert open={open} setOpen={setOpen} getItems={getItems} />
      ) : open === "Update" ? (
        <UpdateAlert
          open={open}
          setOpen={setOpen}
          idupdate={idupdate}
          getItems={getItems}
        />
      ) : open === "Discount" ? (
        <DiscountAlert
          open={open}
          setOpen={setOpen}
          items={itemsUpdate}
          getItems={getItems}
        />
      ) : open === "Hide" ? (
        <HideAlert
          open={open}
          setOpen={setOpen}
          items={itemsUpdate}
          getItems={getItems}
        />
      ) : open === "Show" ? (
        <ShowAlert
          open={open}
          setOpen={setOpen}
          items={itemsUpdate}
          getItems={getItems}
        />
      ) : open === "Delete" ? (
        <DeleteAlert
          open={open}
          setOpen={setOpen}
          items={itemsUpdate}
          getItems={getItems}
        />
      ) : null}
    </div>
  );
};

export default Admin;