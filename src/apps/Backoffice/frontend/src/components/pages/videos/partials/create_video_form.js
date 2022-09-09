import React from "react";
import {VideosPostController} from '../../../../controllers/videos/VideosPostController.ts'

const CreateVideoForm = () => {

    const PostVideo = async (event) => {
        event.preventDefault();
        const {target} = event;
        const videosPostController = new VideosPostController();
        try {
            await videosPostController.createVideo(target.id.value, target.nombre.value, target.duracion.value, target.url.value);
        } catch(e) {
            console.log(e);
        }
    }

    return (
    <form id="create-video" data-cy='create-video' onSubmit={PostVideo}>
        <h2>Crear video</h2>
        <label>
            Id
        </label>
        <input type="text" name="id"/>
        <label>
            nombre
        </label>
        <input type="text" name="nombre"/>
        <label>
            duración
        </label>
        <input type="text" name="duracion"/>
        <label>
            url
        </label>
        <input type="text" name="url"/>
        <button type="submit">
        Crear curso!
        </button>
    </form>
    );
}

export default React.memo(CreateVideoForm);