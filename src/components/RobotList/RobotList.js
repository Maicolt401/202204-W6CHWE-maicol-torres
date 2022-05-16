import { useSelector } from "react-redux";
import styled from "styled-components";
import Robot from "../Robot/Robot";

const RobotList = (index, robot) => {
  const robots = useSelector((state) => state.robots);

  const H1 = styled.h1`
    color: white;
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <H1>My Robotpedia</H1>
      <ul>
        {robots.map((robot) => (
          <li>
            <Robot key={robots._id} robot={robot} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotList;
