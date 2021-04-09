import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const AppTitle = screen.getByText(/My Portfolio/i);
  expect(AppTitle).toBeInTheDocument();
});
