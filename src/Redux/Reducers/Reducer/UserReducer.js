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

    case actionConstant.EDIT_DATA_SUCCESS:
      const usersId = action.data.userData.id;
      const userName = action.data.userData.name;
      const userEmail = action.data.userData.email;
      state.reUserData = state.reUserData.map(user => {
        if(user.id === usersId) {
          user.userName = userName
          user.email = userEmail
          return user;
        }
        else {
          return user;
        }
      });
      return {
        ...state,
      };

    case actionConstant.REMOVE_DATA_SUCCESS:
    const  {reUserData : db} = state;
    const {userData : userId} = action.data;
    return {
      ...state,
      reUserData: db.filter(user => user.id !== userId)
    };
    default:
  }
  return state;
};
