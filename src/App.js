import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form.js";
import RobotList from "./components/RobotList/RobotList";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <>
      <Form />
      <RobotList />
    </>
  );
}

export default App;
