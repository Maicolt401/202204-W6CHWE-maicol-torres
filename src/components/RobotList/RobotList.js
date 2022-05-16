import { useSelector } from "react-redux";
import styled from "styled-components";
import Robot from "../Robot/Robot";

const RobotList = (index, robot) => {
  const robots = useSelector((state) => state.robots);

  const H1 = styled.h1`
    background-color: black;
    color: white;
    border-radius: 25px;
    display: flex;
    justify-content: center;
  `;
  const Ul = styled.ul`
    padding-left: 0px;
  `;

  return (
    <>
      <H1>My Robotpedia</H1>
      <Ul>
        {robots.map((robot) => (
          <li>
            <Robot key={robots._id} robot={robot} />
          </li>
        ))}
      </Ul>
    </>
  );
};

export default RobotList;
