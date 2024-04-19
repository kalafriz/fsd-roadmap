export default function RepoDetails({ details, loading }) {
  if (loading) {
    return <h1 className="loader">loading...</h1>;
  }
  return (
    <div className="repo-details-container">
      <div className="details-row">
        <label className="label">Name:</label>
        <span className="value">{details.name}</span>
      </div>
      <div className="details-row">
        <label className="label">Size:</label>
        <span className="value">{details.size}kB</span>
      </div>
      <div className="details-row">
        <label className="label">Last update:</label>
        <span className="value">{details.updated_at}</span>
      </div>
      <div className="details-row">
        <label className="label">Forks Count:</label>
        <span className="value">{details.forks_count}</span>
      </div>
      <div className="details-row">
        <label className="label">Language:</label>
        <span className="value">{details.language}</span>
      </div>
      <div className="details-row">
        <label className="label">Stars:</label>
        <span className="value">{details.stargazers_count}</span>
      </div>
    </div>
  );
}
