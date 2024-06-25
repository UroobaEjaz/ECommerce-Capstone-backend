import express from "express";
import multer from "multer";
import {
  addItem,
  getItems,
  getItemByCategory,
  getItemByName,
  getItemsById,
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

/* ----Remove from here , if it does not work---- */

// Route to handle visual search
{
  /*router.post("/visualSearch", upload.single("image"), async (req, res) => {
  try {
    // Logic to process the uploaded image for visual search
    const imageUrl = `uploads/${req.file.filename}`; // Path to uploaded image

    // Perform visual search logic (example: dummy response)
    const visualSearchResults = await performVisualSearch(imageUrl);

    res.json(visualSearchResults);
  } catch (error) {
    console.error("Error performing visual search:", error);
    res.status(500).json({ error: "Failed to perform visual search" });
  }
}); */
}

/*------------Till here----------------- */

// https://www.geeksforgeeks.org/how-to-fetch-images-from-node-js-server/
router.use("/images", express.static("uploads"));

router.post("/get", getItems);
router.post("/getByCategory", getItemByCategory);
router.post("/getByName", getItemByName);
//router.post("/getById/:id", getItemsById);

export default router;
