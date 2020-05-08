import * as actionConstant from '../../Actions/ActionConstant/ActionConstant';

const initialState = {
  reUserData: [],
  isLoading: false,
  error: null,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        reUserData: [...state.reUserData, action.data.userData],
        isLoading: false,
      };
    default:
  }
  return state;
};
