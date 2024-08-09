import pin from "./icons/pin.png";
export default function Navbar() {
  return (
    <nav>
      <img src={pin} alt="" height="25px" />
      <span className="logo"> TravelJournal</span>
    </nav>
  );
}
