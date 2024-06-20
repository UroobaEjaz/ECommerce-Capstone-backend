import express from "express";
import multer from "multer";
import {
  addItem,
  getItems,
  getItemByCategory,
  getItemByName,
} from "../controllers/item.controller.js";

const router = express.Router();

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

// https://www.geeksforgeeks.org/how-to-fetch-images-from-node-js-server/
router.use("/images", express.static("uploads"));

router.post("/get", getItems);
router.post("/getByCategory", getItemByCategory);
router.post("/getByName", getItemByName);
router.post("/getById/:id", getItemsById);

export default router;
