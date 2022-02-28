import React from "react";

const SubirVideo = ({uploadFile}) => (
    <form method="post" action="/videos" id="create-video">
        <h2>Crear video</h2>
        <label>
            Nombre
        </label>
        <input type="text" name="name"/>
        
        <label>
            Duración
        </label>
        <input type="text" name="duration"/>

    <button type="submit">
        Crear curso!
    </button>

    </form>
);

export default React.memo(SubirVideo);