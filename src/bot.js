import discord from "./Discord";
import config from "./config";

const { login, ready, message } = discord;
const { prefix, token, separator } = config;

login(token);

ready(() => {
  console.log("ready");
});

message((message) => {
  if (!message.content.includes(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(separator);
  const command = args.shift().toLowerCase();
  if (command === "start") {
    message.channel.send(
      "Okay, I will remind you to drink water every 20 minutes"
    );
    const timer = 1200000;
    setInterval(() => {
      message.channel.send("Drink water!");
    }, timer);
  }
});
