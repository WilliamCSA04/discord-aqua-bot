import config from "../config";
import commandHandler from "./CommandHandler";

const { prefix, separator } = config;

export function start(message) {
  if (!message.content.includes(prefix) || message.author.bot) return;
  const command = commandHandler(message);
  if (command.main === "start") {
    const timeInMinutes = command.args[0] || 20;
    const timerInMiliseconds = timeInMinutes * 60 * 1000;
    message.channel.send(
      `Okay, I will remind you to drink water every ${timeInMinutes} minutes`
    );
    setInterval(() => {
      message.channel.send("Drink water!");
    }, timerInMiliseconds);
  }
}
