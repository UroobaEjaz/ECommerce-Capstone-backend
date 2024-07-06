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
import { Checkbox } from "@/components/ui/checkbox";
import UpdateAlert from "@/components/admin/ui/updateAlert";

const Admin = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState("");

  const [itemsUpdate, setItemsUpdate] = useState([]);
  const [nameUpdate, setNameUpdate] = useState("");
  const [imageUpdate, setImageUpdate] = useState(null);
  const [priceUpdate, setPriceUpdate] = useState("");
  const [categoryUpdate, setCategoryUpdate] = useState("");
  const [descriptionUpdate, setDescriptionUpdate] = useState("");
  const [countInStockUpdate, setCountInStockUpdate] = useState("");
  const [idupdate, setIdupdate] = useState("");

  const [open, setOpen] = useState(false);

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

  const addItem = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("countInStock", countInStock);
    formData.append("normalPrice", price);

    try {
      const response = await fetch("/api/items/add", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      getItems();
    } catch (error) {
      console.log("error adding item", error);
    }
  };

  const removeDiscount = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      ids: ["66862871464daff9e67b6c3e", "66862139aa62e9ecf6f521c3"],
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

  const deleteItem = async (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ _id: id });

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

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <button onClick={() => console.log("items", itemsUpdate)}>click</button>
      <div className="flex flex-col">
        <form onSubmit={addItem}>
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
                              setOpen(true);
                              setIdupdate(item._id);
                              setNameUpdate(item.name);
                              setImageUpdate(item.image);
                              setPriceUpdate(item.price);
                              setCategoryUpdate(item.category);
                              setDescriptionUpdate(item.description);
                              setCountInStockUpdate(item.countInStock);
                            }}
                          >
                            <div className="flex-1">
                              <RxUpdate />
                            </div>
                            <div className="flex-auto">Update</div>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="justify-center ml-2"
                            onClick={() => discountItem()}
                          >
                            <div className="flex-1">
                              <MdDiscount />
                            </div>
                            <div className="flex-auto">Discount</div>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="justify-center ml-2"
                            onClick={() => removeDiscount()}
                          >
                            <div className="flex-1">
                              <CgPlayListRemove />
                            </div>
                            <div className="flex-auto">Remove</div>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="justify-center ml-2"
                            onClick={() => deleteItem(item._id)}
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
      {open && (
        <UpdateAlert
          open={open}
          setOpen={setOpen}
          setNameUpdate={setNameUpdate}
          setImageUpdate={setImageUpdate}
          setPriceUpdate={setPriceUpdate}
          setCategoryUpdate={setCategoryUpdate}
          setDescriptionUpdate={setDescriptionUpdate}
          setCountInStockUpdate={setCountInStockUpdate}
        />
      )}
    </div>
  );
};

export default Admin;
