import { useState } from "react";

// initial/default data
const initialData = [
  {
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://maps.app.goo.gl/j1bYMM7rSZSAHs4a6",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description: "Today we hiked Mount Fuji, it was very beautiful.",
    imageUrl:
      "https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1531981666/fujiguide/SG010_6",
  },
];

export default function Data() {
  const [data, setData] = useState(initialData);

  const addEntry = (entry) => {
    alert("add entry");
    setData((prevData) => [...prevData, entry]); //
  };

  return { data, addEntry };
}
