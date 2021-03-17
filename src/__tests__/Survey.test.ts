import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';
import createConnection from '../database';

describe("Surveys",  () => {

    beforeAll( async () => {
        const connection = await createConnection();
        connection.runMigrations();
    } );

    afterAll( async () =>{
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    } );

    it("Should be able to create a new survey", async () => {

        const response = await request(app).post("/surveys")
        .send({
            title:"new survey",
            description: "Oh thats is a new survey. Ty"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("SHould be able to get all surveys", async () => {

        await request(app).post("/surveys")
        .send({
            title:"new survey 2 ",
            description: "Oh thats is a new survey 2. Ty"
        });

        const response = await request(app).get("/surveys");
        expect(response.body.length).toBe(2);

    });
});