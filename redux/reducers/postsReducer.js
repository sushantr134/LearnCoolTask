import { CREATE_POST } from "../actions/types";

const initialState = { data: [] };

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        data: [...state.data, action.payload]
      };

    default:
      return state;
  }
};
