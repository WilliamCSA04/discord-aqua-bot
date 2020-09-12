import CommandHandler from "./CommandHandler";

test("adds 1 + 2 to equal 3", () => {
  const response = CommandHandler();
  expect(response).toBe(null);
});
