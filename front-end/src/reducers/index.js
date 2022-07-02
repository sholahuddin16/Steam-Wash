import {combineReducers} from "redux";

import postsp from "./postsp";
import auth from "./auth";
import posts from "./posts";

export default combineReducers({ postsp, auth, posts });