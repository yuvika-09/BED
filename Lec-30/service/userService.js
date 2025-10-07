const {PrismaClient} = require("./generated/prisma");
let prisma = new PrismaClient();

class User {

    static async addUser(email,name) {
    const newUser = await prisma.user.create({
        data:{
            email:email,
            name:name
        }
    })
    return "user added";
    }

    static async getUser(email) {
    let user = await prisma.user.findUnique({
        where: {
            email:email
        }
    })
    return user
}



static async updateUser(email,name) {
    let updateUser = await prisma.user.update({
        where: {
            email:"yuvika@gmail.com"
        },
        data: {
            name: name
        }
    })
    return updateUser
}



static async deleteUser(email) {
    let deleteUser = await prisma.user.delete({
        where: {
            email:"yuvika@gmail.com"
        }
    })
    return deleteUser
}
}

module.exports = User;