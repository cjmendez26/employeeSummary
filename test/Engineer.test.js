const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const employ = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(employ.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const employ = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(employ.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const employ = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(employ.getGithub()).toBe(testValue);
});