import { createStore } from "redux";
import rootReducer from "./reducers/index";
import initialState from "./reducers/initialState";
import * as authorActions from "./actions/authorActions";

it("should handle creating courses without author", () => {
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
