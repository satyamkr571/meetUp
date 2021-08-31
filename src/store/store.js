import { createStore} from "redux";
import reducer from '../reducer/reducer';

const store = createStore(reducer, Window.DEV_TOOL_EXTENSION)
export default store;