import React from "react";
import { Routes, Route } from "react-router-dom";
import MemeGenerator from "./MemeGenerator";
import HomePage from "./HomePage";
function App() {
  const url = "https://api.imgflip.com/get_memes";
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setImages(data.data.memes);
        // return console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage images={images} />}></Route>
        <Route path="meme/:memeId" element={<MemeGenerator />}></Route>
      </Routes>
    </div>
  );
}

export default App;
