import React, { useEffect, useState } from "react";
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
import toast from "react-hot-toast";

const InstaCartPopup = ({ open, setOpen, item }) => {
  const [menuopen, setMenuopen] = useState("");
  const [itemlist, setItemlist] = useState("");
  const [listName, setListName] = useState("");
  const [exists, setExists] = useState(false);

  const getInstaCart = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          email: "user@example.com",
        }),
        redirect: "follow",
      };

      const response = await fetch("/api/users/getInstaCart", requestOptions);
      const data = await response.json();
      setItemlist(data);
      if (data.error) {
        setMenuopen("create");
      } else {
        setMenuopen("additem");
      }
    } catch (error) {
      console.error("Data Error getting instacart:", error);
    }
  };

  const handleListName = (letter) => {
    setListName(letter);
    const nameExists = itemlist.instaCart.lists.some(
      (list) => list.name === letter
    );

    if (nameExists) {
      setExists(true);
      toast.error("List Name already exists");
    } else {
      setExists(false);
    }
  };

  const create = async (e) => {
    e.preventDefault();

    if (!exists) {
      const updatedLists = [
        ...itemlist.instaCart.lists,
        {
          name: listName,
          items: [
            {
              itemId: item,
            },
          ],
        },
      ];

      console.log("update", updatedLists);

      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          email: "user@example.com",
          lists: updatedLists,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        const response = await fetch("/api/users/instaCart", requestOptions);
        const data = await response.json();
        console.log(data);

        setMenuopen("additem");
        getInstaCart();
      } catch (error) {
        console.error("Error creating list:", error);
      }
    }
  };

  const additem = async (name) => {
    // used chatgpt for updates Lists
    const updatedLists = itemlist.instaCart.lists.map((list) => {
      const itemExists = list.items.some(
        (existingItem) => existingItem.itemId === item
      );

      if (list.name === name && !itemExists) {
        return {
          ...list,
          items: [
            ...list.items,
            {
              itemId: item,
            },
          ],
        };
      }

      return list;
    });
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email: "user@example.com",
        lists: updatedLists,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("/api/users/instaCart", requestOptions);

      getInstaCart();
    } catch (error) {
      console.error("Error creating list:", error);
    }
  };

  useEffect(() => {
    getInstaCart();
  }, []);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Instacart</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-col">
              <button
                onClick={() => setMenuopen("create")}
                className="border rounded-md bg-blue-500 text-black p-2 font-bold"
              >
                Create
              </button>
              {menuopen === "list" ? (
                <div>
                  {itemlist.instaCart.lists.map((item) => {
                    return (
                      <div key={item.name}>
                        <h1>{item.name}</h1>
                      </div>
                    );
                  })}
                </div>
              ) : menuopen === "create" ? (
                <form onSubmit={create}>
                  <input
                    type="text"
                    value={listName}
                    onChange={(e) => {
                      handleListName(e.target.value);
                    }}
                    required
                    className="border rounded-md p-2"
                  />
                  <div>{exists && "name already exists"}</div>
                  <button type="submit">Create</button>
                </form>
              ) : menuopen === "additem" ? (
                <div>
                  {itemlist.instaCart.lists.map((item) => {
                    return (
                      <div key={item._id}>
                        <button
                          onClick={() => {
                            additem(item.name);
                            setOpen(false);
                          }}
                        >
                          {item.name}
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default InstaCartPopup;
