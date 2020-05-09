import * as actionConstant from '../ActionConstant/ActionConstant';

export const SIGNUP_SUCCESS = (data) => ({
  type: actionConstant.SIGNUP_DATA_SUCCESS,
  data: data,
});

export const REMOVE_SUCCESS = (data) => ({
  type: actionConstant.REMOVE_DATA_SUCCESS,
  data: data,
});
