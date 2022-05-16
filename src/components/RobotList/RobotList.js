import Robot from "../Robot/Robot";
const RobotList = (index, robot) => {
  return (
    <ul>
      return (
      <li key={index}>
        <Robot robot={robot} />
      </li>
      );
    </ul>
  );
};

export default RobotList;
