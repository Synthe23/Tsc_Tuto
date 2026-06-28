// 👇🏻 is a array of string in read-only form
const ROLES = ["admin", "user", "operator"] as const; 

// derieve a union from the array
type Role = (typeof ROLES)[number];

function setRole(r: Role){
    console.log(r);
}

setRole('admin'); // if we try to chnge this other vals than the above 3 vals it gives error