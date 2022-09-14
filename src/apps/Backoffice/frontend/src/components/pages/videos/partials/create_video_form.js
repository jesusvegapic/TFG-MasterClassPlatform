import React from "react";
import {VideosPutController} from '../../../../controllers/videos/VideosPutController.ts'

const CreateVideoForm = () => {

    const PostVideo = async (event) => {
        event.preventDefault();
        const {target} = event;
        const videosPutController = new VideosPutController();
        if(target.nombre.value == null || target.duracion.value == null || target.url.value == null) {

        }
        try {
            await videosPutController.createVideo(target.nombre.value, target.duracion.value, target.url.value);
        } catch(e) {
            console.log(e);
        }
    }

    return (
    <form id="create-video" data-cy='create-video' onSubmit={PostVideo}>
        <h2>Crear video</h2>
        <label>
            nombre
        </label>
        <input type="text" name="nombre" required="true"/>
        <label>
            duración
        </label>
        <input type="text" name="duracion" required="true"/>
        <label>
            url
        </label>
        <input type="text" name="url" required="true"/>
        <button type="submit">
        Crear curso!
        </button>
    </form>
    );
}

export default React.memo(CreateVideoForm);