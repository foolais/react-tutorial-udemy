/* eslint-disable react/prop-types */
import { MdMessage, MdPostAdd } from "react-icons/md";
import stlyes from "./MainHeader.module.css";

function MainHeader({ showModalHandler }) {
  return (
    <header className={stlyes.header}>
      <h1 className={stlyes.title}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button
          className={stlyes.button}
          onClick={() => showModalHandler(true)}
        >
          <MdPostAdd size={18} />
          Add New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
