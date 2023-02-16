import React from "react";
import {VideosPostController} from '../../../../controllers/videos/VideosPostController.ts'
import {FilePond, registerPlugin} from 'react-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview)

const CreateVideoForm = () => {

    const PostVideo = async (event) => {
        event.preventDefault();
        const {target} = event;
        const videosPostController = new VideosPostController();
        try {
            console.log(target.video.files[0]);
            await videosPostController.createVideo(target.id.value, target.nombre.value, target.duracion.value, target.video.files[0]);
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
        <FilePond 
        name="video"
        type="file"
        maxFiles={1}
        labelIdle='Arrastra aquí el video o buscalo en <span class="filepond--label-action">tu pc</span>'
        allowFileTypeValidation={true}
        acceptedFileTypes={[
            "video/mp4"
        ]}
        />
        <button type="submit">
        Crear video
        </button>
    </form>
    );
}

export default React.memo(CreateVideoForm);