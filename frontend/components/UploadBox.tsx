"use client";

import { useState } from "react";


export default function UploadBox() {

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
