import authHandler from "./utils/authorization.js";
import { getData } from "./utils/httpReq.js";

const init = async () => {
  authHandler();
  const user = await getData("users");
  console.log(user);
};

document.addEventListener("DOMContentLoaded", init);
