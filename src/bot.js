const Discord = require("discord.js");
const client = new Discord.Client();
const dotenv = require("dotenv");
dotenv.config();
const prefix = process.env.PREFIX;

client.once("ready", () => {
  console.log("ready");
});

client.on("message", (message) => {
  if (!message.content.includes(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();
  if (command === "water") {
    message.channel.send(
      "Okay, I will remind you to drink water every half an hour"
    );
    setInterval(() => {
      message.channel.send("Drink water!");
    }, 1800000);
  }
});

client.login(process.env.TOKEN);
