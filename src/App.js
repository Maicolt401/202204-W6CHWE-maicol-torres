import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RobotList from "./components/RobotList/RobotList";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <>
      <RobotList />
    </>
  );
}

export default App;
