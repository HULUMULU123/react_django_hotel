import axios from "axios";

export async function getMyAccount(email) {
  try {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/users/customerinf/${email}`
    );
    return data;
  } catch (err) {
    console.log("Failed fetching account's data");
    console.log(err.toJSON());
    return;
  }
}
