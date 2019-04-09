import React from "react";
import { cleanup, render } from "react-testing-library";
import { authors } from "../../../tools/mockData";
import { AuthorsPage } from "./AuthorsPage";

afterEach(cleanup);

function renderAuthorsPage(args) {
  const defaultProps = {
    authors,
    courses: []
  };

  const props = { ...defaultProps, ...args };
  return render(<AuthorsPage {...props} />);
}

xit("shows the current author's count", () => {
  const { getByText } = renderAuthorsPage();
  getByText(`${authors.length} authors`);
});

xit("shows the add author button", () => {
  const { getByText } = renderAuthorsPage();
  getByText(`Add Author`);
});

xit("shows the edit author button", () => {
  const { getByText } = renderAuthorsPage();
  getByText(`Edit Author`);
});

xit("shows mocked data", () => {
  const { getByText } = renderAuthorsPage();
  getByText(`Cory House`);
  getByText(`Scott Allen`);
  getByText(`Dan Whalin`);
});
