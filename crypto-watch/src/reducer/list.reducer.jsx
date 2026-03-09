export const SET_LIST_DISPLAY = "SET_LIST_DISPLAY";

const initialeState = { showList: false };

export default function listReducer(state = initialeState, action) {
  switch (action.type) {
    case "SET_LIST_DISPLAY":
      return { showList: action.payload };
    default:
      return state;
  }
}