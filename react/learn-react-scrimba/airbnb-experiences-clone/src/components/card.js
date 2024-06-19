import star from "../img/star.png";

export default function Card(props) {
  //console.log(props);
  return (
    <div className="card">
      <img
        src={`${process.env.PUBLIC_URL}/img/${props.img}`}
        alt="Experience Preview"
        className="card--image"
      />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{` ${props.rating} `}</span>
        <span className="grey">{`(${props.reviewCount}) • `}</span>
        <span className="grey">{`${props.country}`}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <strong>{`From $${props.price} `}</strong>/ person
      </p>
    </div>
  );
}
