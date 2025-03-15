import authService from "../service/authService";
import { setUser, setLoading, setError, logout } from "../slice/authSlice";

export const registerUser = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const user = await authService.registerUser(email, password);
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const user = await authService.loginUser(email, password);
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export const logoutUser = () => async (dispatch) => {
  try {
    await authService.logoutUser();
    dispatch(logout());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const loadUser = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const user = await authService.getStoredUser();
    if (user) {
      dispatch(setUser(user));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};
