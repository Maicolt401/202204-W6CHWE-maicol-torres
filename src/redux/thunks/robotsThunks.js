import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await axios.get("https://robots-fgfh.onrender.com/Robots");
  if (response.status === 200) {
    dispatch(loadRobotsActionCreator(response.data.robots));
  }
};
