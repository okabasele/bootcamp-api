import React from "react";
import { Routes, Route } from "react-router-dom";
import MemeGenerator from "./pages/MemeGenerator";
import NewMeme from "./pages/NewMeme";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
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
      <Header/>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<HomePage images={images} />}></Route>
        <Route path="meme/:memeId" element={<MemeGenerator />}></Route>
        <Route path="generated" element={<NewMeme />}></Route>
      </Routes>

      </div>
    </div>
  );
}

export default App;
