import { combineReducers } from "redux";
import { SignUpReducer } from './Reducer/UserReducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["CtrSignUp"]
}

const rootReducer = combineReducers({
    CtrSignUp: SignUpReducer,
});

export default persistReducer(persistConfig, rootReducer);
