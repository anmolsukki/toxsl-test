import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from "redux-persist";
import rootReducer from "../Reducers/rootReducer";

const logger = (store) => {
  return (next) => {
    return (action) => {
      // console.log("[Middleware] dispatching", action);
      const result = next(action);
      // console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
export const persistor = persistStore(store)

export default { store, persistor };
