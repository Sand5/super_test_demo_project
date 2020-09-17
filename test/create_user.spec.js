const supertest = require("supertest");
const expect = require("chai").expect;

let baseURL = supertest("https://reqres.in");
let list_user_endpoint = "/api/users";

describe("POST Request", () => {
  let post_resp =null;

  it("Makes a POST call", async () => {
    post_resp = await baseURL
      .post(list_user_endpoint)
      .type("form")
      .send({
        name: "John",
        job: "automation",
      })
      .set("Accept", "/application/json/");

    console.log(post_resp.body);
  });

  it("The response should be code 201", () => {
    expect(post_resp.status).to.equal(201);
    console.log(post_resp.status);
  });

});
