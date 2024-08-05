import React, { useEffect, useState } from "react";
import { RxUpdate } from "react-icons/rx";
import { MdDiscount } from "react-icons/md";
import { CgPlayListRemove } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

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

  return (
    <div>
      <button onClick={() => console.log("items", itemsUpdate)}>{}</button>
      <div>
    
      <div className="fixed top-0 left-0 w-full bg-gray-800 py-3 px-8 shadow-lg text-center z-50 mb-4">
        <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-300 text-lg">Manage the stock efficiently and effectively</p>
      </div>
      
      <div className="mt-24 flex flex-col items-center space-y-4 mb-6">
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => setOpen("Add")}
            className="px-4 py-2 bg-red-700 text-white rounded"
          >
            Add
          </button>
          <button
            onClick={() => setOpen("Discount")}
            className="px-4 py-2 bg-yellow-800 text-white rounded"
          >
            Discount
          </button>
          <button
            onClick={() => setOpen("Delete")}
            className="px-4 py-2 bg-gray-600 text-white rounded"
          >
            Delete
          </button>
          <button
            onClick={() => setOpen("Hide")}
            className="px-4 py-2 bg-green-800 text-white rounded"
          >
            Hide
          </button>
          <button
            onClick={() => setOpen("Show")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Show
          </button>
        </div>
  
      </div>
    </div>

      <div className="flex flex-col items-center">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-purple-700">
                  <tr>
                    <th className="px-6 py-2 text-lg font-semibold text-center">
                      Select
                    </th>
                    <th className="px-6 py-2 text-lg font-semibold text-center">
                      Item Name
                    </th>
                    <th className="px-6 py-2 text-lg font-semibold text-center">
                      Item Price
                    </th>
                    <th className="px-6 py-2 text-lg font-semibold text-center">
                      Item Quantity
                    </th>
                    <th className="px-6 py-2 text-lg font-semibold text-center">
                      Item Show
                    </th>
                    <th className="px-6 py-2 text-lg font-semibold text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {items.map((item) => (
                    <tr
                      key={item._id}
                      className="py-2 text-center border-b border-gray-200"
                    >
                      <td className="px-6 py-2 text-center">
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
                      </td>
                      <td className="px-6 py-2 text-center">{item.name}</td>
                      <td className="px-6 py-2 text-center">{item.price}</td>
                      <td className="px-6 py-2 text-center">
                        {item.countInStock}
                      </td>
                      <td className="px-6 py-2 text-center">
                        {item.show === true ? "showing" : "not showing"}
                      </td>
                      <td className="px-6 py-2 text-center">
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  {/*          <div className="flex flex-col items-center mt-4">
              <button
                onClick={() => setOpen("Add")}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add
              </button>
              <button
                onClick={() => setOpen("Discount")}
                className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
              >
                Discount
              </button>
              <button
                onClick={() => setOpen("Delete")}
                className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
              >
                Delete
              </button>
              <button
                onClick={() => setOpen("Hide")}
                className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
              >
                Hide
              </button>
              <button
                onClick={() => setOpen("Show")}
                className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
              >
                Show
              </button>
            </div>   */}
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
