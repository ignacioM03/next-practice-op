import NewPostPage from "@/app/posts/new/page";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe(" NewPostForm  ", () => {
  it("renders NewPostForm", async () => {
    const mockAddPost = jest.fn();
    const { getByPlaceholderText, getByText } = render(<NewPostPage />);

    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(screen.getByPlaceholderText("Body"), {
      target: { value: "Test Body" },
    });
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => expect(mockAddPost).toHaveBeenCalled());
  });
});
