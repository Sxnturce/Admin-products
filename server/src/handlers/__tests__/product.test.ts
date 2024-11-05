import request from "supertest";
import server from "../../server";
import db from "../../config/db";

beforeAll(async () => {
	await db.sync({ force: true });
});

afterAll(async () => {
	await db.close();
});

describe("POST /api/admin/ ", () => {
	it("shild display validation errors", async () => {
		const res = await request(server).post("/api/admin/").send({});
		expect(res.status).toBe(400);
		expect(res.body).toHaveProperty("err");

		expect(res.status).not.toBe(201);
	});

	it("should validate that the price is grater than 0", async () => {
		const res = await request(server).post("/api/admin/").send({
			name: "Monitor curvo",
			price: 0,
		});
		expect(res.status).toEqual(400);
		expect(res.body).toHaveProperty("err");

		expect(res.body).not.toHaveProperty("data");
	});

	it("should create a new product", async () => {
		const res = await request(server).post("/api/admin/").send({
			name: "Pantalla-testing",
			price: 500,
		});
		expect(res.status).toEqual(201);
		expect(res.body).toHaveProperty("data");

		expect(res.status).not.toEqual(400);
		expect(res.body).not.toHaveProperty("err");
	});
});

describe("GET /api/admin/ ", () => {
	it("Get JSON response with products", async () => {
		const response = await request(server).get("/api/admin");

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty("data");
		expect(response.headers["content-type"]).toMatch(/json/);

		expect(response.status).not.toBe(400);
	});
});

describe("GET /api/admin/:id ", () => {
	it("should check a valid id in the URL", async () => {
		const res = await request(server).get(`/api/admin/not-valid-url`);
		expect(res.status).toBe(400);
		expect(res.body).toHaveProperty("err");
	});

	it("Should return a 404 response for a not-existent product", async () => {
		const productID = 2000;
		const res = await request(server).get(`/api/admin/${productID}`);
		expect(res.status).toBe(404);
		expect(res.body).toHaveProperty("err");
	});

	it("Get a json/response for a single product", async () => {
		const res = await request(server).get(`/api/admin/1`);

		expect(res.status).toBe(200);
		expect(res.body).toHaveProperty("data");
	});
});

describe("PUT /api/admin/:id ", () => {
	it("should check a valid id in the URL", async () => {
		const res = await request(server).put("/api/admin/not-valid-url").send({
			name: "Test - product",
			price: 800,
		});

		expect(res.status).toEqual(400);
		expect(res.body).toHaveProperty("err");
	});

	it("Should return a 404 response for a not-existent product", async () => {
		const productID = 2000;
		const res = await request(server).put(`/api/admin/${productID}`).send({
			name: "Test - product",
			price: 800,
		});
		expect(res.status).toEqual(404);
		expect(res.body).toHaveProperty("err");

		expect(res.body).not.toHaveProperty("data");
	});

	it("Should return a 400 if nothing is sent to the API", async () => {
		const productID = 1;
		const res = await request(server).put(`/api/admin/${productID}`).send({});
		expect(res.status).toEqual(400);
		expect(res.body).toHaveProperty("err");

		expect(res.body).not.toHaveProperty("data");
	});

	it("You should verify that the price is set to 0 and return 400", async () => {
		const productID = 1;
		const res = await request(server)
			.put(`/api/admin/${productID}`)
			.send({ name: "Test - product", price: 0 });

		expect(res.status).toEqual(400);
		expect(res.body).toHaveProperty("err");

		expect(res.body).not.toHaveProperty("data");
	});

	it("Should return a 200 response if all ok", async () => {
		const res = await request(server)
			.put(`/api/admin/1`)
			.send({ name: "Test - product", price: 500 });
		expect(res.status).toEqual(200);
		expect(res.body).toHaveProperty("data");

		expect(res.body).not.toHaveProperty("err");
	});
});

describe("PATCH /api/admin/:id ", () => {
	it("should check a valid id in the URL", async () => {
		const res = await request(server).patch("/api/admin/not-valid-url");
		expect(res.status).toEqual(400);
		expect(res.body).toHaveProperty("err");
	});

	it("Should return a 404 response for a not-existent product", async () => {
		const productID = 2000;
		const res = await request(server).patch(`/api/admin/${productID}`);
		expect(res.status).toEqual(404);
		expect(res.body).toHaveProperty("err");

		expect(res.body).not.toHaveProperty("data");
	});

	it("Should return a 200 response if all ok", async () => {
		const res = await request(server).patch(`/api/admin/1`);
		expect(res.status).toEqual(200);
		expect(res.body).toHaveProperty("data");

		expect(res.body).not.toHaveProperty("err");
	});
});

describe("DELETE /api/admin/:id ", () => {
	it("should check a valid id in the URL", async () => {
		const res = await request(server).delete("/api/admin/not-valid-url");

		expect(res.status).toEqual(400);
		expect(res.body).toHaveProperty("err");
	});

	it("Should return a 404 response for a not-existent product", async () => {
		const productID = 2000;
		const res = await request(server).delete(`/api/admin/${productID}`);
		expect(res.status).toEqual(404);
		expect(res.body).toHaveProperty("err");

		expect(res.body).not.toHaveProperty("data");
	});

	it("Should delete product", async () => {
		const res = await request(server).delete(`/api/admin/1`);
		expect(res.status).toEqual(200);
		expect(res.body).toHaveProperty("msg");

		expect(res.body).not.toHaveProperty("err");
	});
});
