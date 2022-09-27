import React from "react";
// import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";

function MemeGenerator(props) {
  const location = useLocation();
//   console.log(props, " props");
// console.log(location, " useLocation Hook");
const template = location.state.template;
  
    return (<>
    <h1>Meme Generator</h1>
    <div className="d-flex">
      <div className="meme">
      <img src={template.url} alt="" />
      </div>
      <form>
        {
          <input type="text" />
        }
      </form>
    </div>
    </>);
}

export default MemeGenerator;