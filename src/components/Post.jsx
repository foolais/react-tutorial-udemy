/* eslint-disable react/prop-types */
import styles from "./Post.module.css";

function Post(props) {
  const { author, body } = props;

  return (
    <div className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </div>
  );
}

export default Post;
