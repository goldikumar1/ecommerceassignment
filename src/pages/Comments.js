import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John Doe",
      product: "Product 1",
      rating: 5,
      comment: "Great product!",
    },
    {
      id: 2,
      name: "Jane Smith",
      product: "Product 2",
      rating: 4,
      comment: "Very useful, but a bit expensive.",
    },
  ]);

  const [newComment, setNewComment] = useState({
    name: "",
    product: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
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
        name: "",
        product: "",
        rating: "",
        comment: "",
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

        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Comment
        </button>
      </form>

      {/* Display Comments */}
      <h2>Customer Reviews</h2>
      {comments.length === 0 ? (
        <p>No reviews yet. Be the first to leave a comment!</p>
      ) : (
        comments.map((c) => (
          <div
            key={c.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{c.product}</h3>
            <p>
              <strong>{c.name}</strong> rated it {c.rating}/5
            </p>
            <p>{c.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
