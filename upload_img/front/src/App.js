import { useState } from "react";

function App() {
  const [files, setFiles] = useState(null);

  const makeFileList = (e) => {
    setFiles(e.target.files);
  };

  const uploadImages = () => {
    const formData = new FormData();
    Object.values(files).forEach((file) => {
      formData.append("uploadFiles", file);
    });

    fetch("/img", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        //console.log(data);
      });
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={makeFileList} />
      <button onClick={uploadImages}>업로드</button>
    </div>
  );
}

export default App;
