import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  image_Url: String,
  caption: String,
});

const postModel = mongoose.model("post", postSchema);
export default postModel;
