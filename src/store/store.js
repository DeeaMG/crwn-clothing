import { compose, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const middleWares = createLogger();
const composeEnhancers = compose(applyMiddleware(middleWares, thunk));
export const store = createStore(rootReducer, undefined, composeEnhancers);
