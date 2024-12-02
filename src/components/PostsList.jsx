import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostsList.module.css";
import { useState } from "react";

function PostList() {
  const [author, setAuthor] = useState("The Impostor");
  const [body, setBody] = useState("Something here...");

  function postChangeHandler(event, type) {
    const { value } = event.target;
    if (type === "author") {
      setAuthor(value && value.length > 0 ? value : "The Impostor");
    } else if (type === "body") {
      setBody(value && value.length > 0 ? value : "Something here..");
    }
  }

  return (
    <>
      <NewPost postChangeHandler={postChangeHandler} />
      <ul className={styles.postList}>
        <Post author="Author" body="Body Author" />
        <Post author="Co-Author" body="Body Co-Author" />
        <Post author={author} body={body} />
      </ul>
    </>
  );
}

export default PostList;
