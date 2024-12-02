import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostsList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={styles.postList}>
        <Post author="Author" body="Body" />
        <Post author="Co-Author" body="Body Co-Author" />
      </ul>
    </>
  );
}

export default PostList;
