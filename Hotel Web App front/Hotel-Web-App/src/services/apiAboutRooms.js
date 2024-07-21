import axios from "axios";

export async function getAboutRooms() {
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/api/aboutRooms");
    return data;
  } catch (err) {
    console.log("Failed fetching about's data");
    console.log(err.toJSON());
    return;
  }
}
