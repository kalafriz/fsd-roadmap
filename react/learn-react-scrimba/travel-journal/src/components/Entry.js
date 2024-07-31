import pin from "./icons/pin.png";
export default function Entry(props) {
  return (
    <div className="entry">
      <img src={`${props.img}`} alt={props.title} />
      <div className="entry--data">
        <span>
          <h3>{props.title}</h3>
          <a href={props.googleMapsUrl}>
            <img src="pin" alt="" className="entry--pin" />
          </a>
        </span>
        <h5>{props.location}</h5>
        <p>
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
