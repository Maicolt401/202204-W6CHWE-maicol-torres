import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form.js";
import RobotList from "./components/RobotList/RobotList";
import { loginActionCreator } from "./redux/features/userSlice.js";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";
import jwtDecode from "jwt-decode";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userInfo = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
    }
  }, [dispatch]);

  return (
    <>
      <Form />
      <RobotList />
    </>
  );
}

export default App;
