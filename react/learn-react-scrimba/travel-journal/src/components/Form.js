import { useState } from "react";
import upload from "./icons/upload.png";

export default function Form({ addEntry }) {
  const [file, setFile] = useState(upload);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const formJSON = Object.fromEntries(formData.entries());
    formJSON.imageUrl = file;
    console.log(formJSON);
    addEntry(formJSON);
    setFile(upload);
    document.getElementById("form").reset();
  }

  function handleChange(event) {
    console.log(event.target.files);
    if (event.target.files && event.target.files.length) {
      /*
      const imgUrl = URL.createObjectURL(event.target.files[0]);
      setFile(imgUrl);
      console.log("imgURL:");
      console.log(imgUrl);
      */

      // encode image to base64 so it can be saved to localStorage
      // following https://fabiorosado.dev/blog/upload-images-without-backend/#using-localstorage-to-save-the-image-and-display-it-on-each-visit
      const imgFile = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(imgFile);
      reader.onload = () => {
        const result = String(reader.result);
        if (result) {
          setFile(result);
        }
      };
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} id="form" className="form--card">
        <div className="form--dropzone">
          <input
            name="imageUrl"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="form--fileUpload"
            required
          />
          <img src={file} alt="" className="form--img" />
        </div>
        <span className="form--data">
          <input
            name="title"
            type="text"
            placeholder="New Entry"
            className="h3"
            required
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            className="h5"
            required
          />
          <input
            name="googleMapsUrl"
            type="url"
            placeholder="Google Maps URL"
          />
          <input name="startDate" type="date" required />
          <input name="endDate" type="date" />
          <input
            name="description"
            type="text"
            placeholder="Description"
            required
          />
          <input type="submit" />
        </span>
      </form>
    </div>
  );
}
