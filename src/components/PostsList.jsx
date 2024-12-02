import Post from "./Post";
import styles from "./PostsList.module.css";

function PostList() {
  return (
    <ul className={styles.postList}>
      <Post author="Author" body="Body" />
      <Post author="Co-Author" body="Body Co-Author" />
    </ul>
  );
}

export default PostList;
