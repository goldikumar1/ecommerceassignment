import React, { useState } from "react";

const Comments = ({ user }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Jimin Park",
      product: "Apple",
      rating: 5,
      comment: "Great product!",
      image: null,
    },
    {
      id: 2,
      name: "Jungkook",
      product: "Mangoes",
      rating: 4,
      comment: "Very useful, but a bit expensive.",
      image: null,
    },
  ]);

  const [newComment, setNewComment] = useState({
    name: user || "Anonymous",
    product: "",
    rating: "",
    comment: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setNewComment((prevComment) => ({
      ...prevComment,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newComment.name && newComment.product && newComment.rating && newComment.comment) {
      setComments((prevComments) => [
        ...prevComments,
        { ...newComment, id: prevComments.length + 1 },
      ]);

      setNewComment({
        name: user || "Anonymous",
        product: "",
        rating: "",
        comment: "",
        image: null,
      });

      alert("Comment added successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Comments and Reviews</h1>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div style={{ margin: "10px 0" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newComment.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{ padding: "5px", width: "100%" }}
          />
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>Product:</label>
          <input
            type="text"
            name="product"
            value={newComment.product}
            onChange={handleChange}
            placeholder="Product name"
            required
            style={{ padding: "5px", width: "100%" }}
          />
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>Rating (1-5):</label>
          <input
            type="number"
            name="rating"
            value={newComment.rating}
            onChange={handleChange}
            placeholder="Enter rating"
            min="1"
            max="5"
            required
            style={{ padding: "5px", width: "100%" }}
          />
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>Comment:</label>
          <textarea
            name="comment"
            value={newComment.comment}
            onChange={handleChange}
            placeholder="Enter your comment"
            required
            style={{ padding: "5px", width: "100%", height: "100px" }}
          ></textarea>
        </div>

        <div style={{ margin: "10px 0" }}>
          <label>Upload Image:</label>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            style={{ padding: "5px" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit Comment
        </button>
      </form>

      {/* Display Comments */}
      <div>
        {comments.map((comment) => (
          <div key={comment.id} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
            <h3>{comment.name} (Rating: {comment.rating})</h3>
            <p><strong>Product:</strong> {comment.product}</p>
            <p>{comment.comment}</p>
            {comment.image && <img src={comment.image} alt="uploaded" style={{ maxWidth: "100%" }} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
