import styled from "styled-components";

const Form = () => {
  const StructureForm = styled.section`
    align-content: center;
    padding-top: 30px;
    .login-page {
      width: 360px;
      padding: 8% 0 0;
      margin: auto;
    }
    .form {
      z-index: 1;
      background: #ffffff;
      max-width: 360px;
      margin: 0 auto 100px;
      padding: 45px;
      text-align: center;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    .form input {
      font-family: "Roboto", sans-serif;
      outline: 0;
      background: #f2f2f2;
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 15px;
      box-sizing: border-box;
      font-size: 14px;
    }
    .form button {
      font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      outline: 0;
      background: #4caf50;
      width: 100%;
      border: 0;
      padding: 15px;
      color: #ffffff;
      font-size: 14px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.3 ease;
      cursor: pointer;
    }
    .form button:hover,
    .form button:active,
    .form button:focus {
      background: black;
    }
  `;
  const H1 = styled.h1`
    background-color: black;
    color: white;
    margin-top: 0px;
    top: 0px;
    position: fixed;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
  `;

  // const [formData, setData] = useState();

  // const [buttonDisable, setButtonDisable] = useState(true);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (formData.username !== "" && formData.password !== "") {
  //     setButtonDisable(false);
  //   } else {
  //     setButtonDisable(true);
  //   }
  // }, [formData]);

  // const changeData = (event) => {
  //   setData({ ...formData, [event.target.id]: event.target.value });
  // };

  // const submitLogin = (event) => {
  //   event.preventDefault();
  //   dispatch(loginThunk(formData));
  // };

  return (
    <>
      <H1>My Robotpedia</H1>
      <StructureForm>
        <div disabel="off" className="login-page">
          <div className="form">
            <form className="login-form" autoComplete="off">
              <label htmlFor="username" />
              <input type="text" placeholder="username" />
              <label htmlFor="password" />
              <input type="password" placeholder="password" />
              <button type="submit">LOG IN</button>
            </form>
          </div>
        </div>
      </StructureForm>
    </>
  );
};

export default Form;
