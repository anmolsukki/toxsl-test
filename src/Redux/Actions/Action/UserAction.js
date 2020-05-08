import * as actionTypes from '../ActionTypes/ActonTypes';

export const UserAction = (data) => {
  return async (dispatch) => {
    dispatch(actionTypes.USER_DATA_SUCCESS(data));
  };
};
