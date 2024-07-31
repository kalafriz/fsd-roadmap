export default function Form() {
  return (
    <div className="form">
      form yayyyy
      <input type="text" placeholder="Title" required />
      <input type="text" placeholder="Location" required />
      <input type="url" placeholder="Google Maps URL" />
      <input type="date" required />
      <input type="date" />
      <input type="text" placeholder="Description" required />
      <input type="file" accept="image/*" required />
      <input type="submit" />
    </div>
  );
}
