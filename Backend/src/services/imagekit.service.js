import  ImageKit  from "imagekit";
import dotenv from "dotenv";
dotenv.config();


const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadfile = async (buffer) => {
  const result = await imagekit.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });
  return result;
};

export default uploadfile;