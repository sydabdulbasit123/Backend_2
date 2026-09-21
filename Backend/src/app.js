import express from "express";
import cors from "cors";
import multer from "multer";
import uploadfile from "./services/imagekit.service.js";
import postmodel from "./model/post.model.js";
const app = express();

const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());

app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadfile(req.file.buffer);
  const post = await postmodel.create({
    image_Url: result.url,
    caption: req.body.caption,
  });
  res.status(201).json({
    message: "Post created successfully",
    post,
  });
});

app.get("/posts", async (req, res) => {
  const posts = await postmodel.find();
  return res.status(200).json({
    message: "post fetched!!",
    posts,
  });
});
export default app;
