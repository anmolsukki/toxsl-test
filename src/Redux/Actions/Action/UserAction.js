import * as actionTypes from '../ActionTypes/ActonTypes';
import history from '../ActionHistory/ActionHistory';

export const SignUpAction = (data) => {
  console.log("fsdfs", data)
  if(data.userData.id) {
    return async (dispatch) => {
      dispatch(actionTypes.SIGNUP_SUCCESS(data));
      history.push("/login")
    };
  }
  else {
    return async (dispatch) => {
      dispatch(actionTypes.REMOVE_SUCCESS(data));
    };
  }
};
