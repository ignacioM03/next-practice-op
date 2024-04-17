import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
//   beforeEach(() => {
//     render(<HomePage />);
//   });

  it("renders home", () => {
    render(<HomePage />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
