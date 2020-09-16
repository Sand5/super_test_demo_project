const supertest = require("supertest");
const expect = require("chai").expect;
const app = require("../data/index");

let baseURL = supertest(app);
let res;

describe("GET /", () => {
  it("it should have a status code of 200", async () => {
    res = await baseURL.get("/");
    console.log(res.text);

    expect(res.status).to.equal(200);
    expect(res.text).to.contain("loop");
  });

  it("POST/ this test case is checking the post request", async () => {
    res = await baseURL
      .post("/")
      .send({ name: "John" })
      .set("Accept", "/application/json/");

    expect(res.status).to.equal(200);
    console.log(res.body);
  });
});
