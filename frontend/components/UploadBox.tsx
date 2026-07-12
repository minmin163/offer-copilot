"use client";

import { useState } from "react";


interface UploadBoxProps {
  title: string;
}


export default function UploadBox({
  title
}: UploadBoxProps) {


  const [fileName, setFileName] = useState("");


  function handleUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = event.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }

  }


  return (
    <div>

      <h3>
        {title}
      </h3>


      <input
        type="file"
        accept=".pdf,.jpg,.png"
        onChange={handleUpload}
      />


      {
        fileName &&
        <p>
          Selected: {fileName}
        </p>
      }


    </div>
  );
}
