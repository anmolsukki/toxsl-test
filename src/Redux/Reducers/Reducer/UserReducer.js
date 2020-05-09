import * as actionConstant from '../../Actions/ActionConstant/ActionConstant';

const initialState = {
  reUserData: [],
};

export const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.SIGNUP_DATA_SUCCESS:
    return {
      ...state,
      reUserData: [...state.reUserData, action.data.userData],
    };

    case actionConstant.REMOVE_DATA_SUCCESS:
    const  {reUserData : db} = state;
    const {userData : userId} = action.data;
    const delteIndex  = db.findIndex(user => user.id === userId)
    db.splice(delteIndex, 1);
    return {
      ...state,
    };
    default:
  }
  return state;
};
