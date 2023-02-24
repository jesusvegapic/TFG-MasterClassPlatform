import React from 'react';
import {FilePond, registerPlugin} from 'react-filepond'
import { FilePondFile } from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePonPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

registerPlugin(FilePondPluginImagePreview, FilePonPluginFileValidateType);

type ChangeFileEventHandler = (file: FilePondFile[]) => void;

function FormInputFile({
  id,
  label,
  name,
  disabled,
  onChange,
  maxFiles,
  acceptedTypes
}: {
  id: string;
  label: string;
  name: string;
  disabled?: boolean
  onChange?: ChangeFileEventHandler;
  maxFiles: number;
  acceptedTypes : string[]
}) {
  return (

    <div>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
        {label}
      </label>

      <FilePond
        className={"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"}
        onupdatefiles={onChange}
        id={id}
        name={name}
        disabled={disabled}
        maxFiles={maxFiles}
        acceptedFileTypes={acceptedTypes}
      />
    </div>
  );
}

export default FormInputFile;