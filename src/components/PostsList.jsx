/* eslint-disable react/prop-types */
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useState } from "react";

function PostList({ isModalOpen, showModalHandler }) {
  const [newPost, setNewPost] = useState({
    author: "The Impostor",
    body: "Something here..",
  });

  function postChangeHandler(event, type) {
    const { value } = event.target;
    let newValues;
    if (type === "author") {
      newValues = value && value.length > 0 ? value : "The Impostor";
    } else if (type === "body") {
      newValues = value && value.length > 0 ? value : "Something here...";
    }

    setNewPost((prev) => {
      return {
        ...prev,
        [type]: newValues,
      };
    });
  }

  return (
    <>
      {isModalOpen ? (
        <Modal onClose={() => showModalHandler(false)}>
          <NewPost postChangeHandler={postChangeHandler} />
        </Modal>
      ) : null}
      <ul className={styles.postList}>
        <Post author="Author" body="Body Author" />
        <Post author="Co-Author" body="Body Co-Author" />
        <Post author={newPost.author} body={newPost.body} />
      </ul>
    </>
  );
}

export default PostList;
