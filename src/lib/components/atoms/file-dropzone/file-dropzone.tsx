import React, { ReactElement, useState } from "react";
import { Modal } from "#/lib/components/atoms/modal";
import { TopbarDropzoneProps } from "./file-dropzone.type";
import { Text } from "#/lib/components/atoms/text";
import { clsx } from "clsx";

export function FileDropzone({ isOpen, setOpen }: TopbarDropzoneProps): ReactElement {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files) {
      const fileList = Array.from(files);
      handleFiles(fileList);
    }
  };

  const handleFiles = (files: File[]): void => {
    // handle the files here
    console.log(files);
  };

  return (
    <Modal title="Importer une conversation" isOpen={isOpen} setOpen={setOpen} className="flex flex-col items-end gap-2">
      <div
        className={clsx(
          "border-2 border-dashed w-full h-56 flex justify-center items-center rounded",
          {
            "border-primary bg-primary/10": dragging,
            "border-gray-4": !dragging
          }
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Text
          size="xl"
          className={clsx(
            "font-semibold text-gray-4 pointer-events-none",
            { "text-primary": dragging }
          )}
        >
          Déposez vos fichiers ici
        </Text>
      </div>

      <input
        type="file"
        id="file-input"
        onChange={handleFileInput}
        style={{ display: "none" }}
      />

      <div className="flex items-center gap-4">
        <Text className="text-gray-4">ou</Text>
        <label htmlFor="file-input" className="text-white bg-primary py-2 px-8 cursor-pointer rounded">
        Choisir un fichier
        </label>
      </div>
    </Modal>
  );
}