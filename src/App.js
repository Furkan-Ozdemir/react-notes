import { useEffect, useState } from "react";
import Main from "./Main";

function App() {
  const [notes, setNotes] = useState({});

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch(
        "https://react-notes-91c95-default-rtdb.europe-west1.firebasedatabase.app/notes.json"
      );
      const data = await response.json();
      setNotes(data);
      console.log(data);
    };
    fetchNotes();
  }, []);
  console.log(notes);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        overflow: "hidden",
      }}
      className="App"
    >
      <Main notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
