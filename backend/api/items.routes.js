import express from "express";
import multer from "multer";
import {
  addItem,
  getItems,
  getItemByCategory,
  getItemByName,
  getItemsById,
  listItemsById,
  updateItem,
  discountItem,
  removeDiscount,
  hideItem,
  showItem,
  deleteItem,
  test,
} from "../controllers/item.controller.js";

import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// refrenced from my old work

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  // uploads is the name of the folder
  filename: (req, file, cb) => {
    const { originalname } = file;
    // or
    // uuid, or fieldname
    cb(null, originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

router.post("/add", upload.single("image"), addItem);
router.post("/update", upload.single("image"), updateItem);

// https://www.geeksforgeeks.org/how-to-fetch-images-from-node-js-server/
router.use("/images", express.static("uploads"));

router.post("/get", getItems);
router.post("/getByCategory", getItemByCategory);
router.post("/getByName", getItemByName);
//router.post("/getById/:id", getItemsById);
router.post("/getById", getItemsById);
router.post("/listById", listItemsById);
router.post("/discount", discountItem);
router.post("/removeDiscount", removeDiscount);
router.post("/hide", hideItem);
router.post("/show", showItem);
router.post("/delete", deleteItem);
router.get("/test", test);

export default router;
