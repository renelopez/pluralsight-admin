import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";

it("should add course when passed CREATE_COURSE_SUCCESS", () => {
  //arrange

  const initialState = [
    {
      title: "A"
    },
    {
      title: "B"
    }
  ];

  const newCourse = {
    title: "C"
  };

  const action = actions.createCourseSuccess(newCourse);

  //act

  const currentState = courseReducer(initialState, action);

  // assert
  expect(currentState.length).toEqual(3);
  expect(currentState[0].title).toEqual("A");
  expect(currentState[1].title).toEqual("B");
  expect(currentState[2].title).toEqual("C");
});

it("should update a course when passed UPDATE_COURSE_SUCCESS", () => {
  //arrange
  const initialState = [
    {
      id: 1,
      title: "A"
    },
    {
      id: 2,
      title: "B"
    },
    {
      id: 3,
      title: "C"
    }
  ];

  const courseToUpdate = {
    id: 2,
    title: "Two"
  };

  const updateAction = actions.updateCourseSuccess(courseToUpdate);

  //act
  const updatedState = courseReducer(initialState, updateAction);

  //assert
  const courseUpdated = updatedState.find(
    course => course.id === courseToUpdate.id
  );
  const courseNotUpdated = updatedState.find(course => course.id === 1);

  expect(courseUpdated.title).toEqual("Two");
  expect(courseNotUpdated.title).toEqual("A");
  expect(updatedState.length).toEqual(3);
});
