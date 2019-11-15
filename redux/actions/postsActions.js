import { CREATE_POST } from "./types";

export const createPost = data => {
  return {
    type: CREATE_POST,
    payload: data
  };
};
