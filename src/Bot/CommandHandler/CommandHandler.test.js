import commandHandler from "./CommandHandler";
import config from "../../config";

describe("Command handler tests", () => {
  test("Expect that CommandHandler without message return an error", () => {
    expect(() => commandHandler()).toThrow(Error);
  });
  test("Expect that CommandHandler return a json with main and args", () => {
    const response = commandHandler({ content: "@Aqua start 10" });
    expect(response).toHaveProperty("main");
    expect(response).toHaveProperty("args");
  });
  test("Expect that CommandHandler return a json with main with start and args with ['10']", () => {
    const { main, args } = commandHandler({
      content: `${config.prefix}start 10`,
    });
    expect(main).toBe("start");
    expect(args).toEqual(["10"]);
  });
  test("Expect that CommandHandler return a json with main with start and without args", () => {
    const { main, args } = commandHandler({
      content: `${config.prefix}stop`,
    });
    expect(main).toBe("stop");
    expect(args).toEqual([]);
  });
});
