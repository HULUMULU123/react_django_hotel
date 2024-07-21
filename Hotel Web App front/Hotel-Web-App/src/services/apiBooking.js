import axios from "axios";

export async function getBooking(startDate, endDate, guests) {
  try {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/booking/${startDate}/${endDate}/${guests}`
    );

    return data;
  } catch (err) {
    console.log("Failed fetching room's data");
    console.log(err.toJSON());
    return;
  }
}
