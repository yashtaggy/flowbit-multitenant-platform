const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const User = require("../models/User");
const Ticket = require("../models/Ticket");

require("dotenv").config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase(); // clean up test DB
  await mongoose.connection.close();
});

describe("Tenant Isolation", () => {
  let tokenA, tokenB;

  beforeAll(async () => {
    // Register Admin A (LogisticsCo)
    await request(app).post("/api/auth/register").send({
      email: "adminA@example.com",
      password: "password123",
      role: "Admin",
      customerId: "LogisticsCo",
    });

    // Register Admin B (RetailGmbH)
    await request(app).post("/api/auth/register").send({
      email: "adminB@example.com",
      password: "password123",
      role: "Admin",
      customerId: "RetailGmbH",
    });

    // Login Admin A
    const loginA = await request(app).post("/api/auth/login").send({
      email: "adminA@example.com",
      password: "password123",
    });
    tokenA = loginA.body.token;

    // Login Admin B
    const loginB = await request(app).post("/api/auth/login").send({
      email: "adminB@example.com",
      password: "password123",
    });
    tokenB = loginB.body.token;

    // Create Tickets
    await Ticket.create([
      { title: "Ticket A1", customerId: "LogisticsCo" },
      { title: "Ticket A2", customerId: "LogisticsCo" },
      { title: "Ticket B1", customerId: "RetailGmbH" },
    ]);
  });

  it("Admin A should only see their own tickets", async () => {
    const res = await request(app)
      .get("/api/tickets")
      .set("Authorization", `Bearer ${tokenA}`);

    console.log("Response A:", res.statusCode, res.body);
    
    expect(res.body.length).toBe(2);
    res.body.forEach(ticket =>
      expect(ticket.customerId).toBe("LogisticsCo")
    );
  });

  it("Admin B should only see their own tickets", async () => {
    const res = await request(app)
      .get("/api/tickets")
      .set("Authorization", `Bearer ${tokenB}`);
    
    expect(res.body.length).toBe(1);
    expect(res.body[0].customerId).toBe("RetailGmbH");
  });
});
afterAll(async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
    }
  } catch (err) {
    console.error("afterAll error:", err);
  }
}, 15000); // 🕒 Keep the timeout if needed

