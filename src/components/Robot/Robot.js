import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteRobotThunk } from "../../redux/thunks/robotsThunks";
import Button from "../Button/Button";

const Robot = ({ robot, robot: { img, name, yearCreation } }) => {
  const Div = styled.div`
    background-color: gold;
    border: 2px solid black;
    display: flex;
    color: white;
    flex-direction: column;
    width: 250px;
    color: black;
    justify-content: center;
    border-radius: 20px;
    margin-top: 15px;
    font-size: 20px;
    img {
      width: 100%;
      border-radius: 20px;
      height: 300px;
    }
    button {
      border-radius: 20px;
      background-color: orangered;
      font-size: 25px;
      padding: 10px;
    }
  `;

  const RobotStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;
  const dispatch = useDispatch();
  const deleteRobot = () => {
    dispatch(deleteRobotThunk(robot._id));
  };
  return (
    <>
      <RobotStyle>
        <Div>
          <img src={img} alt="Robot" />
          <p>Name: {name}</p>
          <p>Year to Creation: {yearCreation}</p>
          <Button action={deleteRobot} text="¿destruir este robot?" />
        </Div>
      </RobotStyle>
    </>
  );
};

export default Robot;
