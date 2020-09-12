import config from "../config";
import commandHandler from "./CommandHandler/CommandHandler";

const { prefix } = config;

let timer;

const commandList = {
  start: (options, message) => {
    const timeInMinutes = options[0] || 20;
    const timerInMiliseconds = timeInMinutes * 60 * 1000;
    message.channel.send(
      `Okay, I will remind you to drink water every ${timeInMinutes} minutes`
    );
    timer = setInterval(() => {
      message.channel.send("Drink water!");
    }, timerInMiliseconds);
  },
  stop: (options, message) => {
    if (timer) {
      clearInterval(timer);
      message.channel.send("Bye bye! If you need me, just call me again :p");
    }
  },
};

function execute(commandWithArgs, message) {
  const { main, args } = commandWithArgs;
  return commandList[main](args, message);
}

export function start(message) {
  if (!message.content.includes(prefix) || message.author.bot) return;
  const commandWithArgs = commandHandler(message);
  execute(commandWithArgs, message);
}

export function stop(message) {
  if (!message.content.includes(prefix) || message.author.bot) return;
  const commandWithArgs = commandHandler(message);
  execute(commandWithArgs, message);
}
