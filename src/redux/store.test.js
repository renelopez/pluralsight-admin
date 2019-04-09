import { createStore } from "redux";
import rootReducer from "./reducers/index";
import initialState from "./reducers/initialState";
import * as authorActions from "./actions/authorActions";
import * as courseActions from "./actions/courseActions";

xit("should handle creating courses without author", () => {
  //arrange
  const store = createStore(rootReducer, initialState);
  const author = {
    name: "Scott Guhtrie"
  };

  //act

  const createAuthorAction = authorActions.createAuthorSuccess(author);
  store.dispatch(createAuthorAction);

  //assert
  const createdAuthor = store.getState().authors[0];
  expect(createdAuthor).toEqual(createdAuthor);
});

it("should handle creating courses", () => {
  //arrange
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Securing Vue Apps",
    slug: "vue-authentication-security",
    authorId: 1,
    category: "JavaScript"
  };

  //act

  const createAuthorAction = courseActions.createCourseSuccess(course);
  store.dispatch(createAuthorAction);

  //assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
