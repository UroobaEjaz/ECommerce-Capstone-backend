import express from "express";
import multer from "multer";
import {
  addItem,
  getItems,
  getItemByCategory,
} from "../controllers/item.controller.js";

const router = express.Router();

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

router.post("/add", addItem);
router.post("/get", getItems);
router.post("/getByCategory", getItemByCategory);

export default router;
