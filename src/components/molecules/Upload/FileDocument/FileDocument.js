import React, { useRef, useState } from "react";
import "./FileDocument.scss";
// import imgUpload from "../../../img/vehicles/upload.svg";
import { Skeleton } from "primereact/skeleton";
import Image from "next/image";

import defaultImg from '@/../public/images/icons/upload.svg'

export default function FileDocument({ id, name, pdfFile, setPdfFile, className, skeleton }) {
    const inputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            setPdfFile(file); // Establecer el archivo PDF cargado
        } else {
            alert("Por favor, seleccione un archivo PDF válido.");
        }
    };

    const activateInput = () => {
        inputRef.current.click();
    };

    return (
        <>
            {!skeleton ? (
                <div className={"FileComponent " + className}>
                    <input
                        type="file"
                        id={id}
                        name={name}
                        ref={inputRef}
                        onChange={handleFileChange}
                        className="inputFile"
                        accept=".pdf" // Asegura que solo se permitan archivos PDF
                        style={{ display: "none" }}
                    />

                    <div className={'customInput'} onClick={activateInput}>
                        {pdfFile ? (
                            <div className="customInput">
                                <iframe
                                    src={URL.createObjectURL(pdfFile)}
                                    width="100%"
                                    height="100%"
                                    title="Vista previa de PDF"
                                />
                            </div>
                        ) : (
                            <Image className="imgCenter" src={defaultImg} alt="Subir archivo" />
                        )}
                    </div>
                </div>
            ) : (
                <div className={"inputFileComponent " + className}>
                    <Skeleton className={"customInput customInputSkeleton " + className} />
                </div>
            )}
        </>
    );
}
