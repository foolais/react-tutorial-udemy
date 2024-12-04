/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./NewPost.module.css";

function NewPost(props) {
  const { onClose, addPostHandler } = props;

  const [newPost, setNewPost] = useState({
    author: "",
    body: "",
  });

  function postChangeHandler(event, type) {
    const { value } = event.target;

    setNewPost((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    addPostHandler(newPost);
    onClose();
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p className={styles.title}>New Post</p>
      <p>
        <label htmlFor="author">Your Name</label>
        <input
          type="text"
          id="author"
          required
          onChange={(event) => postChangeHandler(event, "author")}
        />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={(event) => postChangeHandler(event, "body")}
        />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
