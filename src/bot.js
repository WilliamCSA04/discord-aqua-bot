const Discord = require("discord.js");
const client = new Discord.Client();
const dotenv = require("dotenv");
dotenv.config();

const prefix = process.env.PREFIX;
const separator = process.env.SEPARATOR;

client.once("ready", () => {
  console.log("ready");
});

client.on("message", (message) => {
  if (!message.content.includes(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(separator);
  const command = args.shift().toLowerCase();
  if (command === "water") {
    message.channel.send(
      "Okay, I will remind you to drink water every half an hour"
    );
    const timer = 1800000;
    setInterval(() => {
      message.channel.send("Drink water!");
    }, timer);
  }
});

client.login(process.env.TOKEN);
