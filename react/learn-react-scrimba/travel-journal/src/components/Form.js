export default function Form({ addEntry }) {
  const form = document.querySelector("form");

  function handleSubmit(event) {
    event.preventDefault();
    alert("form submitted!");
    const formData = new FormData(event.target);
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
    addEntry(formJSON);
  }

  return (
    <div className="form">
      form yayyyy
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Title" required />
        <input name="location" type="text" placeholder="Location" required />
        <input name="googleMapsUrl" type="url" placeholder="Google Maps URL" />
        <input name="startDate" type="date" required />
        <input name="endDate" type="date" />
        <input
          name="description"
          type="text"
          placeholder="Description"
          required
        />
        <input name="imageUrl" type="file" accept="image/*" required />
        <input type="submit" />
      </form>
    </div>
  );
}
