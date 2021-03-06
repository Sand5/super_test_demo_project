const supertest = require("supertest-session");
const expect = require("chai").expect;

let testSession = supertest("http://localhost:8080")
let res;
let loginresource = "/rest/auth/1/session";
let commentsresorce = "/rest/api/2/issue/10016/comment";

const inputs = [
  { 
    sesssion: testSession,
    username: "test1",
   password: "password",
    expectedcode: 401 
  },

  {
    sesssion: testSession,
    username: "sanderson_imbeah5@hotmail.com",
    password: "tested@",
    expectedcode: 401,
  },
];

beforeEach(() => {
  //testSession = supertest("http://localhost:8080");
});

describe("Jira Comments Test", () => {
  
  it.skip("I should be able to log into Jira", async () => {
    res = await testSession
      .post(loginresource)
      .send({
        username: "sanderson_imbeah5@hotmail.com",
        password: "Sandy82@",
      })
      .set("Content-type", "application/json");
    console.log(res.status);
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



  
    inputs.forEach(function (input) {
      let passwordName = input.password;
      let usernameName = input.username;
      let expectedCode = input.expectedcode;

      it.skip("Test incorrect username and password types", async() => {
      res =  await input.sesssion
      .post(loginresource)
      .send({
        username: usernameName,
        password: passwordName ,
      })
      .set("Content-type", "application/json")
    
   console.log(res);

  expect(expectedCode).to.equal(res.status);

    });


  });
});
