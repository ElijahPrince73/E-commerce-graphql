const jwt = require("jsonwebtoken");
import "dotenv";

const getUserId = context => {
  const Authorization = context.request.get("Authorization");

  if (Authorization) {
    const token = Authorization.replace("Bearer", "").trim();
    const { userId } = jwt.verify(token, process.env.APP_SECRET);

    return userId;
  }

  throw new Error("Not authenticated");
};

module.exports = {
  APP_SECRET,
  getUserId
};
