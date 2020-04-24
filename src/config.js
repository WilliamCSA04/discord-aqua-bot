import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export default {
  prefix: process.env.PREFIX,
  separator: process.env.SEPARATOR,
  token: process.env.TOKEN,
};
