import React from "react";

const SubirVideo = ({uploadFile}) => (
    <div className="header-content">
        <div className="header-title-text" >Publicar conferencias</div>
        <input type="button" onClick={uploadFile} value="Publicar conferencia"></input>
    </div>
);

export default React.memo(SubirVideo);