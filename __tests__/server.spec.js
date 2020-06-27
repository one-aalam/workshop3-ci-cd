const mockingoose = require("mockingoose").default;
const CustomerModel = require('../src/models/');
const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);

describe("Customers API", () => {

    describe("/GET customers", () => {
        it("returns all the available customers", async (done) => {
            const _doc = [{
                _id: '5ef6e8ed33d62000418f9ca4',
                name: 'Somebody',
                email: 'Somemail',
                address: 'Someaddress'
            }];
            mockingoose(CustomerModel).toReturn(_doc, 'find');
            const response = await request.get("/customers");

            expect(response.status).toBe(200);
            expect(response.body).toEqual(_doc);

            done();
        });
        it("returns one of the available customers", async (done) => {
            const _doc = {
                _id: '5ef6e8ed33d62000418f9ca4',
                name: 'Somebody',
                email: 'Somemail',
                address: 'Someaddress'
            };
            mockingoose(CustomerModel).toReturn(_doc, 'findOne');
            const response = await request.get("/customers/123");

            expect(response.status).toBe(200);
            expect(response.body).toEqual(_doc);

            done();
        });
    });
});