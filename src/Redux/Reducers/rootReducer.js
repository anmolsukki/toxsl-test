import { combineReducers } from "redux";
import { UserReducer } from './Reducer/UserReducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["CtrUser"]
}

const rootReducer = combineReducers({
    CtrUser: UserReducer,
});

export default persistReducer(persistConfig, rootReducer);
