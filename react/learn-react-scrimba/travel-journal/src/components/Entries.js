import Entry from "./Entry";

export default function Entries({ data }) {
  const entryComponents = data.map((entry) => {
    return (
      <Entry
        img={entry.imageUrl}
        title={entry.title}
        location={entry.location}
        googleMapsUrl={entry.googleMapsUrl}
        startDate={entry.startDate}
        endDate={entry.endDate}
        description={entry.description}
      ></Entry>
    );
  });

  return <div className="entries">{entryComponents}</div>;
}
