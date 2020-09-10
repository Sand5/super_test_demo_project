const supertest = require("supertest");
const expect = require("chai").expect;

let baseURL = supertest("https://reqres.in");
let list_users = "/api/users?page=2";

describe("First Request to Get Users",()=> {
  let res;

  it("See Response", async()=> {
    res = await baseURL.get(list_users); //Sending GET request to the server
    console.log(res.body);
  });

  it("Checks that the response was OK",()=> {
    expect(res.status).to.equal(200);
  });

  it("Check that the data to be an arrary",()=> {
    expect(res.body.data).to.be.an("array");
  });

  it("Gets the id from the array",()=> {
    for (let i= 0; i<res.body.data.length; i++) {
      console.log(res.body.data[i].id);
      console.log(res.body.data[i].first_name);
    }
  });



});
