class UserN5 {
    id: string;
    name: string;
    email?: string;
    createdAt: Date = new Date() // init at declaration -> ok

    constructor(id: string, name: string, email?: string){
        // asign all the required fields here
        this.id = id;
        this.name = name;
        if(email) this.email = email
    }
}
const result4 = new UserN5("1", "Omm");
const result5 = new UserN5("2", "bunny", "bunnybusiness@gmail.com")
console.log("Hi")