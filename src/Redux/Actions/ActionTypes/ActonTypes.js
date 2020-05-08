import * as actionConstant from '../ActionConstant/ActionConstant';

export const USER_DATA_SUCCESS = (data) => ({
  type: actionConstant.GET_USER_DATA_SUCCESS,
  data: data,
});
