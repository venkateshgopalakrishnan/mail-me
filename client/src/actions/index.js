import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatchEvent => {
  const res = await axios.get("/api/current_user");
  dispatchEvent({ type: FETCH_USER, payload: res.data });
};
