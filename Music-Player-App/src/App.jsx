import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Bigscreen from "./components/Bigscreen";
import Registration from "./components/Registration"; // Updated import
import { songsData } from "./assets/assets";

function Home() {
  const [count, setCount] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [keyword, setKeyword] = useState("");

  const getTracks = () => {
    if (keyword === "") {
      setTracks(songsData);
    } else {
      const filteredTracks = songsData.filter(
        (song) => song.name.toLowerCase() === keyword.toLowerCase()
      );

      setTracks(filteredTracks);
      setCount(filteredTracks.length);

      console.log(filteredTracks);
    }
  };

  return (
    <>
      <Navbar getData={getTracks} keyword={keyword} setKeyword={setKeyword} />
      <Cards tracks={tracks} />
      <Bigscreen />
    </>
  );
}

function App() {
  return (
    <Router basename="/Music-Player-App">
      {" "}
      {/* Set basename to match GitHub Pages subdirectory */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
