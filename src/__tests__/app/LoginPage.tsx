import LoginPage from "@/app/(auth)/login/page";
import { render, screen } from "@testing-library/react";

describe("LoginPage", () => {
  it("renders login", () => {
    render(<LoginPage />);
    expect(screen.getAllByRole("login")).toBeInTheDocument();
  });
});
