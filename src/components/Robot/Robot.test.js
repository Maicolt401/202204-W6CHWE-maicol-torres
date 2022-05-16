import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Robot from "./Robot";

describe("Given the Robot component", () => {
  describe("When it renders a img in to the document", () => {
    test("Then it should render a img", () => {
      render(
        <Provider store={store}>
          <Robot />
        </Provider>
      );
      const expectedResult = screen.getByRole("img");

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
