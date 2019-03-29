import authorReducer from "./authorReducer";
import * as actions from "../actions/authorActions";

it("should create author when CREATE_AUTHOR_SUCCESS is called", () => {
  //arrange
  const initialState = [
    {
      name: "John Papa"
    },
    {
      name: "Scott Hanselman"
    },
    {
      name: "John Sonmez"
    }
  ];

  const newAuthor = {
    name: "Shane Milton"
  };

  const createAuthorAction = actions.createAuthorSuccess(newAuthor);

  //act

  const currentAuthorState = authorReducer(initialState, createAuthorAction);

  //assert
  expect(currentAuthorState.length).toEqual(4);
  expect(currentAuthorState[3].name).toBe("Shane Milton");
});

it("should create author when UPDATE_AUTHOR_SUCCESS is called", () => {
  //arrange
  const initialState = [
    {
      id: 1,
      name: "John Papa"
    },
    {
      id: 2,
      name: "Scott Hanselman"
    },
    {
      id: 3,
      name: "John Sonmez"
    }
  ];

  const updatedAuthor = {
    id: 2,
    name: "Shane Milton"
  };

  const updateAuthorAction = actions.updateAuthorSuccess(updatedAuthor);

  //act

  const currentAuthorState = authorReducer(initialState, updateAuthorAction);

  //assert
  const updatedUser = currentAuthorState.find(author => {
    author.id === updatedAuthor.id;
  });
  expect(currentAuthorState.length).toEqual(3);
  expect(updatedUser.name).toBe("Shane Milton");
  expect(updatedUser.id).toEqual(2);
});

it("should delete author when DELETE_AUTHOR_SUCCESS is called", () => {
  //arrange
  const initialState = [
    {
      id: 1,
      name: "John Papa"
    },
    {
      id: 2,
      name: "Scott Hanselman"
    },
    {
      id: 3,
      name: "John Sonmez"
    }
  ];

  const authorIdToDelete = 3;

  const deleteAuthorAction = actions.deleteAuthorSuccess(authorIdToDelete);

  //act

  const currentAuthorState = authorReducer(initialState, deleteAuthorAction);

  //assert
  expect(currentAuthorState.length).toEqual(2);
  expect(currentAuthorState[1].name).toBe("John Sonmez");
  expect(currentAuthorState[1].id).toEqual(3);
});
