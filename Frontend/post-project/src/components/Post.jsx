
const Post = ({ image_Url, caption }) => {
  return (
    <section id="post-card">
      <div className="card">
        <img id="post-image" src={image_Url} alt="Post Image" />
        <p>{caption}</p>
      </div>
    </section>
  )
}

export default Post