import config from "../config";
const { prefix, separator } = config;

export default function commandHandler(message) {
  const args = message.content.slice(prefix.length).split(separator);
  const mainCommand = args.shift().toLowerCase();
  const lowerCasedArgs = args.map((arg) => arg.toLowerCase());
  const commandWithArgs = {
    main: mainCommand,
    args: lowerCasedArgs,
  };
  return commandWithArgs;
}
