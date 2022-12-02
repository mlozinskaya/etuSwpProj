import { combineReducers } from "redux";
import header from "../components/Header/reducer";
import home from "../components/HomePage/reducer";
import forum from "../components/ForumPage/reducer";

export default combineReducers({
  headerReducer: header,
  homeReducer: home,
  forumReducer: forum
});
