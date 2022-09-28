import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import downloadImage from "./../utils/image-utils";

function MemeGenerated() {
    const navigate = useNavigate();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');
    console.log("url = ",url);

    return (
        <div className="d-flex justify-content-center align-items-center">
            {url && <img className="me-5" src={url} alt="meme"/>}
            <div className="buttons d-flex flex-column ">

            <button className="btn btn-secondary mb-3" onClick={(e) => {downloadImage(e,url)}}>Télécharger</button>
            <button onClick={() => navigate('/')} className="btn btn-secondary">
            Créer d'autres meme
            </button>
            </div>
        </div>
    );
}

export default MemeGenerated;