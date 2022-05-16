import styled from "styled-components";
const Robot = ({ name, yearCreation, image, energy }) => {
  const Div = styled.div`
    background-color: grey;
    border: 2px solid red;
    display: flex;
    color: white;
    flex-direction: column;
    width: 250px;
    color: black;
    align-items: flex-start;
    border-radius: 20px;
  `;
  const H1 = styled.h1`
    color: white;
  `;

  return (
    <>
      <H1>Information to Robots</H1>
      <Div>
        <img src={image} alt="Robot" />
        <p>Name: {name}</p>
        <p>Year to Creation: {yearCreation}</p>
        <p>Energy: {energy} </p>
        <button>Kill the Robot</button>
      </Div>
    </>
  );
};

export default Robot;
