import axios from "axios";
import * as act from "./constants";

export const getThemes = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/forum");
    console.log(res.data)
    dispatch({
      type: act.GET_FORUM_THEMES,
      payload: res.data
    })
  }