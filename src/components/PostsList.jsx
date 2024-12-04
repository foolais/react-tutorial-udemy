/* eslint-disable react/prop-types */
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useState } from "react";

function PostList({ isModalOpen, showModalHandler }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(newPost) {
    setPosts((prev) => [...prev, newPost]);
  }

  return (
    <>
      {isModalOpen ? (
        <Modal>
          <NewPost
            onClose={() => showModalHandler(false)}
            addPostHandler={addPostHandler}
          />
        </Modal>
      ) : null}
      {posts && posts.length > 0 ? (
        <ul className={styles.postList}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "teal" }}>
          <h2>There are no posts yet.</h2>
          <p>start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
