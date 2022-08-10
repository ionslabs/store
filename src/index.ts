import { version } from "../package.json";

import store from "./core";
import indexDB from "./indexDB";

const session = store("session");
const local = store("local");

export { session, local, version };

export default { version, index: indexDB, session, local };
