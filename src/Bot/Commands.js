import config from "../config";
import commandHandler from "./CommandHandler";

const { prefix, separator } = config;

export function start(message) {
  if (!message.content.includes(prefix) || message.author.bot) return;
  const command = commandHandler(message);
  if (command.main === "start") {
    message.channel.send(
      "Okay, I will remind you to drink water every 20 minutes"
    );
    const timer = 1200000;
    setInterval(() => {
      message.channel.send("Drink water!");
    }, timer);
  }
}
