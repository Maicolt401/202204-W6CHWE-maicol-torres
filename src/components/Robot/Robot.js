import styled from "styled-components";

const Robot = ({ robot: { img, name, yearCreation } }) => {
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
    img {
    }
  `;

  return (
    <>
      <Div>
        <img src={img} alt="Robot" />
        <p>Name: {name}</p>
        <p>Year to Creation: {yearCreation}</p>
        <button>Kill the Robot</button>
      </Div>
    </>
  );
};

export default Robot;
