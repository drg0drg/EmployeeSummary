const Intern = require("./Intern")

// @ponicode
describe("getRole", () => {
    let inst

    beforeEach(() => {
        inst = new Intern("Pierre Edouard", 12, "user1+user2@mycompany.com", 0)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getRole()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getSchool", () => {
    let inst

    beforeEach(() => {
        inst = new Intern(0, 12345, "something.example.com", 0)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getSchool()
        }
    
        expect(callFunction).not.toThrow()
    })
})
