import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Home</h1>
      <p>Go to <Link to="/posts/1">Sample Post</Link></p>
    </div>
  );
}

export default App;