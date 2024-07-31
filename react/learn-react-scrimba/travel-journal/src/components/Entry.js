import pin from "./icons/pin.png";
export default function Entry(props) {
  return (
    <div className="entry">
      <img src={`${props.img}`} alt={props.title} className="entry--img" />
      <div className="entry--data">
        <span>
          <h3>
            {props.title}
            <a href={props.googleMapsUrl}>
              <img src={pin} alt="" className="entry--pin" />
            </a>
          </h3>
        </span>
        <h5>{props.location}</h5>
        <p>
          {props.startDate} - {props.endDate}
        </p>
        <p className="entry--description">{props.description}</p>
      </div>
    </div>
  );
}
