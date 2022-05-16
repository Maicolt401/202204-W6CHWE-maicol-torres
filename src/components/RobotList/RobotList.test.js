import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import RobotList from "./RobotList";

describe("given a RobotList component", () => {
  describe("When it renders li", () => {
    test("Then it should render a li", () => {
      render(
        <Provider store={store}>
          <RobotList />
        </Provider>
      );

      const listItems = screen.getByRole("list");

      expect(listItems).toBeInTheDocument();
    });
  });
});
