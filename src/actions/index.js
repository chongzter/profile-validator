import profiles from "../apis/profiles";
import history from "../history";
import {
  CREATE_PROFILE,
  FETCH_PROFILES,
  FETCH_PROFILE,
  DELETE_PROFILE,
  EDIT_PROFILE,
} from "./types";

export const createProfile = (formValues) => async (dispatch) => {
  const response = await profiles.post("/profiles", formValues);

  dispatch({ type: CREATE_PROFILE, payload: response.data });
  history.push("/");
};

export const fetchProfiles = () => async (dispatch) => {
  const response = await profiles.get("/profiles");

  dispatch({ type: FETCH_PROFILES, payload: response.data });
};

export const fetchProfile = (id) => async (dispatch) => {
  const response = await profiles.get(`/profiles/${id}`);

  dispatch({ type: FETCH_PROFILE, payload: response.data });
};

export const editProfile = (id, formValues) => async (dispatch) => {
  const response = await profiles.patch(`/profiles/${id}`, formValues);

  dispatch({ type: EDIT_PROFILE, payload: response.data });
  history.push("/");
};

export const deleteProfile = (id) => async (dispatch) => {
  await profiles.delete(`/profiles/${id}`);

  dispatch({ type: DELETE_PROFILE, payload: id });
  history.push("/");
};
