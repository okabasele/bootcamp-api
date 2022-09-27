import React from "react";
// import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";

function MemeGenerator(props) {
  const location = useLocation();
//   console.log(props, " props");
// console.log(location, " useLocation Hook");
const template = location.state.data;
  console.log(template);
    return (<>
    <div className="d-flex">
      <div className="meme">
      <img src={template.url} alt="" />
      </div>
      <form>
        {
          [...Array(template.box_count)].map((element,id)=>
          <input placeholder={`Entrez le texte ${id+1}`} type="text" />
          )
        }
      </form>
    </div>
    </>);
}

export default MemeGenerator;