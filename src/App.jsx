import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post author="Author" body="Body" />
      <Post author="Co-Author" body="Body Co-Author" />
    </main>
  );
}

export default App;
