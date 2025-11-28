const app = require("./index");
const request = require("supertest");

//test and it are the same 

// using test
// describe("POST /sum" , () => {
//     test("addition of two numbers 1+2 will be 3" , async () => {
//         let response = await request(app).post("/sum").send({
//             a:1,
//             b:2
//         })
//         expect(response.bosy.data).toBe(3);
//     })
// })


//using it
describe("POST /sum" , () => {
    it("it should return addition of two numbers" , async () => {
        let response = await request(app).post("/sum").send({
            a:1,
            b:2
        })
        expect(response.body.data).toBe(3);
    })

    it("should return invalid arguments if any one of the parameter is not present or undefined" , async () => {
        let response = await request(app).post("/sum").send({
            a:1
        })
        expect(response.body.message).toBe("invalid arguments");
    })  
})



describe("POST /multiply" , () => {
    it("it should return multiplication of two numbers" , async () => {
        let response = await request(app).post("/multiply").send({
            a:1,
            b:2
        })
        expect(response.body.data).toBe(2);
    })

    it("should return invalid arguments if any one of the parameter is not present or undefined" , async () => {
        let response = await request(app).post("/multiply").send({
            a:1
        })
        expect(response.body.message).toBe("invalid arguments");
    })  
})