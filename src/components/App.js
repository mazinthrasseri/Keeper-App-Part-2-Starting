import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes.js";

function useNotes(mynote) {
  return <Note title={mynote.title} content={mynote.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {Notes.map(useNotes)}

      <Footer />
    </div>
  );
}

export default App;
