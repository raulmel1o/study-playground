import app from '../src/server';
import supertest from 'supertest';

const request = supertest(app);

it("Should get healthcheck status", async () => {
  const response = await request.get("/health");

  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({"status": "UP"});
});

it("Should get healthcheck status", async () => {
  const response = await request.get("/info");

  expect(response.statusCode).toBe(200);
  expect(response.body.build).toBeTruthy();
  expect(response.body.build.name).toBe("met-museum-service");
  expect(response.body.build.description).toBeTruthy();
  expect(response.body.build.version).toBeTruthy();
});

it("Should get healthcheck status", async () => {
  const response = await request.get("/metrics");

  expect(response.statusCode).toBe(200);
  expect(response.body.mem).toBeTruthy();
  expect(response.body.mem.rss).toBeTruthy();
  expect(response.body.mem.heapTotal).toBeTruthy();
  expect(response.body.mem.heapUsed).toBeTruthy();
  expect(response.body.mem.external).toBeTruthy();
  expect(response.body.mem.arrayBuffers).toBeTruthy();
  expect(response.body.uptime).toBeTruthy();
});
