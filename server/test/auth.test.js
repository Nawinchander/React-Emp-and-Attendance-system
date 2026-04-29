const request = require("supertest");
const app = require("../server");

test("Login route", async () => {
  const res = await request(app)
    .post("/api/auth/login")
    .send({ email: "test@mail.com" });

  expect(res.statusCode).toBe(200);
});


