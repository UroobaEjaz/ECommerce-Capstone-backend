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

const Admin = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState("");

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

  // used chatgpt to fix this feature
  const addItem = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("countInStock", countInStock);

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

  const hideItem = async () => {};

  const deleteItem = async () => {};

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
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
                    key={item.name}
                    className="grid grid-cols-3 py-2 text-center border-b border-gray-200"
                  >
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
                          <DropdownMenuItem className="justify-center ml-2">
                            <div className="flex-1">
                              <CgPlayListRemove />
                            </div>
                            <div className="flex-auto">Remove</div>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="justify-center ml-2">
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
    </div>
  );
};

export default Admin;
