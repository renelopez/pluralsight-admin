import React from "react";
import mount from "enzyme";
import { authors, newCourse, courses } from "../../../tools/mockData";
import ManageCoursePage from "./ManageCoursePage";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    course: newCourse,
    match: {}
  };

  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursePage {...props} />);
}
