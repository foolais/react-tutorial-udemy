/* eslint-disable react/prop-types */
import styles from "./NewPost.module.css";

function NewPost(props) {
  const { postChangeHandler, onClose } = props;

  return (
    <form className={styles.form}>
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
