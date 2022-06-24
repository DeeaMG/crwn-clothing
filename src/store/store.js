import { compose, createStore, applyMiddleware } from "redux";
import logger, { createLogger } from "redux-logger";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const middleWares = createLogger(logger);
const composeEnhancers = compose(applyMiddleware(middleWares, thunk));
export const store = createStore(rootReducer, undefined, composeEnhancers);
