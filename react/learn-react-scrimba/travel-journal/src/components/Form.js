export default function Form({ addEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    alert("form submitted!");
    const formData = new FormData(event.target);
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
    addEntry(formJSON);
  }

  return (
    <div className="form--card">
      <h5 className="form--header">New Entry</h5>
      <form onSubmit={handleSubmit}>
        <input
          name="imageUrl"
          type="file"
          accept="image/*"
          className="form--img"
          required
        />
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
