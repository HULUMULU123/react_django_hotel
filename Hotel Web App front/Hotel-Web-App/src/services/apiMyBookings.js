import axios from "axios";

export async function getMyBookings(email) {
  try {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/users/mybookings/${email}`
    );
    return data;
  } catch (err) {
    console.log("Failed fetching bookings data");
    console.log(err.toJSON());
    return;
  }
}
