import {combineReducers} from "redux";

import postsp from "./postsp";
import auth from "./auth";

export default combineReducers({ postsp, auth });