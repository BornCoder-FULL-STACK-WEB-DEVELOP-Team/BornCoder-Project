import React from "react";
import ReactDOM from "react-dom";
import BroesTask from "./BrowseTask";
import { render } from "@testing-library/react";
import axios from "axios";

it("renders welcome message", () => {
  const { getByText } = render(<BroesTask />);
  expect(getByText("open")).toBeInTheDocument();
  expect(getByText("open")).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BroesTask />, div);
});
