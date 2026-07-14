//* Get user prop
type UserN7 = {
  id: string;
  name: string;
  email?: string; // T['email']
  phone?: number
};

function getUserPropN7<T, K extends keyof T>(objN7: T, keyN7: K): T[K] {
  return objN7[keyN7];
}
const uN7: UserN7 = {
  id: "u1",
  name: "Omm",
};

const idValN7 = getUserPropN7(uN7, "phone");

//* Set user prop
function setUserPropN7<T, K extends keyof T>(objN7: T, keyN7: K, newVal: T[K]): void{
    objN7[keyN7] = newVal
}
setUserPropN7(uN7, 'name', 'John');
setUserPropN7(uN7, 'phone', 23);
