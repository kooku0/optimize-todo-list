import { createStore } from "redux";
import modules from "./reducers";

const configure = () => {
  return createStore(modules);
};

export default configure;
