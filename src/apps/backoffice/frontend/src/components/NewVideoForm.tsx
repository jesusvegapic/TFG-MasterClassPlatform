import React, {useState} from "react";
import Form from './form/Form';
import FormInput from './form/FormInput';
import FormInputFile from './form/FormInputFile'
import { v4} from 'uuid';
import {createVideo} from '../services/videos'

interface State {
    id?: string;
    name?: string;
    duration?: string;
    content?: Blob;
};

type Errors = Partial<Record<keyof State, string>>;

type NewVideo = Required<State>;

const isLength = ({ value, min, max }: { value: string, min: number, max: number }) => 
    value.length >= min && value.length <= max;

const acceptedTypes = ['video/mp4'];


function NewVideoForm({ onSuccess, onError }: { onSuccess?: (event: NewVideo) => void; onError?: Function }) {
    const [state, setState] = useState<State>({ id: v4() });
    const [errors, setErrors] = useState<Errors>({});

    const validate = () => {
        const name = state.name && isLength({ value: state.name, min: 1, max: 30 }) ? '' : 'Nombre de video inválido';
        const duration = state.duration && isLength({ value: state.duration, min: 4, max: 100 }) ? '' : 'Duración de video inválida';
    
        setErrors({name, duration });

        const hasNoErrors = Boolean(!name && !duration);

        return hasNoErrors;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validate()) {
        try {
            setState({...state, id: v4()})
            createVideo(state as NewVideo);

            setState({ id: '', name: '', duration: '' });
            setErrors({ });
            onSuccess && onSuccess(state as NewVideo);
        } catch (error) {
            onError && onError();
        }
        }
    };

    return (
        <Form
        className="w-full text-left"
        id="create-course"
        title="Crear curso"
        submitLabel="Crear curso!"
        onSubmit={handleSubmit}
        >
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <FormInput
                id="grid-first-name"
                label="Nombre"
                name="name"
                value={state.name}
                placeholder=""
                onChange={event => setState({ ...state, name: event.target.value })}
                error={errors.name}
            />
            </div>
            <div className="w-full md:w-1/2 px-3">
            <FormInput
                id="grid-duration"
                label="Duración (en inglés)"
                name="duration"
                value={state.duration}
                placeholder=""
                onChange={event => setState({ ...state, duration: event.target.value })}
                error={errors.duration}
            />
            </div>
            <div className="w-full md:w-1/2 px-3">
            <FormInputFile
                id="grid-content"
                label="Video (en inglés)"
                name="video"
                onChange={files => setState({ ...state, content: files[0].file})}
                maxFiles={1}
                acceptedTypes={acceptedTypes}
            />
            </div>
        </div>
        </Form>
    );
}

export default NewVideoForm;