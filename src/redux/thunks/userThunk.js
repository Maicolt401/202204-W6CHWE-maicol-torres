import axios from "axios";
import { loginActionCreator } from "../features/userSlice";

const loginThunk = (userData) => async (dispatch) => {
  const url = process.env.REACT_APP_API_URL;
  const { data } = await axios.post(url.userData);

  const userInfo = data.jwtDecode(data.token);

  localStorage.setItem("token", data.token);

  dispatch(loginActionCreator(userInfo));
};
export default loginThunk;
