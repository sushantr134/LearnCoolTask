import { combineReducers, compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { postsReducer } from "./reducers/postsReducer";

const rootReducer = combineReducers({ posts: postsReducer });

const Store = initialState => createStore(rootReducer, initialState, compose(applyMiddleware(thunk, logger)));

export default Store;
