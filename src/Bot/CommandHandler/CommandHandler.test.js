import commandHandler from "./CommandHandler";

describe("Command handler tests", () => {
  test("Expect that CommandHandler without message return an error", () => {
    expect(() => commandHandler()).toThrow(Error);
  });
  test("Expect that CommandHandler return a json with main and args", () => {
    const response = commandHandler({ content: "@Aqua start 10" });
    expect(response).toHaveProperty("main");
    expect(response).toHaveProperty("args");
  });
});
