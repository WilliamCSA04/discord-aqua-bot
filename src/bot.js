import discord from "./Discord";
import { start } from "./Bot/Commands";
import config from "./config";

const { login, ready, message } = discord;
const { token } = config;

login(token);

ready(() => {
  console.log("ready");
});

message(start);
