import { useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { songsData } from "./assets/assets";
import Bigscreen from "./components/Bigscreen";
function App() {
  const [count, setCount] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [keyword, setKeyword] = useState("");

  const getTracks = () => {
    if (keyword == "") {
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
      <Bigscreen></Bigscreen>
    </>
  );
}

export default App;
