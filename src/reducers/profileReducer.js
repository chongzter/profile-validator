import _ from "lodash";
import {
  CREATE_PROFILE,
  FETCH_PROFILES,
  FETCH_PROFILE,
  DELETE_PROFILE,
  EDIT_PROFILE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROFILE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROFILE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROFILE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROFILE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
