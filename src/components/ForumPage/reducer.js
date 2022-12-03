import * as act from "./constants";

const initialState = { 
    themes: []
};

export default function forum(state = initialState, action) {
  switch (action.type) {
    case act.GET_FORUM_THEMES: {
        return {
            ...state,
            themes: action.payload
        }
    }

    default:
      return state;
  }
}
