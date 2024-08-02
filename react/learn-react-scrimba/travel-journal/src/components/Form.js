import { useState } from "react";
import upload from "./icons/upload.png";

export default function Form({ addEntry }) {
  const [file, setFile] = useState(upload);

  function handleSubmit(event) {
    event.preventDefault();
    alert("form submitted!");
    const formData = new FormData(event.target);
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
    addEntry(formJSON);
  }

  function handleChange(event) {
    console.log(event.target.files);
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form--card">
        <div className="form--dropzone">
          <input
            name="imageUrl"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="form--fileUpload"
            required
          />
          <div
            className="form--img"
            style={{
              background: `url(${file}) no-repeat center`,
              backgroundSize: "300px",
            }}
          ></div>
        </div>
        <span className="form--data">
          <input
            name="title"
            type="text"
            placeholder="Title"
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
