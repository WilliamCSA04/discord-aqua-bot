import CommandHandler from "./CommandHandler";

describe("Command handler tests", () => {
  test("Expect that CommandHandler without message return an error", () => {
    expect(() => CommandHandler()).toThrow(Error);
  });
});
