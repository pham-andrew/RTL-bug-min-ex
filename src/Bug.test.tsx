import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Page1 from "./Page1";
import Page2 from "./Page2";

beforeEach(() => fetchMock.resetMocks());

test("given incorrect mocks", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));
    render(<Page1 />);
    expect(screen.queryByText("hello world")).not.toBeInTheDocument();
});

test("passes if it is the only one run", async () => {
    fetchMock.mockResponseOnce(JSON.stringify("hello world"));
    render(<Page2 />);
    await waitFor(() => {
        expect(screen.getByText("hello world")).toBeInTheDocument();
    });
});