import UserModel from "@models/User";

describe("Test setup", () => {
  const user = new UserModel("renan", "eu@renanandrade.com.br");
  it("should be ok", () => {
    expect(user.name).toBe("renan");
  });
});
