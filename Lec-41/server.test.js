const User = require("./model/user.schema");
jest.mock("./model/user.schema"); //module mocking

const app = require("./server");
const request = require("supertest");

describe("POST /api/users/register" , () => {
    it("should return user exists if he try to register with email which is alreday present in db", async () => {
        // mockResolvedValue -> used for async functions which return promise
        User.findOne.mockResolvedValueOnce(true); // mocking mongoose function
        let response = await (request(app).post("/api/users/register")).send({
            name : "Yuvika",
            email : "yuvika@gmail.com",
            password : "1234"
        })
        expect(response.body.message).toBe("User already exists");
    })

    it("should create new user with email yuvika@gmail.com" , async () => {
        User.findOne.mockResolvedValueOnce(false);
        User.create.mockResolvedValueOnce({
            name : "Yuvika",
            email : "yuvika@gmail.com",
            password : "1234"
        })
        let response = await request(app).post("/api/users/register").send({
            name : "Yuvika",
            email : "yuvika@gmail.com",
            password : "1234"
        })
        expect(response.body.message).toBe("User registered successfully");
        expect(response.body.data).toEqual({  //to compare objects
            name : "Yuvika",
            email : "yuvika@gmail.com",
            password : "1234"
        })
    })
})