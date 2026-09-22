import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formdata = new FormData();
    formdata.append("image", e.target.title.files[0]);
    formdata.append("caption", e.target.content.value);

    try {
      const res = await axios.post(
        "http://localhost:3000/create-post",
        formdata,
      );

      navigate("/feed"); // Redirect to the feed page after successful post creation

      e.target.reset(); // Reset the form fields
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle error state
    }
  };

  return (
    <section id="create-post">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Select Image:</label>
          <input type="file" id="title" name="title" accept="image" />
        </div>
        <div>
          <label htmlFor="content">Caption:</label>
          <textarea id="content" name="content"></textarea>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
