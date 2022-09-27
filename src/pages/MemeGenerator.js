import React from "react";
// import ReactDOM from "react-dom";
import {useNavigate, useLocation} from "react-router-dom";
import authImgFlip from "./../utils/env-utils.js";

function MemeGenerator(props) {
  const apiUrl = "https://api.imgflip.com/caption_image";
  const navigate = useNavigate();
  const location = useLocation();
  const template = location.state.data;
  const [boxes, setBoxes] = React.useState(
    Array(template.box_count).fill({ text: "" })
  );
  // console.log(props, " props");
  // console.log(location, " useLocation Hook");
  // console.log(template);
  // console.log(boxes);

  React.useEffect(() => {}, [boxes]);

  function createMeme(e) {
    e.preventDefault();
    const auth = authImgFlip();
    // const data = {
    //   template_id: template.id,
    //   username: auth.username,
    //   password: auth.password,
    //   boxes: boxes,
    // };
    const postData = new FormData();
    postData.append("template_id",template.id);
    postData.append("username",auth.username);
    postData.append("password",auth.password);
    boxes.forEach((box, index) => postData.append(`boxes[${index}][text]`, box.text));

    fetch(apiUrl, {
      method: "POST",
      body: postData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data = ",data);
        if (data.success) {
          console.log("img url = ",data.data.url);
            navigate(`/generated?url=${data.data.url}`);

        } else {
          alert("Il y a une erreur : " + data.error_message);
        }
      });
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="meme me-4">
          <img src={template.url} alt="" />
        </div>
        <form>
          {[...Array(template.box_count)].map((_, id) => (
            <input
              className="mb-1 w-100"
              key={id}
              name="text"
              placeholder={`Entrez le texte ${id + 1}`}
              type="text"
              value={boxes[id].text}
              onChange={(e) => {
                const newBoxes = boxes.map((box, index) => {
                  // console.log("id box",index);
                  // console.log("id input",id);
                  if (index === id) {
                    // 👇️ change value
                    return { text: e.target.value };
                  }
                  return box;
                });
                // console.log("new boxes",newBoxes);
                setBoxes(newBoxes);
              }}
            />
          ))}
          <button
            className="btn btn-secondary"
            type="submit"
            onClick={(e) => {
              createMeme(e);
            }}
          >
            Créer
          </button>
        </form>
      </div>
    </>
  );
}

export default MemeGenerator;
