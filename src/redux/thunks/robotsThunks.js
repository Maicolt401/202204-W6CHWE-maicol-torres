import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await axios.get(
    "https://202204-w6chwe-maicol-torres-back.onrender.com/robots"
  );
  if (response.status === 200) {
    dispatch(loadRobotsActionCreator(response.data.robots));
  }
};
