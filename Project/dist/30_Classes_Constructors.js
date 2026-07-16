"use strict";
class UserN5 {
    id;
    name;
    email;
    createdAt = new Date(); // init at declaration -> ok
    constructor(id, name, email) {
        // asign all the required fields here
        this.id = id;
        this.name = name;
        if (email)
            this.email = email;
    }
}
const result4 = new UserN5("1", "Omm");
const result5 = new UserN5("2", "bunny", "bunnybusiness@gmail.com");
console.log("Hi");
