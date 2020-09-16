const supertest = require("supertest-session");
const expect = require("chai").expect;

let testSession = null;
let res;
let loginresource = "/rest/auth/1/session";
let commentsresorce = "/rest/api/2/issue/10016/comment";

beforeEach(() => {
  testSession = supertest("http://localhost:8080");
});

describe.skip("Jira Comments Test", () => {
  it("I should be able to log into Jira", async () => {
    res = await testSession
      .post(loginresource)
      .send({
        username: "sanderson_imbeah5@hotmail.com",
        password: "Sandy82@",
      })
      .set("Content-type", "application/json");
    console.log(res.status)
    expect(res.status).to.equal(200);

    res = await testSession.post(commentsresorce).send({
      body: "This is a comment is from SuperTest NOW.",
      visibility: {
        type: "role",
        value: "Administrators",
      },
    });

    console.log(res.status);
    expect(res.status).to.equal(201);
  });
});
