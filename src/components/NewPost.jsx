import styles from "./NewPost.module.css";

function NewPost() {
  return (
    <form className={styles.form}>
      <p className={styles.title}>New Post</p>
      <p>
        <label htmlFor="author">Your Name</label>
        <input type="text" id="author" required />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} />
      </p>
    </form>
  );
}

export default NewPost;
