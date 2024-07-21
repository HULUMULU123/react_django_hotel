import axios from "axios";

export async function getAllBookings() {
  try {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/users/allbookings`
    );
    return data;
  } catch (err) {
    console.log("Failed fetching bookings data");
    console.log(err.toJSON());
    return;
  }
}
