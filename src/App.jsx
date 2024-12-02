import { useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function showModalHandler(type) {
    setIsModalOpen(type);
  }

  return (
    <>
      <MainHeader showModalHandler={showModalHandler} />
      <main>
        <PostsList
          isModalOpen={isModalOpen}
          showModalHandler={showModalHandler}
        />
      </main>
    </>
  );
}

export default App;
