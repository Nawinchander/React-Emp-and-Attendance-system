import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

test("renders login button", () => {
  render(<Login />);
  expect(screen.getByText("Login")).toBeInTheDocument();
});

