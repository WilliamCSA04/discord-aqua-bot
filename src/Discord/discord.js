import Discord from "discord.js";
const client = new Discord.Client();

export function login(token) {
  client.login(token);
}

export function ready(callback) {
  client.once("ready", callback);
}

export function message(callback) {
  client.on("message", callback);
}
