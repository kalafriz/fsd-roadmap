import pin from "./icons/pin.png";
import moment from "moment";
export default function Entry(props) {
  return (
    <div className="entry">
      <img src={`${props.img}`} alt={props.title} className="entry--img" />
      <div className="entry--data">
        <span>
          <h3>
            {props.title}
            {props.googleMapsUrl ? (
              <a href={props.googleMapsUrl}>
                <img src={pin} alt="" className="entry--pin" />
              </a>
            ) : (
              ``
            )}
          </h3>
        </span>
        <h5>{props.location}</h5>
        <p>
          {moment(props.startDate).format("LL")}{" "}
          {props.endDate ? `- ${moment(props.endDate).format("LL")}` : ""}
        </p>
        <p className="entry--description">{props.description}</p>
      </div>
    </div>
  );
}
